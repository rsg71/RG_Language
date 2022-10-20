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
        const languageToFind: string = req.body.language.toLowerCase();

        try {
            let result = userService.validateAndCreateLanguageForUser(languageToFind, userId);
            logger.debug({ result });
            logger.info(`language '${languageToFind}' added for user`);
            res.status(200).send(result);

        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    getLanguageDataForUser: async function (req: Request, res: Response) {

        try {
            console.log("here is the req.params: ", req.params);
            console.log("here is the req.body: ", req.body);

            const languageToFind = req.params.language.toLowerCase(); // ensuring it's lowercase (probably already is by this point)
            const userIdToFind = req.params.username;

            let languageFound = await userService.FindLanguage(languageToFind, userIdToFind);

            console.log("languageFound is: ", languageFound);

            return res.status(200).send(languageFound);
        } catch (err) {
            res.status(500).send(err);
        }

    },

    findAllLanguagesForThisUser: async function (req: Request, res: Response) {
        let userId = req.params.userId;
        console.log("userId: ", userId);

        if (!userId) {
            console.log("USER ID IS MISSING")
            return res.status(400);
        } else {
            try {
                const allWords = await userService.FindAllLanguagesForUser(userId);
                return res.send(allWords);
            } catch (err) {
                logger.error(err);
                return res.status(500).send(err);
            }
        }
    },

    answerCorrectly: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;
            let wordToLookFor = req.query.word;
            let language = req.query.language;

            if (user.id === undefined) {
                return res.status(422).send('no user')
            }
            if (!wordToLookFor) {
                throw new Error('no word provided');
            }
            if (!language) {
                throw new Error('no language provided');
            }

            let answeredCorrectlyResponse = await userService.answerWordCorrectly(req.user, wordToLookFor as string, language as string);

            return res.status(200).send(answeredCorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err);
        }
    },

    answerIncorrectly: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;
            let wordToLookFor = req.query.word as string;
            let language = req.query.language as string;

            if (user.id === undefined) {
                return res.status(422).send('no user');
            }
            if (!wordToLookFor) {
                throw new Error('no word provided');
            }
            if (!language) {
                throw new Error('no language provided');
            }

            let answeredIncorrectlyResponse = await userService.answerWordIncorrectly(req.user, wordToLookFor, language)

            return res.send(answeredIncorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            return new Error(err)
        }
    },

    findAllUnlearnedWordsForGivenLanguageForUser: async function (req: Request, res: Response) {

        try {
            const user = req.user as any;
            const language = req.query.language as string;

            let unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err);
        }
    },

    getWordsForReviewForLanguageForUser: async function (req: Request, res: Response) {
        try {
            const user = req.user as any;
            const language = req.query.language as string;

            let unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err);
        }
    }
};

export default userController;