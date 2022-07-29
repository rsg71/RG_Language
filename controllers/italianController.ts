const db = require("../models");
const { getDateXDaysAgo } = require("../utils/helperFunctions");


const italianController = {
    findAll: function (req: any, res: any) {
        db.Italian
            .find(req.query)
            .then((words: any) => {
                console.log('found');
                // console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch((err: any) => {
                console.log(err);
                res.status(422).json(err)

            });
    },
    findAllUnlearnedWords: function (req: any, res: any) {

        let unlearnedWordsFilter = { lastDateAnsweredCorrectly: null }

        db.Italian
            .find(unlearnedWordsFilter)
            .then((words: any) => {
                console.log('found');
                console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch((err: any) => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    findAllForReview: function (req: any, res: any) {

        // the date to look for should be x number of days in the past

        // find all words that have a lastDateAnsweredCorrectly where the value (the date) is more than X # of days ago.

        let date_to_look_for = getDateXDaysAgo(2);

        console.log("==================================");
        console.log("date_to_look_for is: ", date_to_look_for);
        console.log("==================================");

        // ^ I want to get everything before this date. 


        let filter_for_past_certain_date = {
            lastDateAnsweredCorrectly: { $lte: date_to_look_for }
        }


        db.Italian
            .find(filter_for_past_certain_date)
            .then((words: any) => {
                console.log('found all for review');
                // console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch((err: any) => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    remove: function (req: any, res: any) {
        db.Italian
            .findById({ _id: req.params.id })
            .then((dbModel: any) => dbModel.remove())
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err));
    },
    answerCorrectly: function (req: any, res: any) {
        console.log("controller hit!");
        console.log("req.params: ", req.params)
        let filter = { _id: req.params.word };
        let update = {
            answeredCorrectly: true,
            lastDateAnsweredCorrectly: new Date()
        }
        db.Italian
            .findOneAndUpdate(filter, update, { new: true })
            .then((model: any) => {
                console.log("model is:", model)
                res.json(model)
            })
            .catch((err: any) => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    addWord: function (req: any, res: any) {
        db.Italian
            .create(req.body)
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err))
    }
};

export default italianController;