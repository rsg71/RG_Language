import logger from '../../logger';
const router = require("express").Router();
import { NextFunction, Request, Response } from "express";
import passport from 'passport';
import User from "../../models/user";
import bcrypt from "bcryptjs";
import { UserRequestInterface } from '../../utils/interfaces/users';

export interface authRequest extends Request {
    user?: UserRequestInterface;
}


router.get("/page-load-login", (req: authRequest, res: Response) => {
    if (!req.user) {
        logger.error('no user found on auth route');
        res.status(404).send("no user found")
    } else {
        const user = req.user as any;
        logger.debug(user, "user is:");
        logger.info({ user });
        let { username, id: _id } = user;
        let userData = { username, _id }
        res.send(userData);
    }
})


router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", {}, (err: any, user: any, info: any) => {
        if (err) {
            // throw err
            res.status(400).send('error with this user')
        } else if (!user) {

            res.status(400).send("No User Exists")
        } else {
            req.logIn(user, (err) => {
                if (err) throw err;

                let { username, _id } = user;
                let userData = { username, _id }
                res.send(userData);
                // console.log(req.user);
            });
        }
    })(req, res, next)
})


router.post("/signup", (req: Request, res: Response) => {
    console.log("new username is: ", req.body.username)

    User.findOne({ username: req.body.username }, async (err: any, doc: any) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (doc) {
            console.log("user already exists");
            return res.status(422).send("User Already Exists");
        }
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});


router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
    req.logout(function (err) {
        if (err) {
            console.log("error upon logout attempt is: ", err);
            return next(err);
        }
    });
    res.status(200).send("User successfully logged out");
})


export default router;