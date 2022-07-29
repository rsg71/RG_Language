import mongoose from "mongoose";
const Schema = mongoose.Schema;

const frenchSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date
});

const French = mongoose.model("French", frenchSchema);

module.exports = French;
