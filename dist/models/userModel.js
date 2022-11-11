"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const wordGroupSchema = new mongoose_1.default.Schema({
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
const WordGroup = mongoose_1.default.model("WordGroup", wordGroupSchema);
module.exports = WordGroup;
//# sourceMappingURL=userModel.js.map