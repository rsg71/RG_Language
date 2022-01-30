const mongoose = require("mongoose");
const db = require("../models");
const frenchSeed = require("../utils/frenchSeed");
const spanishSeed = require("../utils/spanishSeed");

// This file empties the spanish collection and inserts the spanish words & translations below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rgLanguage"
);



db.Spanish
    .remove({})
    .then(() => db.Spanish.collection.insertMany(spanishSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for spanish seed");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.French
    .remove({})
    .then(() => db.French.collection.insertMany(frenchSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for french seed");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });