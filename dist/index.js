"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./config/index"));
const Express_1 = __importDefault(require("./loaders/Express"));
require('dotenv').config();
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
// Connect to Mongoose --- //
mongoose_1.default.connect(index_1.default.chooseConnection || "", mongooseOptions)
    .then((res) => {
    console.log("connected successfully to: ", res.connections[0]._connectionString);
    console.log("mongodb is successfully connected ✔");
    // load Express instance
    new Express_1.default();
})
    .catch((err) => console.log("err!: ", err));
//# sourceMappingURL=index.js.map