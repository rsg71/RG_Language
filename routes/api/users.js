const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/languages"
router.route("/")
  .post(userController.addLanguage);


router.route("/")
  .get(userController.findAllLanguagesForThisUser);



module.exports = router;