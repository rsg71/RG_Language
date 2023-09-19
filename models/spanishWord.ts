import mongoose from "mongoose";
import { IWordSeed } from "../utils/interfaces/words";

const Schema = mongoose.Schema;

const wordToLearnSchema = new Schema<IWordSeed>({
    word: String,
    translation: String,
    number: Number,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date || null,
    instancedWordHasBeenSeen: Number,
    nextReviewDate: Date || null

});

const SpanishWord = mongoose.model("Spanish", wordToLearnSchema);

module.exports = SpanishWord;
