const mongoose = require("mongoose");
const db = require("../models");


// This file empties the spanish collection and inserts the spanish words & translations below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rgLanguage"
);


const spanishSeed = [
    {
        word: "manzana",
        translation: "apple"
    },
    {
        word: "camisa",
        translation: "shirt"
    },
    {
        word: "brazo",
        translation: "arm"
    },
    {
        word: "amarillo",
        translation: "yellow"
    },
    {
        word: "mesa",
        translation: "table"
    },
    {
        word: "vaca",
        translation: "cow"
    },
    {
        word: "plato",
        translation: "plate"
    }
];

db.Spanish
    .remove({})
    .then(() => db.Spanish.collection.insertMany(spanishSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });