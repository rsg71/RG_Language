const router = require("express").Router();
import germanController from "../../controllers/germanController";

// Matches with "/api/german"
router.route("/")
  .get(germanController.findAll);


router.route("/:word")
  .patch(germanController.answerCorrectly);


router.route("/words/unlearned")
  .get(germanController.findAllUnlearnedWords)

export default router;
