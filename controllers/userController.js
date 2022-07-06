const db = require("../models");


module.exports = {

    addLanguage: async function (req, res) {
        console.log("req.body: ", req.body);
        console.log("req.user: ", req.user);
        console.log("userId: ===> ", req.user.id)

        let newLanguage = req.body.language.toLowerCase();

        let newUserLanguage = {
            language: newLanguage,
            wordsLearned: [
                {
                    word: "abc",
                    translation: "xyz",
                    answeredCorrectly: false,
                    lastDateAnsweredCorrectly: null,
                }
            ],
            userId: req.user.id // an id really
        }

        let languageToFind = newLanguage;

        let languageFound = await db.UserCollection.find({ language: languageToFind });
        console.log("languageFound is: ", languageFound);

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

    findAllLanguagesForThisUser: function (req, res) {
        db.UserCollection
            .find()
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
    }
};