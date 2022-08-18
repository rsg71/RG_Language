"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./models/user"));
const auth_1 = __importDefault(require("./auth"));
// trivial change
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
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
});
app.get("/api/auth/page-load-login", (req, res) => {
    if (!req.user) {
        return res.status(404).send("no user found");
    }
    else {
        const user = req.user;
        let { username, id: _id } = user;
        let userData = { username, _id };
        return res.send(userData);
    }
});
app.post("/api/auth/login", (req, res, next) => {
    passport_1.default.authenticate("local", {}, (err, user, info) => {
        if (err) {
            // throw err
            res.send('error with this user');
        }
        else if (!user) {
            res.status(400).send("No User Exists dude");
        }
        else {
            req.logIn(user, (err) => {
                if (err)
                    throw err;
                let { username, _id } = user;
                let userData = { username, _id };
                res.send(userData);
                // console.log(req.user);
            });
        }
    })(req, res, next);
});
app.post("/api/auth/signup", (req, res) => {
    console.log("new username is: ", req.body.username);
    user_1.default.findOne({ username: req.body.username }, (err, doc) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log(err);
            throw err;
        }
        if (doc) {
            console.log("user already exists");
            return res.status(422).send("User Already Exists");
        }
        if (!doc) {
            const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
            const newUser = new user_1.default({
                username: req.body.username,
                password: hashedPassword,
            });
            yield newUser.save();
            res.send("User Created");
        }
    }));
});
app.get("/api/auth/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            console.log("error upon logout attempt is: ", err);
            return next(err);
        }
    });
    return res.status(200).send("User successfully logged out");
});
app.get("/user", auth_1.default, (req, res) => {
    if (req.user) {
    }
    else {
    }
    res.send(req.user); // <--- this is where the entire user is stored 
});
app.get("/users-languages", auth_1.default, (req, res) => {
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