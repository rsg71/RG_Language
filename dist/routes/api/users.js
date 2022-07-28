"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const userController_1 = __importDefault(require("../../controllers/userController"));
// Matches with "/api/users/languages"
router.route("/")
    .post(userController_1.default.addLanguage);
router.route("/:userId")
    .get(userController_1.default.findAllLanguagesForThisUser);
router.route("/:username/languages/:language")
    .get(userController_1.default.getLanguageDataForUser);
router.route("/words/unlearned")
    .get(userController_1.default.findAllUnlearnedWordsForGivenLanguageForUser);
router.route("/:language/for-review")
    .get(userController_1.default.getWordsForReviewForLanguageForUser);
router.route("/:language/quiz/answer-word")
    .patch(userController_1.default.answerCorrectly);
router.route("/:language/quiz/answer-word-incorrectly")
    .patch(userController_1.default.answerIncorrectly);
exports.default = router;
//# sourceMappingURL=users.js.map