const router = require("express").Router();
import portugueseController from "../../controllers/portugueseController";

// Matches with "/api/portuguese"
router.route("/")
  .get(portugueseController.findAll);


router.route("/:word")
  .patch(portugueseController.answerCorrectly);

router.route("/words/unlearned")
  .get(portugueseController.findAllUnlearnedWords)

export default router;
