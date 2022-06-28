const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const germanSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date
});

const German = mongoose.model("German", germanSchema);

module.exports = German;
