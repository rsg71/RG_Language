const router = require("express").Router();
const frenchController = require("../../controllers/frenchController");

// Matches with "/api/spanish"
router.route("/")
  .get(frenchController.findAll);


router.route("/:word")
  .patch(frenchController.answerCorrectly);


router.route("/words/unlearned")
  .get(frenchController.findAllUnlearnedWords)

module.exports = router;