const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    console.log(err + '  ' + user)
    if (err || !user) {
      res.status(403).send({
        err: 'not authorized'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}