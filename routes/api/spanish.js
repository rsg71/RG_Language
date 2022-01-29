const router = require("express").Router();
const spanishController = require("../../controllers/spanishController");

// Matches with "/api/spanish"
router.route("/")
  .get(spanishController.findAll);


router.route("/:word")
  .patch(spanishController.answerCorrectly);

module.exports = router;