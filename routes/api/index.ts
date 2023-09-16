const router = require("express").Router();
import { Request, Response } from "express";
import userRoutes from "./users";
import authRoutes from "./auth";
import ensureAuthenticated from "../isAuthenticated";


// ALL below routes start with /api

// Auth routes
router.use("/auth", authRoutes);

router.get("/status", (req: Request, res: Response) => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    res.status(200).send(`Status: API is working as of ${date} at ${time}`);
})

// User routes 
router.use("/users/languages", ensureAuthenticated, userRoutes);

export default router;