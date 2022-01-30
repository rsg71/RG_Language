const router = require("express").Router();
const spanishRoutes = require("./spanish");
const frenchRoutes = require("./french")

//Spanish Routes
router.use("/spanish", spanishRoutes);
//French Routes
router.use("/french", frenchRoutes);

module.exports = router;