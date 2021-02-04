const db = require("../models");


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
    remove: function (req, res) {
        db.Spanish
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};