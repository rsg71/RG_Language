import bodyParser from "body-parser";
import Express from "express";
require('dotenv').config();
import routes from "../routes";
import session from "express-session";
import cors from "cors";
// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
const passportConfig = require('../config/passportConfig');

const PORT = process.env.PORT;
const FRONT_END_ORIGIN_URL = process.env.FRONT_END_ORIGIN_URL;
const COOKIE_PARSER_SECRET_CODE = process.env.COOKIE_PARSER_SECRET_CODE;



class ExpressLoader {
    constructor() {
        const app = Express();


        // Define middleware for JSON parsing
        app.use(Express.urlencoded({ extended: true }));
        app.use(Express.json());

        // Serve up static assets (usually on heroku)
        if (process.env.NODE_ENV === "production") {
            app.use(Express.static("client/build"));
        } else {
            console.log("===============================================")
            console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
            console.log("process.env.MONGODB_URI: ", process.env.MONGODB_URI)
        }


        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors({
            origin: FRONT_END_ORIGIN_URL, // <-- location of the react app we're connecting to
            credentials: true
        }))

        // Express sessions
        app.use(session({
            secret: "secretcode",
            resave: true,
            saveUninitialized: true
        }));


        app.use(cookieParser(COOKIE_PARSER_SECRET_CODE))

        // Passport middleware
        app.use(passport.initialize());
        app.use(passport.session());
        passportConfig(passport);


        // api routes
        app.use(routes);

        app.listen(PORT, function () {
            console.log(`==> API server is now listening on port ${PORT}!`);
        });
    }
}

export default ExpressLoader;