import mongoose from 'mongoose';
import db from "../models";
import spanishSeed from "../utils/spanishSeed";
import config from '../config';

// This file empties the spanish collection and inserts the spanish words & translations below


console.log("mongodb is: ", config.MONGODB_URI);



let isDev = config.NODE_ENV === 'dev';

let chooseConnection = isDev ? config.DEV_MONGO : config.MONGODB_URI;

let whatIsEnvironment = config.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//

const seedDb = async () => {
    try {

        console.log("=====================");
        console.log("db is: ", db);

        await db.SpanishWords.remove({});
        // although it seems strange that this is db.CollectionName.collection, it is correct
        let spanish = await db.SpanishWords.collection.insertMany(spanishSeed);
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





