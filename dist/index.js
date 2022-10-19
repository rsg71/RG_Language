"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
// Authentication
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./auth"));
const logger_1 = __importDefault(require("./logger"));
// Define middleware for JSON parsing
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
}
else {
    console.log("===============================================");
    console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
    console.log("process.env.MONGODB_URI: ", process.env.MONGODB_URI);
}
let isDev = process.env.NODE_ENV === 'dev';
let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;
let whatIsEnvironment = process.env.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//
// Connect to Mongoose --- //
mongoose_1.default.connect(chooseConnection || "", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then((res) => {
    console.log("connected successfully to: ", res.connections[0]._connectionString);
    console.log("mongodb is successfully connected ✔");
})
    .catch((err) => console.log("err!: ", err));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
// Express sessions
app.use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use((0, cookie_parser_1.default)("secretcode"));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
require('./passportConfig')(passport_1.default);
app.get("/test", (req, res) => {
    logger_1.default.trace(`${req.method} ${req.url}`);
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
});
app.get("/user", auth_1.default, (req, res) => {
    logger_1.default.trace(`${req.method} ${req.url}`);
    if (req.user) {
    }
    else {
    }
    res.send(req.user); // <--- this is where the entire user is stored 
});
app.get("/users-languages", auth_1.default, (req, res) => {
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
// api routes
app.use(index_1.default);
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map