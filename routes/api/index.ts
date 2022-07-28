const router = require("express").Router();
import spanishRoutes from "./spanish";
import frenchRoutes from "./french";
import germanRoutes from "./german";
import italianRoutes from "./italian";
import portugueseRoutes from "./portuguese";
import userRoutes from "./users";


// ALL below routes start with /api

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
router.use("/users/languages", userRoutes);

export default router;