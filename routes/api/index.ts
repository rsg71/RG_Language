const router = require("express").Router();
import spanishRoutes from "./spanish";
import frenchRoutes from "./french";
import germanRoutes from "./german";
import italianRoutes from "./italian";
import portugueseRoutes from "./portuguese";
import userRoutes from "./users";
import authRoutes from "./auth";
import ensureAuthenticated from "./auth";


// ALL below routes start with /api

//Spanish Routes
router.use("/spanish", ensureAuthenticated, spanishRoutes);
//French Routes
router.use("/french", ensureAuthenticated, frenchRoutes);
// German Routes
router.use("/german", ensureAuthenticated, germanRoutes);
// Italian routes
router.use("/italian", ensureAuthenticated, italianRoutes);
// Portuguese routes
router.use("/portuguese", ensureAuthenticated, portugueseRoutes);
// Auth routes
router.use("/auth", authRoutes);

// User routes 
router.use("/users/languages", ensureAuthenticated, userRoutes);

export default router;