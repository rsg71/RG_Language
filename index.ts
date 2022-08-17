import Express, { Request, Response } from "express";

import mongoose from "mongoose";
import routes from "./routes/index";
const app = Express();
const PORT = process.env.PORT || 3001;


require('dotenv').config();

// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";


import User from "./models/user";
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
    logger.warn(`${req.method} ${req.url}`);
    const date = new Date().toLocaleDateString();
    return res.send(`/test working as of ${date}`);
})

app.get("/api/auth/page-load-login", (req: Request, res: Response) => {
    logger.warn(`${req.method} ${req.url}`);
    logger.debug("user is...");
    logger.debug({user: req.user});

    if (!req.user) {
        return res.status(404).send("no user found")
    } else {
        logger.trace("user found upon page load login");
        const user = req.user as any;
        logger.debug({user});
        let { username, id: _id } = user;
        let userData = { username, _id }
        return res.send(userData);
    }

})



app.post("/api/auth/login", (req: Request, res, next) => {
    logger.warn(`${req.method} ${req.url}`);


    passport.authenticate("local", {}, (err: any, user: any, info: any) => {
        if (err) {
            logger.error(err);
            // throw err
            res.send('error with this user')
        } else if (!user) {

            res.status(400).send("No User Exists dude")
        } else {
            logger.debug({ user });
            req.logIn(user, (err) => {
                if (err) throw err;

                let { username, _id } = user;
                let userData = { username, _id }
                res.send(userData);
                // console.log(req.user);
            });
        }
    })(req, res, next)
})


app.post("/api/auth/signup", (req: Request, res: Response) => {
    logger.warn(`${req.method} ${req.url}`);

    console.log("new username is: ", req.body.username)

    User.findOne({ username: req.body.username }, async (err: any, doc: any) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (doc) {
            console.log("user already exists");
            return res.status(422).send("User Already Exists");
        }
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});



app.get("/api/auth/logout", (req: Request, res: Response, next) => {
    logger.warn(`${req.method} ${req.url}`);

    req.logout(function (err) {
        if (err) {
            console.log("error upon logout attempt is: ", err);
            return next(err);
        }
    });

    logger.trace("user has been logged out ✔");
    return res.status(200).send("User successfully logged out");


})



app.get("/user", ensureAuthenticated, (req: Request, res: Response) => {
    logger.warn(`${req.method} ${req.url}`);

    logger.info({user: req.user});
    if (req.user) {
        logger.debug("there is a user!")
    } else {
        logger.debug("no user found...")
    }
    res.send(req.user) // <--- this is where the entire user is stored 
})


app.get("/users-languages", ensureAuthenticated, (req: Request, res: Response) => {
    logger.warn(`${req.method} ${req.url}`);

    if (req.user) {
        logger.debug("user exists on GET /users-languages");
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
