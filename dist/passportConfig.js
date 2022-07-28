"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const localStrategy = require('passport-local').Strategy;
module.exports = function (passport) {
    passport.use(new localStrategy((username, password, done) => {
        user_1.default.findOne({ username: username }, (err, user) => {
            if (err)
                throw err;
            if (!user)
                return done(null, false);
            bcryptjs_1.default.compare(password, user.password, (err, result) => {
                if (err)
                    throw err;
                if (result) {
                    console.log("user is authenticated!!!!");
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            });
        });
    }));
    // We need these methods to support login sessions (cookies in browser upon login)
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        user_1.default.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                username: user.username,
                id: user._id
            };
            cb(err, userInformation);
        });
    });
};
//# sourceMappingURL=passportConfig.js.map