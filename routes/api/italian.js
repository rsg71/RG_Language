const router = require("express").Router();
const italianController = require("../../controllers/italianController");

// Matches with "/api/german"
router.route("/")
  .get(italianController.findAll);


router.route("/:word")
  .patch(italianController.answerCorrectly);

module.exports = router;