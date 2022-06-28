const mongoose = require("mongoose");
const db = require("../models");
const frenchSeed = require("../utils/frenchSeed");
const spanishSeed = require("../utils/spanishSeed");
const germanSeed = require("../utils/germanSeed");
const italianSeed = require("../utils/italianSeed");
const portugueseSeed = require("../utils/portugueseSeed");

// This file empties the spanish collection and inserts the spanish words & translations below

require('dotenv').config();

console.log("mongodb is: ", process.env.MONGODB_URI)

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/rgLanguage"
).then(res => {
    console.log("connected successfully: ", res.connections[0]._connectionString)
})
    .catch(err => console.log("error:", err))



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
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.German
    .remove({})
    .then(() => db.German.collection.insertMany(germanSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for german seed");
        process.exit(1);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Portuguese
    .remove({})
    .then(() => db.Portuguese.collection.insertMany(portugueseSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for portuguese seed");
        process.exit(1);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Italian
    .remove({})
    .then(() => db.Italian.collection.insertMany(italianSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for italian seed");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(0);
    });
