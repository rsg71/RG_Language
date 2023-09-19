import { Request, Response } from 'express';
import logger from '../logger';
import UserService from '../services/user';
import db from '../models';
import { validateRequest, handleValidationResult } from '../utils/validation/validate-requests';
import validationSchemas from '../schemas/validation-schemas';

const userService = new UserService(db.UserCollection);


const userController = {

    addLanguage: async function (req: Request, res: Response) {
        logger.trace('Controller called to addLanguage');

        const user = req.user as any;
        const userId: string = user.id.toString();
        const language: string = req.body.language;

        const inputs = {
            language: language.toLowerCase(),
            userId: user.id.toString()
        }

        const data = {
            schema: validationSchemas.addLanguageSchema,
            inputs
        }

        const isValid = await validateRequest(data);

        if (!isValid) {
            return handleValidationResult(res);
        }

        const languageToFind: string = language.toLowerCase();

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
        logger.trace('Controller called to getLanguageDataForUser');
        try {
            const inputs = {
                language: req.params.language,
                username: req.params.username
            }

            const data = {
                schema: validationSchemas.getLanguageDataForUserSchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
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
        logger.trace('Controller called to findAllLanguagesForThisUser');
        try {
            const userId: string = req.params.userId;

            const inputs = {
                userId: userId,
            }

            const data = {
                schema: validationSchemas.findAllLanguagesForThisUserSchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
            }

            const allWords = await userService.FindAllLanguagesForUser(userId);
            return res.send(allWords);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    answerCorrectly: async function (req: Request, res: Response) {
        logger.trace('Controller called to answerCorrectly');
        try {
            const user = req.user as any;
            const wordToLookFor: string = req.query.word as string;
            const language: string = req.query.language as string;
            const userId: string = user.id.toString();


            const inputs = {
                word: req.query.word,
                language: language.toLowerCase(),
                userId: userId
            }

            const data = {
                schema: validationSchemas.answerCorrectlySchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
            }


            const answeredCorrectlyResponse = await userService.answerWordCorrectly(userId, wordToLookFor, language);

            return res.status(200).send(answeredCorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    answerIncorrectly: async function (req: Request, res: Response) {
        logger.trace('Controller called to answerIncorrectly');
        try {
            const user = req.user as any;
            const userId: string = user.id.toString();
            const language: string = req.query.language as string;
            const wordToLookFor = req.query.word as string;

            const inputs = {
                word: wordToLookFor,
                language: language.toLowerCase(),
                userId: userId
            }

            const data = {
                schema: validationSchemas.answerIncorrectlySchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
            }


            const answeredIncorrectlyResponse = await userService.answerWordIncorrectly(userId, wordToLookFor, language)

            return res.send(answeredIncorrectlyResponse);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message)
        }
    },

    findAllUnlearnedWordsForGivenLanguageForUser: async function (req: Request, res: Response) {
        logger.trace('Controller called to findAllUnlearnedWordsForGivenLanguageForUser');
        try {
            const user = req.user as any;
            const userId: string = user.id.toString();
            const language = req.query.language as string;

            const inputs = {
                language: language.toLowerCase(),
                userId: userId
            }

            const data = {
                schema: validationSchemas.findAllUnlearnedWordsForGivenLanguageForUserSchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
            }


            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(userId, language.toLowerCase());

            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    },

    getWordsForReviewForLanguageForUser: async function (req: Request, res: Response) {
        logger.trace('Controller called to getWordsForReviewForLanguageForUser');
        try {
            const user = req.user as any;
            const userId: string = user.id.toString();
            const language: string = req.params.language;

            console.log('typeof userId: ', typeof userId);

            const inputs = {
                language: language.toLowerCase(),
                userId: userId
            }

            const data = {
                schema: validationSchemas.getWordsForReviewForLanguageForUserSchema,
                inputs
            }

            const isValid = await validateRequest(data);
            if (!isValid) {
                return handleValidationResult(res);
            }

            const unlearnedForUser = await userService.findAllUnlearnedWordsForGivenLanguageForUser(userId, language);


            return res.status(200).send(unlearnedForUser);

        } catch (err: any) {
            logger.error(err);
            res.status(500).send(err.message);
        }
    }
};

export default userController;