import mongoose from "mongoose";
const Schema = mongoose.Schema;

const spanishSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date
});

const Spanish = mongoose.model("Spanish", spanishSchema);

module.exports = Spanish;
