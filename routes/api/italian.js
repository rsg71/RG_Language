const router = require("express").Router();
const italianController = require("../../controllers/italianController");

// Matches with "/api/italian"
router.route("/")
  .get(italianController.findAll)
  .post(italianController.addWord);


router.route("/:word")
  .patch(italianController.answerCorrectly);

  router.route("/")

module.exports = router;