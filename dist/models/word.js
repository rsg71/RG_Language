"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const wordBankSchema = new Schema({
    language: String,
    wordsLearned: [
        {
            word: String,
            translation: String,
            answeredCorrectly: Boolean,
            lastDateAnsweredCorrectly: Date,
        }
    ],
    username: String // an id really
});
const French = mongoose_1.default.model("WordGroup", wordBankSchema);
module.exports = French;
//# sourceMappingURL=word.js.map