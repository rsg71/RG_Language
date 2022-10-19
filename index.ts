import Express from "express";

import mongoose from "mongoose";
import routes from "./routes/index";
const app = Express();
const PORT = process.env.PORT || 3001;
import config from './config/index';


require('dotenv').config();

// Authentication
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";



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



// api routes
app.use(routes);



app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
