import { Request, Response } from "express";
import { join } from "path";

const router = require("express").Router();
import apiRoutes from "./api";

// API routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req: Request, res: Response) {
    if (process.env.NODE_ENV === 'production') {
        // in production, we're already in app/dist/routes/index.js. We need to go outside of app/dist/routes/index.js all the way back into app/ and then from there into client/
        // this will be in /app/dist/client/build/index.html
        res.sendFile(join(__dirname, "../../client/build/index.html"));
    } else {
        res.sendFile(join(__dirname, "../client/build/index.html"));
    }
});


export default router;
