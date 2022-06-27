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
    remove: function (req, res) {
        db.Spanish
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    answerCorrectly: function (req, res) {
        console.log("controller hit!");
        console.log("req.params: ", req.params)
        let filter = { _id: req.params.word };
        let update = {
            answeredCorrectly: true,
            lastDateAnsweredCorrectly: new Date()
        }
        db.Spanish
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