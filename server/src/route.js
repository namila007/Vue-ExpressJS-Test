const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongController')
const UserController = require('./controllers/UserController')
const BookmarkController = require('./controllers/BookmarkController')

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

  app.get('/users', UserController.index)

  app.get('/songs', SongController.index)
  app.post('/songs', SongController.post)
  app.get('/songs/title/:title', SongController.findSong)
  app.get('/songs/id/:id', SongController.findSongbyId)
  app.put('/songs/id/:id', SongController.put)

  app.post('/bookmarks', BookmarkController.post)
  app.get('/bookmarks', BookmarkController.index)
}
