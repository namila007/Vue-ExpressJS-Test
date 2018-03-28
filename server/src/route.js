const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/status', function (req, res) {
    res.stats(200).send({
      message: 'hello'
    })
  })
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
}
