const router = require("express").Router();
const spanishController = require("../../controllers/spanishController");

// Matches with "/api/spanish"
router.route("/")
  .get(spanishController.findAll);



module.exports = router;
