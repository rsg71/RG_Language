const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordGroupSchema = new Schema({

    language: String,
    wordsLearned: [
        {
            number: Number,
            word: String,
            translation: String,
            answeredCorrectly: Boolean,
            lastDateAnsweredCorrectly: Date,
        }
    ],
    userId: String // an id really

});

const WordGroup = mongoose.model("WordGroup", wordGroupSchema);

module.exports = WordGroup;
