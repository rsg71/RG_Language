const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordGroupSchema = new Schema({

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

const WordGroup = mongoose.model("WordGroup", wordGroupSchema);

module.exports = WordGroup;
