import { Request, Response } from 'express';
import logger from '../logger';
import UserService from '../services/user';
import db from '../models';

const userService = new UserService(db.UserCollection);


const userController = {

    addLanguage: async function (req: Request, res: Response) {
        const user = req.user as any;
        const userId: string = user.id;
        logger.debug(`attempting to add a language for user`)
        console.log("req.body: ", req.body);
        if (!req.body.language) {
            return res.status(400).send('Missing req.body.language');
        }
        const languageToFind: string = req.body.language.toLowerCase();

        try {
            const result = userService.validateAndCreateLanguageForUser(languageToFind, userId);
            logger.debug({ result });
            logger.info(`language '${languageToFind}' added for user`);
            res.status(200).send(result);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    getLanguageDataForUser: async function (req: Request, res: Response) {
        console.log("here is the req.params: ", req.params);
        console.log("here is the req.body: ", req.body);
        try {
            if (!req.params.language) {
                logger.error("Missing req.params.language");
                return res.status(400);
            }
            if (!req.params.username) {
                logger.error("Missing req.params.username");
                return res.status(400);
            }

            const languageToFind = req.params.language.toLowerCase(); // ensuring it's lowercase (probably already is by this point)
            const userIdToFind: string = req.params.username;

            const languageFound = await userService.FindLanguage(languageToFind, userIdToFind);

            console.log("languageFound is: ", languageFound);

            return res.status(200).send(languageFound);
        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }

    },

    findAllLanguagesForThisUser: async function (req: Request, res: Response) {
        logger.debug('Controller called to find all languages for this user');
        try {
            const userId: string = req.params.userId;
            console.log("userId: ", userId);
            if (!userId) {
                logger.error("USER ID IS MISSING from controller request object");
                return res.status(400);
            }
            const allWords = await userService.FindAllLanguagesForUser(userId);
            return res.send(allWords);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    answerCorrectly: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;
            const wordToLookFor: string = req.query.word as string;
            const language: string = req.query.language as string;
            const userId: string = user.id;

            if (userId === undefined) {
                return res.status(422).send('no user')
            }
            if (!wordToLookFor) {
                throw new Error('no word provided');
            }
            if (!language) {
                throw new Error('no language provided');
            }

            const answeredCorrectlyResponse = await userService.answerWordCorrectly(userId, wordToLookFor, language);

            return res.status(200).send(answeredCorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    answerIncorrectly: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;
            const userId: string = user.id;
            if (userId === undefined) {
                return res.status(400).send('no user');
            }
            if (!req.query.word) {
                return res.status(400).send('no word provided');
            }
            if (!req.query.language) {
                return res.status(400).send('no language provided');
            }
            const wordToLookFor = req.query.word as string;
            const language = req.query.language as string;



            const answeredIncorrectlyResponse = await userService.answerWordIncorrectly(userId, wordToLookFor, language)

            return res.send(answeredIncorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message)
        }
    },

    findAllUnlearnedWordsForGivenLanguageForUser: async function (req: Request, res: Response) {

        try {
            if (!req.query.language) {
                return res.status(400).send('no language provided');
            }
            const user = req.user as any;
            const userId: string = user.id;
            const language = req.query.language as string;

            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(userId, language);

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    getWordsForReviewForLanguageForUser: async function (req: Request, res: Response) {
        logger.debug('Controller called to getWordsForReviewForLanguageForUser');
        try {
            if (!req.params.language) {
                logger.error('req.params.language is missing');
                return res.status(400).send('no language provided');
            }
            const user = req.user as any;
            if (!user) {
                throw new Error('no user exists on the req object');
            }
            const userId = user.id;
            const language = req.params.language as string;

            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(userId, language);


            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    }
};

export default userController;