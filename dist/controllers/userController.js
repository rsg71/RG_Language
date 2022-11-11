"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const user_1 = __importDefault(require("../services/user"));
const models_1 = __importDefault(require("../models"));
const userService = new user_1.default(models_1.default.UserCollection);
const userController = {
    addLanguage: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const userId = user.id;
            logger_1.default.debug(`attempting to add a language for user`);
            console.log("req.body: ", req.body);
            if (!req.body.language) {
                return res.status(400).send('Missing req.body.language');
            }
            const languageToFind = req.body.language.toLowerCase();
            try {
                const result = userService.validateAndCreateLanguageForUser(languageToFind, userId);
                logger_1.default.debug({ result });
                logger_1.default.info(`language '${languageToFind}' added for user`);
                res.status(200).send(result);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    getLanguageDataForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("here is the req.params: ", req.params);
            console.log("here is the req.body: ", req.body);
            try {
                if (!req.params.language) {
                    logger_1.default.error("Missing req.params.language");
                    return res.status(400);
                }
                if (!req.params.username) {
                    logger_1.default.error("Missing req.params.username");
                    return res.status(400);
                }
                const languageToFind = req.params.language.toLowerCase(); // ensuring it's lowercase (probably already is by this point)
                const userIdToFind = req.params.username;
                const languageFound = yield userService.FindLanguage(languageToFind, userIdToFind);
                console.log("languageFound is: ", languageFound);
                return res.status(200).send(languageFound);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    findAllLanguagesForThisUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                console.log("userId: ", userId);
                if (!userId) {
                    logger_1.default.error("USER ID IS MISSING");
                    return res.status(400);
                }
                const allWords = yield userService.FindAllLanguagesForUser(userId);
                return res.send(allWords);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    answerCorrectly: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const wordToLookFor = req.query.word;
                const language = req.query.language;
                const userId = user.id;
                if (userId === undefined) {
                    return res.status(422).send('no user');
                }
                if (!wordToLookFor) {
                    throw new Error('no word provided');
                }
                if (!language) {
                    throw new Error('no language provided');
                }
                const answeredCorrectlyResponse = yield userService.answerWordCorrectly(userId, wordToLookFor, language);
                return res.status(200).send(answeredCorrectlyResponse);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    answerIncorrectly: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const userId = user.id;
                if (userId === undefined) {
                    return res.status(400).send('no user');
                }
                if (!req.query.word) {
                    return res.status(400).send('no word provided');
                }
                if (!req.query.language) {
                    return res.status(400).send('no language provided');
                }
                const wordToLookFor = req.query.word;
                const language = req.query.language;
                const answeredIncorrectlyResponse = yield userService.answerWordIncorrectly(userId, wordToLookFor, language);
                return res.send(answeredIncorrectlyResponse);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    findAllUnlearnedWordsForGivenLanguageForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.query.language) {
                    return res.status(400).send('no language provided');
                }
                const user = req.user;
                const language = req.query.language;
                const unlearnedForUser = yield userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);
                return res.status(200).send(unlearnedForUser);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    },
    getWordsForReviewForLanguageForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.query.language) {
                    return res.status(400).send('no language provided');
                }
                const user = req.user;
                const language = req.query.language;
                const unlearnedForUser = yield userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);
                return res.status(200).send(unlearnedForUser);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err.message);
            }
        });
    }
};
exports.default = userController;
//# sourceMappingURL=userController.js.map