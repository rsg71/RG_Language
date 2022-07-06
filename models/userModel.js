const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userBankSchema = new Schema({

    language: String,
    wordsLearned: [
        {
            word: String,
            translation: String,
            answeredCorrectly: Boolean,
            lastDateAnsweredCorrectly: Date,
        }
    ],
    username: String // an id really

});

const French = mongoose.model("WordGroup", userBankSchema);

module.exports = French;
