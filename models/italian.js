const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const italianSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean
});

const Italian = mongoose.model("Italian", italianSchema);

module.exports = Italian;