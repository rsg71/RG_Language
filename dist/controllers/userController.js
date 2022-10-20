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
const userService = new user_1.default();
const userController = {
    addLanguage: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const userId = user.id;
            logger_1.default.debug(`attempting to add a language for user`);
            console.log("req.body: ", req.body);
            const languageToFind = req.body.language.toLowerCase();
            try {
                let result = userService.validateAndCreateLanguageForUser(languageToFind, userId);
                logger_1.default.debug({ result });
                logger_1.default.info(`language '${languageToFind}' added for user`);
                res.status(200).send(result);
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    },
    getLanguageDataForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here is the req.params: ", req.params);
                console.log("here is the req.body: ", req.body);
                const languageToFind = req.params.language.toLowerCase(); // ensuring it's lowercase (probably already is by this point)
                const userIdToFind = req.params.username;
                let languageFound = yield userService.FindLanguage(languageToFind, userIdToFind);
                console.log("languageFound is: ", languageFound);
                return res.status(200).send(languageFound);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    },
    findAllLanguagesForThisUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.userId;
            console.log("userId: ", userId);
            if (!userId) {
                console.log("USER ID IS MISSING");
                return res.status(400);
            }
            else {
                try {
                    const allWords = yield userService.FindAllLanguagesForUser(userId);
                    return res.send(allWords);
                }
                catch (err) {
                    logger_1.default.error(err);
                    return res.status(500).send(err);
                }
            }
        });
    },
    answerCorrectly: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                let wordToLookFor = req.query.word;
                let language = req.query.language;
                if (user.id === undefined) {
                    return res.status(422).send('no user');
                }
                if (!wordToLookFor) {
                    throw new Error('no word provided');
                }
                if (!language) {
                    throw new Error('no language provided');
                }
                let answeredCorrectlyResponse = yield userService.answerWordCorrectly(req.user, wordToLookFor, language);
                return res.status(200).send(answeredCorrectlyResponse);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err);
            }
        });
    },
    answerIncorrectly: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                let wordToLookFor = req.query.word;
                let language = req.query.language;
                if (user.id === undefined) {
                    return res.status(422).send('no user');
                }
                if (!wordToLookFor) {
                    throw new Error('no word provided');
                }
                if (!language) {
                    throw new Error('no language provided');
                }
                let answeredIncorrectlyResponse = yield userService.answerWordIncorrectly(req.user, wordToLookFor, language);
                return res.send(answeredIncorrectlyResponse);
            }
            catch (err) {
                logger_1.default.error(err);
                return new Error(err);
            }
        });
    },
    findAllUnlearnedWordsForGivenLanguageForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const language = req.query.language;
                let unlearnedForUser = yield userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);
                return res.status(200).send(unlearnedForUser);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err);
            }
        });
    },
    getWordsForReviewForLanguageForUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const language = req.query.language;
                let unlearnedForUser = yield userService.findAllUnlearnedWordsForGivenLanguageForUser(user, language);
                return res.status(200).send(unlearnedForUser);
            }
            catch (err) {
                logger_1.default.error(err);
                res.status(500).send(err);
            }
        });
    }
};
exports.default = userController;
//# sourceMappingURL=userController.js.map