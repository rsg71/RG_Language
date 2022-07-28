"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("user is authenticated! Nice..");
        return next();
    }
    else {
        return res.status(400).send("user is NOT authenticated, as determined by the middleware");
    }
}
exports.default = ensureAuthenticated;
//# sourceMappingURL=auth.js.map