const db = require("../models");


const frenchController = {
    findAll: function (req: any, res: any) {
        db.French
            .find(req.query)
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
    findAllUnlearnedWords: function (req: any, res: any) {

        let unlearnedWordsFilter = { lastDateAnsweredCorrectly: null }

        db.French
            .find(unlearnedWordsFilter)
            .then((words: any) => {
                console.log('found');
                console.log(words)
                res.json(words);
                console.log('sent')
            })
            .catch((err:any)=> {
                console.log(err);
                res.status(422).json(err)
            });
    },
    remove: function (req: any, res: any) {
        db.French
            .findById({ _id: req.params.id })
            .then((dbModel: any) => dbModel.remove())
            .then((dbModel: any) => res.json(dbModel))
            .catch((err:any)=> res.status(422).json(err));
    },
    answerCorrectly: function (req: any, res: any) {
        console.log("controller hit!");
        console.log("req.params: ", req.params)
        let filter = { _id: req.params.word };
        let update = { answeredCorrectly: true }
        db.French
            .findOneAndUpdate(filter, update, {new: true})
            .then((model: any) => {
                console.log("model is:", model)
                res.json(model)
            })
            .catch((err:any)=> {
                console.log(err);
                res.status(422).json(err);
            }); 
    }
};

export default frenchController;