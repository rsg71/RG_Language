"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./config/index"));
// import ExpressLoader from './loaders/Express'
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
// Authentication
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passportConfig = require('./config/passportConfig');
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
})
    .catch((err) => console.log("err!: ", err));
// load Express instance
// const app = new ExpressLoader();
const app = (0, express_1.default)();
// Define middleware for JSON parsing
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Serve up static assets (usually on heroku)
if (index_1.default.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
}
else {
    console.log("===============================================");
    console.log("config.NODE_ENV:", index_1.default.NODE_ENV);
    console.log("config.MONGODB_URI: ", index_1.default.MONGODB_URI);
}
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: index_1.default.FRONT_END_ORIGIN_URL,
    credentials: true
}));
// Express sessions
app.use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use((0, cookie_parser_1.default)(index_1.default.COOKIE_PARSER_SECRET_CODE));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passportConfig(passport_1.default);
// api routes
app.use(routes_1.default);
app.listen(index_1.default.PORT, function () {
    console.log(`==> API server is now listening on port ${index_1.default.PORT}!`);
});
module.exports = app;
//# sourceMappingURL=index.js.map