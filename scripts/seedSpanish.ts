import mongoose from 'mongoose';
import db from "../models";
import spanishSeed from "../utils/spanishSeed";

// This file empties the spanish collection and inserts the spanish words & translations below

require('dotenv').config();

console.log("mongodb is: ", process.env.MONGODB_URI);



let isDev = process.env.NODE_ENV === 'dev';

let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;

let whatIsEnvironment = process.env.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//

const seedDb = async () => {
    try {

        console.log("=====================");
        console.log("db is: ", db);

        await db.Spanish.remove({});
        let spanish = await db.Spanish.collection.insertMany(spanishSeed);
        console.log("✔ " + spanish.result.n + " records inserted for spanish seed");

        process.exit(0);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


mongoose.connect('mongodb://localhost/rgLanguage').then((res: any) => {
    console.log("connected successfully: ", res.connections[0]._connectionString);
    seedDb();
})
    .catch((err: any) => console.log("error:", err))





