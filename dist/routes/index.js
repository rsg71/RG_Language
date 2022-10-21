"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../auth"));
const path_1 = require("path");
const config_1 = __importDefault(require("../config"));
const router = require("express").Router();
const api_1 = __importDefault(require("./api"));
const logger_1 = __importDefault(require("../logger"));
router.get("/test", (req, res) => {
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
});
router.get("/user", auth_1.default, (req, res) => {
    logger_1.default.trace(`${req.method} ${req.url}`);
    if (req.user) {
    }
    else {
    }
    res.send(req.user); // <--- this is where the entire user is stored 
});
router.get("/users-languages", auth_1.default, (req, res) => {
    logger_1.default.trace(`${req.method} ${req.url}`);
    if (req.user) {
        const user = req.user;
        let id = user.id;
        let userData = {
            languages: [
                {
                    name: "Spanish",
                    flag: "spain",
                    bg: "warning",
                    totalWords: "25,000",
                    isActive: true,
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
        };
        return res.send(userData);
    }
    else
        throw new Error('no user');
});
// API routes
router.use("/api", api_1.default);
// If no API routes are hit, send the React app
router.use(function (req, res) {
    if (config_1.default.NODE_ENV === 'production') {
        // in production, we're already in app/dist/routes/index.js. We need to go outside of app/dist/routes/index.js all the way back into app/ and then from there into client/
        // this will be in /app/dist/client/build/index.html
        res.sendFile((0, path_1.join)(__dirname, "../../client/build/index.html"));
    }
    else {
        res.sendFile((0, path_1.join)(__dirname, "../client/build/index.html"));
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map