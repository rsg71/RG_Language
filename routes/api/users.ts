const router = require("express").Router();
import userController from "../../controllers/userController";

// Matches with "/api/users/languages"
router.route("/")
  .post(userController.addLanguage);


router.route("/:userId")
  .get(userController.findAllLanguagesForThisUser);



router.route("/:username/languages/:language")
  .get(userController.getLanguageDataForUser)


router.route("/words/unlearned")
  .get(userController.findAllUnlearnedWordsForGivenLanguageForUser)



router.route("/:language/for-review")
  .get(userController.getWordsForReviewForLanguageForUser)


router.route("/:language/quiz/answer-word")
  .patch(userController.answerCorrectly)


router.route("/:language/quiz/answer-word-incorrectly")
  .patch(userController.answerIncorrectly)

export default router;