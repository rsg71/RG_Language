const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



// Define middleware for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rgLanguage", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
