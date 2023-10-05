import logger from '../../logger';
const router = require("express").Router();
import { NextFunction, Request, Response } from "express";
import passport from 'passport';
import User from "../../models/user";
import bcrypt from "bcryptjs";
import { UserRequestInterface } from '../../utils/interfaces/users';
import jwt from 'jsonwebtoken';
import config from '../../config/index';

export interface authRequest extends Request {
    user?: UserRequestInterface;
}


/**
 * @swagger
 * /api/auth/page-load-login:
 *   get:
 *     summary: Check if user is logged in
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: user is logged in
 *       404:
 *         description: Bad Request
 */
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


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username: 
 *                 type: string
 *               password: 
 *                 type: string
 *             example:
 *               username: "rob"
 *               password: "123"  
 *     responses:
 *       200:
 *         description: login successful
 *       400:
 *         description: Bad Request
 */
router.post("/login", (req: Request, res: Response, next: NextFunction) => {

    passport.authenticate("local", {}, (err: any, user: any, info: any) => {
        if (err) {
            // throw err
            res.status(400).send('error with this user')
        } else if (!user) {

            res.status(400).send("No User Exists")
        } else {

            const _id = user._id;
            const username = user.username;


            const token = jwt.sign(
                {
                    _id,
                    username
                },
                config.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            );

            res.status(200)
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .json({
                status: 200,
                success: true,
                message: "login success",
                token: token,
                userData: {
                    username, 
                    _id
                }
            });
        }
    })(req, res, next)
})


/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Sign user up
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username: 
 *                 type: string
 *               password: 
 *                 type: string
 *             example:
 *               username: "jdoe"
 *               password: "123"  
 *     responses:
 *       200:
 *         description: signup successful
 */
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


/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Logs the user out
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: logout successful
 */
router.get("/logout", (req: Request, res: Response, next: NextFunction) => {

    res.status(200).clearCookie("access_token").send("User successfully logged out");
})


export default router;