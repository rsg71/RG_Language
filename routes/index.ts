import { join } from "path";
const router = require("express").Router();
import { Request, Response } from 'express';
import apiRoutes from "./api";

// API routes
router.use("/api", apiRoutes);


// If no API routes are hit, send the React app
router.use(function (req: Request, res: Response) {
    res.sendFile(join(__dirname, "../client/build/index.html"));
});

export default router;
