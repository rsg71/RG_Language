const router = require("express").Router();
const spanishRoutes = require("./spanish");

//Spanish Routes
router.use("/spanish", spanishRoutes);

module.exports = router;