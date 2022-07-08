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


    answerCorrectly: async function (req, res) {
        console.log("user controller hit!");
        console.log("user answer correctly req.params: ", req.params);
        console.log("user answer correctly req.query: ", req.query);
        console.log("---------------------")
        console.log(req.user);
        console.log("---------------------")

        if (req.user.id === undefined) {
            return res.status(422).send('no user')
        }

        let wordToLookFor = req.query.word;
        let language = req.query.language // NOTE: this must end up being dynamic eventually
        let filter = { userId: req.user.id, language: language }; //✔ good
        let targetLanguageForUser = await db.UserCollection.find(filter);
        console.log("targetLanguageForUser: ", targetLanguageForUser); // ✔good


        let wordToUpdateObj = targetLanguageForUser[0].wordsLearned.find(item => item.word === wordToLookFor);
        let indexOfWordToUpdate = (targetLanguageForUser[0].wordsLearned.findIndex(item => item.word === wordToLookFor)) + 1;
        console.log("\nwordToUpdateObj is: ", wordToUpdateObj);
        console.log("\nindexOfWordToUpdate is: ", indexOfWordToUpdate);



        db.UserCollection.updateOne(
            {
                userId: req.user.id, language: language, "wordsLearned.word": wordToLookFor // note that all three of these are used to narrow down the object within the document that we want to update (the nth object in the wordsLearned array). What happens here is the first two filters lock down the document itself. The wordsLearned.word loops through each word (element) in the wordsLearned array. If it finds the word we are looking for, it carries on in the update function to the next section ($set);
            },
            {
                "$set": {
                    "wordsLearned.$.answeredCorrectly": true,
                    "wordsLearned.$.lastDateAnsweredCorrectly": new Date()
                }
            },
            {
                new: true
            }
        )
            .then(model => {
                console.log(model)
                return res.json(model);
            })
            .catch(err => {
                console.log(err);
                return res.status(422).json(err);
            })
    },


    findAllUnlearnedWordsForGivenLanguageForUser: function (req, res) {

        console.log(`finding all unlearned ${req.query.language} words for user...`);
        console.log(req.user);
        console.log(req.query);

        let userId = req.user.id;
        let language = req.query.language;

        let unlearnedWordsFilter = { userId: userId, language: language, lastDateAnsweredCorrectly: null }

        db.UserCollection
            .find(unlearnedWordsFilter)
            .then(words => {
                console.log('found unlearned words for user...');
                console.log("unlearned words: ", words)
                res.json(words[0]);
                console.log('sent')
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
};