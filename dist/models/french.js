"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const frenchSchema = new Schema({
    word: String,
    translation: String,
    answeredCorrectly: Boolean,
    lastDateAnsweredCorrectly: Date
});
const French = mongoose_1.default.model("French", frenchSchema);
module.exports = French;
//# sourceMappingURL=french.js.map