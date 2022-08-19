import mongoose from 'mongoose';
import db from "../models";
import italianSeed from "../utils/italianSeed";

// This file empties the italian collection and inserts the italian words & translations below

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

        await db.Italian.remove({});
        let italian = await db.Italian.collection.insertMany(italianSeed);
        console.log("✔ " + italian.result.n + " records inserted for italian seed");

        process.exit(0);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


mongoose.connect(process.env.MONGODB_URI as string).then((res: any) => {
    console.log("connected successfully: ", res.connections[0]._connectionString);
    seedDb();
})
    .catch((err: any) => console.log("error:", err))





