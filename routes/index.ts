const router = require("express").Router();
import apiRoutes from "./api";

// API routes
router.use("/api", apiRoutes);




export default router;
