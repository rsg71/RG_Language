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
        translation: "apple",
        answeredCorrectly: false
    },
    {
        word: "camisa",
        translation: "shirt",
        answeredCorrectly: false
    },
    {
        word: "brazo",
        translation: "arm",
        answeredCorrectly: false
    },
    {
        word: "amarillo",
        translation: "yellow",
        answeredCorrectly: false
    },
    {
        word: "mesa",
        translation: "table",
        answeredCorrectly: false
    },
    {
        word: "vaca",
        translation: "cow",
        answeredCorrectly: false
    },
    {
        word: "plato",
        translation: "plate",
        answeredCorrectly: false
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