const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spanishSchema = new Schema({

    word: String,
    translation: String
});

const Spanish = mongoose.model("Spanish", spanishSchema);

module.exports = Spanish;
