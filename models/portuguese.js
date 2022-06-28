const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portugueseSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date
});

const Portuguese = mongoose.model("Portuguese", portugueseSchema);

module.exports = Portuguese;
