const router = require("express").Router();
const spanishRoutes = require("./spanish");
const frenchRoutes = require("./french");
const germanRoutes = require("./german");

//Spanish Routes
router.use("/spanish", spanishRoutes);
//French Routes
router.use("/french", frenchRoutes);
// German Routes
router.use("/german", germanRoutes);

module.exports = router;