module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated! Nice..")
            return next();
        }
        else {
           return res.status(400).send("user is NOT authenticated, as determined by the middleware")
        }
    }
}