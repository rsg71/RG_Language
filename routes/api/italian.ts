const router = require("express").Router();
import italianController from "../../controllers/italianController";

// Matches with "/api/italian"
router.route("/")
  .get(italianController.findAll)
  .post(italianController.addWord);


router.route("/:word")
  .patch(italianController.answerCorrectly);

router.route("/for-review")
  .get(italianController.findAllForReview);


router.route("/words/unlearned")
  .get(italianController.findAllUnlearnedWords)


export default router;
