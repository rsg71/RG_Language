import mongoose from "mongoose";

const wordGroupSchema = new mongoose.Schema({

    language: String,
    wordsLearned: [
        {
            number: Number,
            word: String,
            translation: String,
            answeredCorrectly: Boolean,
            lastDateAnsweredCorrectly: Date,
            instancesWordHasBeenSeen: Number,
            nextReviewDate: Date
        }
    ],
    userId: String // an id really

});

const WordGroup = mongoose.model("WordGroup", wordGroupSchema);

module.exports = WordGroup;
