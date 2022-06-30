const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordBankSchema = new Schema({

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

const French = mongoose.model("WordGroup", wordBankSchema);

module.exports = French;
