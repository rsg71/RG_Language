const db = require("../models");
const { speak, getDateXDaysAgo } = require('../utils/helperFunctions');


module.exports = {
    findAll: function (req, res) {
        db.Spanish
            .find(req.query)
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
    findAllForReview: function (req, res) {

        // the date to look for should be x number of days in the past

        // find all words that have a lastDateAnsweredCorrectly where the value (the date) is more than X # of days ago.



        // let date_to_look_for = new Date(2022, 05, 26, 20, 36, 8);
        speak();


        let date_to_look_for = getDateXDaysAgo(2);


        console.log("==================================");
        console.log("date_to_look_for is: ", date_to_look_for);
        console.log("==================================");

        // ^ I want to get everything before this date. 


        let filter_for_past_certain_date = {
            lastDateAnsweredCorrectly: { $lte: date_to_look_for }
        }


        db.Spanish
            .find(filter_for_past_certain_date)
            .then(words => {
                console.log('found all for review');
                console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    findAllUnlearnedWords: function (req, res) {
        console.log("finding all unlearned spanish words for user...");
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
    remove: function (req, res) {
        db.Spanish
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    answerCorrectly: async function (req, res) {
        console.log("spanish controller hit!");
        console.log("spanish answer correctly req.params: ", req.params);
        console.log("spanish answer correctly req.query: ", req.query);
        console.log("---------------------")
        console.log(req.user);
        console.log("---------------------")

        if (req.user.id === undefined) {
            return res.status(422).send('no user')
        }

        let wordToLookFor = req.query.word;
        let language = 'spanish' // NOTE: this must end up being dynamic eventually
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
    }
};