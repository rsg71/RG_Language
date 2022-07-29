"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../models");
const germanController = {
    findAll: function (req, res) {
        db.German
            .find(req.query)
            .then((words) => {
            console.log('found');
            console.log(words);
            res.json(words);
            console.log('sent');
        })
            .catch((err) => {
            console.log(err);
            res.status(422).json(err);
        });
    },
    findAllUnlearnedWords: function (req, res) {
        let unlearnedWordsFilter = { lastDateAnsweredCorrectly: null };
        db.German
            .find(unlearnedWordsFilter)
            .then((words) => {
            console.log('found');
            console.log(words);
            res.json(words);
            console.log('sent');
        })
            .catch((err) => {
            console.log(err);
            res.status(422).json(err);
        });
    },
    remove: function (req, res) {
        db.German
            .findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    answerCorrectly: function (req, res) {
        console.log("controller hit!");
        console.log("req.params: ", req.params);
        let filter = { _id: req.params.word };
        let update = { answeredCorrectly: true };
        db.German
            .findOneAndUpdate(filter, update, { new: true })
            .then((model) => {
            console.log("model is:", model);
            res.json(model);
        })
            .catch((err) => {
            console.log(err);
            res.status(422).json(err);
        });
    }
};
exports.default = germanController;
//# sourceMappingURL=germanController.js.map