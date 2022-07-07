const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/languages"
router.route("/")
  .post(userController.addLanguage);


router.route("/:userId")
  .get(userController.findAllLanguagesForThisUser);



router.route("/:username/languages/:language")
  .get(userController.getLanguageDataForUser)


module.exports = router;