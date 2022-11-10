import { Request, Response } from 'express';
import logger from '../logger';
import UserService from '../services/user';

const userService = new UserService();

const userController = {

    addLanguage: async function (req: Request, res: Response) {
        const user = req.user as any;
        const userId = user.id;
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
            const userIdToFind = req.params.username;

            const languageFound = await userService.FindLanguage(languageToFind, userIdToFind);

            console.log("languageFound is: ", languageFound);

            return res.status(200).send(languageFound);
        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }

    },

    findAllLanguagesForThisUser: async function (req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            console.log("userId: ", userId);
            if (!userId) {
                logger.error("USER ID IS MISSING");
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
            const wordToLookFor = req.query.word;
            const language = req.query.language;

            if (user.id === undefined) {
                return res.status(422).send('no user')
            }
            if (!wordToLookFor) {
                throw new Error('no word provided');
            }
            if (!language) {
                throw new Error('no language provided');
            }

            const answeredCorrectlyResponse = await userService.answerWordCorrectly(req.user, wordToLookFor as string, language as string);

            return res.status(200).send(answeredCorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    answerIncorrectly: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;

            if (user.id === undefined) {
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



            const answeredIncorrectlyResponse = await userService.answerWordIncorrectly(req.user, wordToLookFor, language)

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
            const language = req.query.language as string;

            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    getWordsForReviewForLanguageForUser: async function (req: Request, res: Response) {
        try {
            if (!req.query.language) {
                return res.status(400).send('no language provided');
            }
            const user = req.user as any;
            const language = req.query.language as string;

            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    }
};

export default userController;