import mongoose from "mongoose";
const db = require("../models");
const frenchSeed = require("../utils/frenchSeed");
const spanishSeed = require("../utils/spanishSeed");
const germanSeed = require("../utils/germanSeed");
const italianSeed = require("../utils/italianSeed");
const portugueseSeed = require("../utils/portugueseSeed");
import config from '../config';

// This file empties the spanish collection and inserts the spanish words & translations below

require('dotenv').config();

console.log("mongodb is: ", config.MONGODB_URI);



let whatIsEnvironment = config.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//




mongoose.connect('mongodb://localhost/rgLanguage').then((res: any) => {
    console.log("connected successfully: ", res.connections[0]._connectionString);


    seedDb()

})
    .catch(err => console.log("error:", err))



const seedDb = async () => {
    try {

        await db.Spanish.remove({})
        let spanish = await db.Spanish.collection.insertMany(spanishSeed);
        console.log("✔ " + spanish.result.n + " records inserted for spanish seed");

        await db.French.remove({})
        let french = await db.French.collection.insertMany(frenchSeed);
        console.log("✔ " + french.result.n + " records inserted for french seed");

        await db.German.remove({})
        let german = await db.German.collection.insertMany(germanSeed);
        console.log("✔ " + german.result.n + " records inserted for german seed");

        await db.Portuguese.remove({})
        let portuguese = await db.Portuguese.collection.insertMany(portugueseSeed);
        console.log("✔ " + portuguese.result.n + " records inserted for portuguese seed");

        await db.Italian.remove({})
        let italian = await db.Italian.collection.insertMany(italianSeed);
        console.log("✔ " + italian.result.n + " records inserted for italian seed");

        process.exit(0);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


