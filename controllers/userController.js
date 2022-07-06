const db = require("../models");


module.exports = {
   
    addLanguage: function (req, res) {
        console.log("req.body: ", req.body);

        let newLanguage = req.body;

        db.French
            .insertOne(unlearnedWordsFilter)
            .then(words => {
                console.log('inserted');
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
            .findOneAndUpdate(filter, update, {new: true})
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