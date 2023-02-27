import mongoose from "mongoose";
import config from './config/index';
// import ExpressLoader from './loaders/Express'



import bodyParser from "body-parser";
import Express from "express";
import routes from "./routes";
import session from "express-session";
import cors from "cors";
// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
const passportConfig = require('./config/passportConfig');




const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}




// Connect to Mongoose --- //
mongoose.connect(config.chooseConnection || "", mongooseOptions)
    .then((res: any) => {
        console.log("connected successfully to: ", res.connections[0]._connectionString)
        console.log("mongodb is successfully connected ✔");


    })
    .catch((err: any) => console.log("err!: ", err));

// load Express instance
// const app = new ExpressLoader();




const app = Express();


// Define middleware for JSON parsing
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// Serve up static assets (usually on heroku)
if (config.NODE_ENV === "production") {
    app.use(Express.static("client/build"));
} else {
    console.log("===============================================")
    console.log("config.NODE_ENV:", config.NODE_ENV);
    console.log("config.MONGODB_URI: ", config.MONGODB_URI)
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



// api routes
app.use(routes);


app.listen(config.PORT, function () {
    console.log(`==> API server is now listening on port ${config.PORT}!`);
});


module.exports = app;

