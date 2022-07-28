const router = require("express").Router();
import frenchController from "../../controllers/frenchController";

// Matches with "/api/french"
router.route("/")
  .get(frenchController.findAll);


router.route("/:word")
  .patch(frenchController.answerCorrectly);


router.route("/words/unlearned")
  .get(frenchController.findAllUnlearnedWords)

export default router;
