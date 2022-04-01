const router = require("express").Router();
const germanController = require("../../controllers/germanController");

// Matches with "/api/german"
router.route("/")
  .get(germanController.findAll);


router.route("/:word")
  .patch(germanController.answerCorrectly);

module.exports = router;