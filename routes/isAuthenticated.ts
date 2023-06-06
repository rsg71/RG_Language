import { Request, Response, NextFunction } from "express";
import logger from '../logger';

// This is middleware for restricting routes a user is not allowed to visit if not logged in
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    logger.debug({reqUser: req.user}, "req.user in middleware: ");
    return next();
  }
  // If the user isn't logged in, redirect them to the root page
  return res.status(401).send('Error: unauthorized');
};

export default isAuthenticated;