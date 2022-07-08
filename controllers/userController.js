const db = require("../models");
const path = require('path');

const frenchSeed = require('../utils/frenchSeed');
const germanSeed = require('../utils/germanSeed');
const italianSeed = require('../utils/italianSeed');
const portugueseSeed = require('../utils/portugueseSeed');
const spanishSeed = require('../utils/spanishSeed');

module.exports = {

    addLanguage: async function (req, res) {

        console.log("==========================================")
        console.log(`attempting to add a language for user ${req.user.username} id ${req.user.id}`)
        console.log("req.body: ", req.body);
        console.log("req.user: ", req.user);
        console.log("userId: ===> ", req.user.id);
        let username = req.user.username;

        let newLanguage = req.body.language.toLowerCase();


        let seedToFind = require(`../utils/${newLanguage}Seed`);

        let newUserLanguage = {
            language: newLanguage,
            wordsLearned: seedToFind,
            userId: req.user.id // an id really
        }
        console.log("newUserLanguage: ", newUserLanguage)

        let languageToFind = newLanguage;

        let languageFound = await db.UserCollection.find({ language: languageToFind, userId: req.user.id });
        console.log("languageFound is: ", languageFound);

        // return res.status(400).send("hello")

        if (languageFound.length > 0) {
            return res.send("language already exists")
        } else {

            console.log("languageFound is: ", languageFound);

            db.UserCollection
                .create(newUserLanguage)
                .then(words => {
                    console.log(`inserted ${newUserLanguage.language} for this user`);
                    console.log(words)
                    res.json(words);
                    console.log('sent')
                })
                .catch(err => {
                    console.log(err);
                    res.status(422).json(err)
                });
        }
    },

    getLanguageDataForUser: async function (req, res) {

        console.log("here is the req.params: ", req.params);
        console.log("here is the req.body: ", req.body);

        const languageToFind = req.params.language.toLowerCase(); // ensuring it's lowercase (probably already is by this point)
        const userIdToFind = req.params.username;



        let languageFound = await db.UserCollection.find({
            userId: userIdToFind,
            language: languageToFind
        });
        console.log("languageFound is: ", languageFound);

        return res.status(200).send(languageFound);

    },

    findAllLanguagesForThisUser: function (req, res) {
        let userId = req.params.userId;
        console.log("userId: ", userId);

        if (!userId) {
            console.log("USER ID IS MISSING")
            return res.status(400);
        } else {


            db.UserCollection
                .find({ userId: userId })
                .then(words => {
                    console.log('all words found');
                    console.log(words)
                    res.json(words);
                    console.log('sent')
                })
                .catch(err => {
                    console.log(err);
                    res.status(422).json(err)
                });
        }

    },


    answerCorrectly: function (req, res) {
        console.log("controller hit!");
        console.log("req.params: ", req.params)
        let filter = { _id: req.params.word };
        let update = { answeredCorrectly: true }
        db.French
            .findOneAndUpdate(filter, update, { new: true })
            .then(model => {
                console.log("model is:", model)
                res.json(model)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },


    findAllUnlearnedWordsForGivenLanguageForUser: function (req, res) {

        let userId = req.user.id;
        let language = req.query.language;

        let unlearnedWordsFilter = { userId: userId, language: language, lastDateAnsweredCorrectly: null }

        db.UserCollection
            .find(unlearnedWordsFilter)
            .then(words => {
                console.log('found');
                console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
};