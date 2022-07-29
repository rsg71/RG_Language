"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = require("../models");
const frenchSeed = require("../utils/frenchSeed");
const spanishSeed = require("../utils/spanishSeed");
const germanSeed = require("../utils/germanSeed");
const italianSeed = require("../utils/italianSeed");
const portugueseSeed = require("../utils/portugueseSeed");
// This file empties the spanish collection and inserts the spanish words & translations below
require('dotenv').config();
console.log("mongodb is: ", process.env.MONGODB_URI);
let isDev = process.env.NODE_ENV === 'dev';
let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;
let whatIsEnvironment = process.env.NODE_ENV;
console.log("ENVIRONMENT: ", whatIsEnvironment);
//
mongoose_1.default.connect('mongodb://localhost/rgLanguage').then((res) => {
    console.log("connected successfully: ", res.connections[0]._connectionString);
    seedDb();
})
    .catch(err => console.log("error:", err));
const seedDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.Spanish.remove({});
        let spanish = yield db.Spanish.collection.insertMany(spanishSeed);
        console.log("✔ " + spanish.result.n + " records inserted for spanish seed");
        yield db.French.remove({});
        let french = yield db.French.collection.insertMany(frenchSeed);
        console.log("✔ " + french.result.n + " records inserted for french seed");
        yield db.German.remove({});
        let german = yield db.German.collection.insertMany(germanSeed);
        console.log("✔ " + german.result.n + " records inserted for german seed");
        yield db.Portuguese.remove({});
        let portuguese = yield db.Portuguese.collection.insertMany(portugueseSeed);
        console.log("✔ " + portuguese.result.n + " records inserted for portuguese seed");
        yield db.Italian.remove({});
        let italian = yield db.Italian.collection.insertMany(italianSeed);
        console.log("✔ " + italian.result.n + " records inserted for italian seed");
        process.exit(0);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});
//# sourceMappingURL=seedDB.js.map