import User from "./models/user";
import bcrypt from "bcryptjs";
const localStrategy = require('passport-local').Strategy;

module.exports = function (passport: any) {
    passport.use(
        new localStrategy((username: string, password: string, done: any) => {
            User.findOne({ username: username }, (err: any, user: any) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err: any, result: any) => {
                    if (err) throw err;
                    if (result) {
                        console.log("user is authenticated!!!!")
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    // We need these methods to support login sessions (cookies in browser upon login)
    passport.serializeUser((user: any, cb: any) => {
        cb(null, user.id);
    })
    passport.deserializeUser((id: any, cb: any) => {
        User.findOne({ _id: id }, (err: any, user: any) => {
            const userInformation = {
                username: user.username,
                id: user._id
            };
            cb(err, userInformation)
        });
    });
};
