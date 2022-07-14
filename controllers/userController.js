const db = require("../models");
const path = require('path');

const { getDateXDaysAgo, getDateXDaysAhead } = require('../utils/helperFunctions');

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
                    // console.log(words)
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
        let language = req.query.language
        let filter = { userId: req.user.id, language: language }; //✔ good
        let targetLanguageForUser = await db.UserCollection.find(filter);
        console.log("targetLanguageForUser: ", targetLanguageForUser); // ✔good


        // finding the word obj within the wordsLearned array for this user
        let wordToUpdateObj = targetLanguageForUser[0].wordsLearned.find(item => item.word === wordToLookFor);
        let indexOfWordToUpdate = (targetLanguageForUser[0].wordsLearned.findIndex(item => item.word === wordToLookFor)) + 1;
        console.log("\nwordToUpdateObj is: ", wordToUpdateObj);
        console.log("\nindexOfWordToUpdate is: ", indexOfWordToUpdate);

        let instances = wordToUpdateObj.instancesWordHasBeenSeen;
        console.log("\ninstances: ", instances);
        console.log("\ninstances++: ", instances++);

        // also if you got the word wrong in the session, you need to see it again until you get it right

        let nextReviewDate;
        const today = new Date();


        if (instances === 0) {
            // instance 0: see word, gets correct
            // - next time seeing word: 1 days later
            nextReviewDate = getDateXDaysAhead(1, today);
        } else if (instances === 1) {
            // instance 1: see word, gets correct
            // - next time seeing word: 5 days later
            nextReviewDate = getDateXDaysAhead(5, today);
        } else if (instances === 2) {
            // instance 2: see word, gets correct
            // - next time seeing word: 12 days later
            nextReviewDate = getDateXDaysAhead(12, today);
        } else if (instances === 3) {
            // instance 3: see word, gets correct
            // - next time seeing word: 28 days later
            nextReviewDate = getDateXDaysAhead(28, today);
        } else if (instances > 3) {
            // If answered correctly 4 times already, 
            // - next time seeing word: 45 days later
            nextReviewDate = getDateXDaysAhead(45, today);
        }


        console.log('nextReviewDate: ', nextReviewDate);


        db.UserCollection.updateOne(
            {
                userId: req.user.id, language: language, "wordsLearned.word": wordToLookFor // note that all three of these are used to narrow down the object within the document that we want to update (the nth object in the wordsLearned array). What happens here is the first two filters lock down the document itself. The wordsLearned.word loops through each word (element) in the wordsLearned array. If it finds the word we are looking for, it carries on in the update function to the next section ($set);
            },
            // here we need to set new values for several fields
            {
                "$set": {
                    "wordsLearned.$.answeredCorrectly": true,
                    "wordsLearned.$.lastDateAnsweredCorrectly": new Date(),
                    "wordsLearned.$.instancesWordHasBeenSeen": instances++,
                    "wordsLearned.$.nextReviewDate": nextReviewDate
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

    answerIncorrectly: async function (req, res) {
        console.log("user answer incorrectly req.params: ", req.params);
        console.log("user answer incorrectly req.query: ", req.query);
        console.log("---------------------")
        console.log(req.user);
        console.log("---------------------")

        if (req.user.id === undefined) { return res.status(422).send('no user') };

        let wordToLookFor = req.query.word;
        let language = req.query.language;
        let filter = { userId: req.user.id, language: language };
        let targetLanguageForUser = await db.UserCollection.find(filter);
        console.log("targetLanguageForUser: ", targetLanguageForUser);


        // finding the word obj within the wordsLearned array for this user
        let wordToUpdateObj = targetLanguageForUser[0].wordsLearned.find(item => item.word === wordToLookFor);
        let indexOfWordToUpdate = (targetLanguageForUser[0].wordsLearned.findIndex(item => item.word === wordToLookFor)) + 1;
        console.log("\nwordToUpdateObj is: ", wordToUpdateObj);
        console.log("\nindexOfWordToUpdate is: ", indexOfWordToUpdate);

        let instances = wordToUpdateObj.instancesWordHasBeenSeen;
        console.log("\ninstances: ", instances);
        console.log("\ninstances++: ", instances++);


        let nextReviewDate;
        const today = new Date();


        // see word, gets incorrect
        // - next time seeing word: 2 days later (every time for now. May modify going forward)
        nextReviewDate = getDateXDaysAhead(1, today);
        console.log('nextReviewDate: ', nextReviewDate);


        db.UserCollection.updateOne(
            {
                userId: req.user.id, language: language, "wordsLearned.word": wordToLookFor // note that all three of these are used to narrow down the object within the document that we want to update (the nth object in the wordsLearned array). What happens here is the first two filters lock down the document itself. The wordsLearned.word loops through each word (element) in the wordsLearned array. If it finds the word we are looking for, it carries on in the update function to the next section ($set);
            },
            // here we need to set new values for several fields
            {
                "$set": {
                    "wordsLearned.$.nextReviewDate": nextReviewDate,
                    "wordsLearned.$.instancesWordHasBeenSeen": instances++
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
            // .aggregate([
            //     {
            //         $project: {
            //             language: 1,
            //             userId: 1,
            //             wordsLearned: {
            //                 $slice: ["$wordsLearned", 10]
            //             }
            //         }
            //     }
            // ])
            .then(words => {
                console.log('found unlearned words for user...');
                console.log("unlearned words: ", words);

                let base = words[0];
                console.log("baseis: ", base);
                let sliced = { ...base, wordsLearned: base.wordsLearned.filter(word => word.answeredCorrectly === false).slice(0, 25) } // for now, doing automatically up to 25 words in a quiz at a time. Might make this selectable by the user first.

                console.log("sliced: ", sliced);
                res.json(sliced);
                console.log('sent')
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },


    getWordsForReviewForLanguageForUser: async function (req, res) {

        console.log(`finding all reviewable ${req.params.language} words for user...`);
        console.log(req.user);
        console.log(req.params);

        let userId = req.user.id;
        let language = req.params.language;

        // the date to look for should be x number of days in the past

        // find all words that have a lastDateAnsweredCorrectly where the value (the date) is more than X # of days ago.



        // let date_to_look_for = new Date(2022, 05, 26, 20, 36, 8);


        let date_to_look_for = getDateXDaysAgo(2);


        console.log("==================================");
        console.log("date_to_look_for is: ", date_to_look_for);
        console.log("==================================");

        // ^ I want to get everything before this date. 

        let filter_for_past_certain_date = {
            userId: userId,
            language: language,
            // "wordsLearned.lastDateAnsweredCorrectly": { $lte: date_to_look_for }
        }

        let words = await db.UserCollection.find(filter_for_past_certain_date);
        console.log("words: ", words);

        let arrAllWords = words[0].wordsLearned;

        let wordsToReview = arrAllWords.filter(wordObj => {
            let { lastDateAnsweredCorrectly: lastDate } = wordObj;
            if (lastDate === null) { return false }
            else {
                console.log("lastDate: ", lastDate);
                if (lastDate < date_to_look_for) {
                    console.log("==> ", lastDate, " IS LESS than", date_to_look_for)
                    return true
                } else {
                    console.log(lastDate, " is NOT LESS than", date_to_look_for)
                    return false
                }

            }
        });
        console.log("wordsToReview: ", wordsToReview);

        return res.json(wordsToReview);

        // db.UserCollection.aggregate([
        //     {
        //         $project: {
        //             wordsLearned: {
        //                 $filter: {
        //                     input: "$wordsLearned",
        //                     as: "item",
        //                     cond: { $lte: ["$$item.lastDateAnsweredCorrectly", date_to_look_for] }
        //                 }
        //             }
        //         }
        //     }
        // ])

        // db.UserCollection
        //     .find(filter_for_past_certain_date)
        // .then(words => {
        //     console.log('found all words for review');
        //     console.log(words);
        //     res.json(words[0]);
        //     console.log('sent')
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(422).json(err)
        // });
    }
};