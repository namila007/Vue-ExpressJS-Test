const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongController')

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
  app.get('/songs', SongController.index)
  app.post('/songs', SongController.post)
  app.get('/songs/title/:title', SongController.findSong)
}
