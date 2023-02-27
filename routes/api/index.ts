const router = require("express").Router();
import userRoutes from "./users";
import authRoutes from "./auth";
import ensureAuthenticated from "./auth";


// ALL below routes start with /api

// Auth routes
router.use("/auth", authRoutes);

// User routes 
router.use("/users/languages", ensureAuthenticated, userRoutes);

export default router;