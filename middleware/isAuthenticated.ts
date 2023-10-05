import { Request, Response, NextFunction } from "express";
import logger from '../logger';
import jwt from 'jsonwebtoken';
import config from "../config/index";


// /**
//  * Check if a JWT is expired
//  * @param expirationDate - the jwt.exp value 
//  * @returns true if expired, false if not 
//  */
// function verifyIsTokenExpired(expirationDate: number): boolean {
//   if (!expirationDate) {
//     return true;
//   }
//   const now = Date.now();
//   const isTokenExpired: boolean = now >= expirationDate * 1000;

//   console.log('isTokenExpired? : ', isTokenExpired);
//   console.log('now is: ', now, ' vs. expiration date of token: ', expirationDate);

//   return isTokenExpired;
// }

export interface IJWTValidation {
  _id: string;
  username: string;
  iat: number;
  exp: number;
}

/**
 * This is middleware for restricting routes a user is not allowed to visit if not logged in
 */
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  logger.trace('ensuring isAuthenticated...');

  logger.debug('------------------ cookies ---------------------');
  logger.debug({ cookies: req.cookies });
  logger.debug('--------------------- headers ----------------------');
  // console.log(req.headers);
  // const tokenString = req.headers.authorization; // this would be for a Bearer token
  // if (!tokenString) {
  // logger.warn('missing a Bearer token in req.headers.authorization');
  // return res.status(401).send('Error: unauthorized');
  // 
  // }
  // const justTheToken: string = tokenString.replace('Bearer', "").trim();
  // console.log('just the token is: ', justTheToken);
  // console.log('--------------------- end of headers ----------------------');



  const token = req.cookies['access_token'];
  const JWT_SECRET = config.JWT_SECRET;

  // console.log('token: ', token);
  // console.log('jwt secret: ', JWT_SECRET);


  jwt.verify(token, JWT_SECRET, function (err: any, decodedJWT: any | IJWTValidation) {
    if (err) {
      logger.error(err.message) // Manage different errors here (Expired, untrusted...)
      logger.warn('the JWT exists but it is not valid');
      return res.status(401).send('Error: unauthorized');
    }

    logger.debug('decodedJWT (this jwt is valid): ');
    logger.debug(decodedJWT);

    next();
  });
};

export default isAuthenticated;