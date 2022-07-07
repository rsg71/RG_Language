const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Authentication
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");


const User = require("./models/user");
const { ensureAuthenticated } = require('./auth');




// Define middleware for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




// Connect to Mongoose --- //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rgLanguage",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
  .then(res => {
    console.log("connected successfully to: ", res.connections[0]._connectionString)
    console.log("mongodb is successfully connected ✔");
  })
  .catch(err => console.log("err!: ", err))
  ;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//   origin: "http://localhost:3000", // <-- location of the react app we're connecting to
//   credentials: true
// }))

// Express sessions
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnintialized: true
}));

app.use(cookieParser("secretcode"))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);




app.post("/api/auth/login", (req, res, next) => {
  console.log("we're here")

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("ERROR!, ", err);
      // throw err
      res.send('error with this user')
    } else if (!user) {

      res.status(400).send("No User Exists dude")
    } else {
      console.log("user is: ", user);
      req.logIn(user, (err) => {
        if (err) throw err;

        let { username, _id } = user;
        let userData = { username, _id }
        res.send(userData);
        console.log(req.user);
      });
    }
  })(req, res, next)
})


app.post("/api/auth/signup", (req, res) => {

  console.log("new username is: ", req.body.username)

  User.findOne({ username: req.body.username }, async (err, doc) => {
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



app.get("/api/auth/logout", (req, res) => {
  console.log("GET /api/auth/logout");

  req.logout(function (err) {
    if (err) {
      console.log("error upon logout attempt is: ", err);
      return next(err);
    }
  });

  console.log("user has been logged out ✔");
  return res.status(200).send("User successfully logged out");


})

const saySomething = (req, res, next) => {
  console.log("HI!");
  next();
}

app.get("/user", ensureAuthenticated, (req, res) => {
  console.log("req.user: ", req.user);
  console.log("GET /user")
  console.log("=========================")
  if (req.user) {
    console.log("there is a user!")
  } else {
    console.log("no user found...")
  }
  console.log("=========================")
  res.send(req.user) // <--- this is where the entire user is stored 
})


app.get("/users-languages", ensureAuthenticated, (req, res) => {
  if (req.user) {
    console.log("user exists on GET /users-languages")
    let id = req.user.id;
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


//api routes
app.use(routes);




app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
