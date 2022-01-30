const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const frenchSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean
});

const French = mongoose.model("French", frenchSchema);

module.exports = French;
