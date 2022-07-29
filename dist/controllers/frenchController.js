"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../models");
const frenchController = {
    findAll: function (req, res) {
        db.French
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
        db.French
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
        db.French
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
        db.French
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
exports.default = frenchController;
//# sourceMappingURL=frenchController.js.map