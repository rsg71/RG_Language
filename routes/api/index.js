const router = require("express").Router();
const spanishRoutes = require("./spanish");
const frenchRoutes = require("./french");
const germanRoutes = require("./german");
const italianRoutes = require("./italian");
const portugueseRoutes = require("./portuguese");
const userRoutes = require("./users");

//Spanish Routes
router.use("/spanish", spanishRoutes);
//French Routes
router.use("/french", frenchRoutes);
// German Routes
router.use("/german", germanRoutes);
// Italian routes
router.use("/italian", italianRoutes);
// Portuguese routes
router.use("/portuguese", portugueseRoutes);

// User routes 
router.use("/users/languages", userRoutes)

module.exports = router;