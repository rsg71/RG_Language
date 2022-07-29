const router = require("express").Router();
import spanishController from "../../controllers/spanishController";

// Matches with "/api/spanish"
router.route("/")
  .get(spanishController.findAll);


router.route("/:word")
  .patch(spanishController.answerCorrectly);

router.route("/for-review")
  .get(spanishController.findAllForReview);

router.route("/words/unlearned")
  .get(spanishController.findAllUnlearnedWords)

export default router;
