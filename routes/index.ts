import ensureAuthenticated from "../auth";
import { Request, Response } from "express";
import { join } from "path";
import config from '../config';
const router = require("express").Router();
import apiRoutes from "./api";
import logger from "../logger";


router.get("/test", (req: Request, res: Response) => {
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
})

router.get("/user", ensureAuthenticated, (req: Request, res: Response) => {
    logger.trace(`${req.method} ${req.url}`);

    if (req.user) {
    } else {
    }
    res.send(req.user) // <--- this is where the entire user is stored 
})

router.get("/users-languages", ensureAuthenticated, (req: Request, res: Response) => {
    logger.trace(`${req.method} ${req.url}`);

    if (req.user) {
        const user = req.user as any;
        let id = user.id;
        let userData = {
            languages: [
                {
                    name: "Spanish",
                    flag: "spain",
                    bg: "warning",
                    totalWords: "25,000",
                    isActive: true, // what is this
                    wordsLearned: [
                        {
                            id: 1,
                            word: "hola",
                            translation: "hello",
                            lastDateAnsweredCorrectly: new Date()
                        },
                        {
                            id: 2,
                            word: "mono",
                            translation: "monkey",
                            lastDateAnsweredCorrectly: null
                        }
                    ]
                }
            ]
        }

        return res.send(userData)
    } else throw new Error('no user')
})


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
