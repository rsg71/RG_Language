import mongoose from "mongoose";
import config from './config/index';
// import ExpressLoader from './loaders/Express'
import logger from './logger';
import bodyParser from "body-parser";
import Express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import session from "express-session";
import cors from "cors";
// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
import passportConfig from './config/passportConfig';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/swagger";
import { dbConnectionString } from "./config/database";
import { mongooseOptions } from "./config/database";






const isTesting = process.env.NODE_ENV === 'test';
if (!isTesting) {
    // Connect to Mongoose --- //
    mongoose.connect(dbConnectionString, mongooseOptions)
        .then((res: any) => {
            console.log("connected successfully to: ", res.connections[0]._connectionString)
            console.log("mongodb is successfully connected!");


        })
        .catch((err: any) => console.log("mongoDB connection error!: ", err));
}

// load Express instance
// const app = new ExpressLoader();




const app = Express();


// Define middleware for JSON parsing
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    logger.trace(`${req.method} ${req.url}`);
    logger.trace(`${JSON.stringify(req.body)}`);
    next()
})

// Serve up static assets (usually on heroku)
if (config.NODE_ENV === "production") {
    app.use(Express.static("client/build"));
} else {
    console.log("config.NODE_ENV:", config.NODE_ENV);
    // console.log("config.MONGODB_URI: ", config.MONGODB_URI);
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: config.FRONT_END_ORIGIN_URL, // <-- location of the react app we're connecting to
    credentials: true
}))


// Express sessions
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));


app.use(cookieParser(config.COOKIE_PARSER_SECRET_CODE))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);




// Swagger API documentation
const specs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



// api routes
app.use(routes);


if (!isTesting) {
    app.listen(config.PORT, function () {
        console.log('========================================================');
        console.log(`==> API server is now listening on port ${config.PORT}`);
        console.log(`==> Swagger is now listening on port ${config.PORT}`);
        console.log('========================================================');
    });
}

export default app;