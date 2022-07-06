const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/language"
router.route("/")
  .post(userController.addLanguage);



module.exports = router;