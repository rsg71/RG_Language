import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import seedData from './data/seedData';

enum modellEnum {
    Users = 'users',
    WordGroups = 'wordgroups'
}

const Seeder = {

    /**
     * insert users
     */
    async insertUsers() {
        // await mongoose.connection.db.createCollection('users');  // how does it know to create a collection...does it look at my models?
        await mongoose.connection.collection(modellEnum.Users).insertMany(seedData.users)
    },

    async insertWordGroups() {
        await mongoose.connection.collection(modellEnum.WordGroups).insertMany(seedData.wordGroups);
    },

    async insert(model: modellEnum, data: any) {
        try {
            await mongoose.connection.collection(model).insertMany(data)
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }

}



// Define a new instance of "MongoMemoryServer" to automatically start server
let mongoServer: any = null;


const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

/**
 * Provide connection to a new in-memory database server.
 */
const connect = async () => {
    // Prevent MongooseError: Can't call `openUri()` on an active connection with different connection strings
    await mongoose.disconnect();

    // Spin up an actual/real MongoDB server programmatically from node, for testing
    mongoServer = await MongoMemoryServer.create();

    const mongoUri = await mongoServer.getUri();
    mongoose.connect(mongoUri, opts, err => {
        if (err) {
            console.error(err);
        }
    });
};

/**
 * Remove and close the database and server.
 */
const close = async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
};

/**
 * Remove all data from collections.
 */
const clear = async () => {
    console.log('clearing db...')
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }


    // collections are:
    // [ 'wordgroups', 'wordseeds', 'spanishes', 'users' ]

    // then insert data. Let's insert users
    await Seeder.insertUsers();
    await Seeder.insertWordGroups();
};


export default {
    connect,
    close,
    clear
}