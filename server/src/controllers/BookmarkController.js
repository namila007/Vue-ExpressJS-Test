const { Bookmarks, Songs } = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await Bookmarks.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark).status(200)
    } catch (err) {
      console.log(err)
      res.send({
        err: 'error occured'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      console.log(req.body)
      const bookmark = await Bookmarks.create({
        SongId: songId,
        UserId: userId
      })
      res.send(bookmark).status(201)
    } catch (err) {
      console.log(err)
      res.send({
        err: 'error occured'
      })
    }
  }
}
