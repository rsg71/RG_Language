import Express, { Request, Response } from "express";

import mongoose from "mongoose";
import routes from "./routes/index";
const app = Express();
const PORT = process.env.PORT || 3001;


require('dotenv').config();

// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";


import ensureAuthenticated from './auth';

import logger from './logger';



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





let isDev = process.env.NODE_ENV === 'dev';

let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;





let whatIsEnvironment = process.env.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//
// Connect to Mongoose --- //
mongoose.connect(chooseConnection || "",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
    .then((res: any) => {
        console.log("connected successfully to: ", res.connections[0]._connectionString)
        console.log("mongodb is successfully connected ✔");
    })
    .catch((err: any) => console.log("err!: ", err))
    ;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // <-- location of the react app we're connecting to
    credentials: true
}))

// Express sessions
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));



app.use(cookieParser("secretcode"))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);




app.get("/test", (req: Request, res) => {
    logger.trace(`${req.method} ${req.url}`);
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
})





app.get("/user", ensureAuthenticated, (req: Request, res: Response) => {
    logger.trace(`${req.method} ${req.url}`);

    if (req.user) {
    } else {
    }
    res.send(req.user) // <--- this is where the entire user is stored 
})


app.get("/users-languages", ensureAuthenticated, (req: Request, res: Response) => {
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


// api routes
app.use(routes);




app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
