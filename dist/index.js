"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const index_2 = __importDefault(require("./config/index"));
console.log('config: ', index_2.default);
require('dotenv').config();
// Authentication
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Define middleware for JSON parsing
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
}
else {
    console.log("===============================================");
    console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
    console.log("process.env.MONGODB_URI: ", process.env.MONGODB_URI);
}
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
// Connect to Mongoose --- //
mongoose_1.default.connect(index_2.default.chooseConnection || "", mongooseOptions)
    .then((res) => {
    console.log("connected successfully to: ", res.connections[0]._connectionString);
    console.log("mongodb is successfully connected ✔");
})
    .catch((err) => console.log("err!: ", err));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
// Express sessions
app.use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use((0, cookie_parser_1.default)("secretcode"));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
require('./passportConfig')(passport_1.default);
// api routes
app.use(index_1.default);
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map