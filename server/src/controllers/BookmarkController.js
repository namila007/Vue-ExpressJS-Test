const { Bookmarks, Songs } = require('../models')
const _ = require('lodash')

module.exports = {

  async index (req, res) {
    try {
      let bookmark = null
      if (req.query.userId && req.query.songId) {
        const { songId, userId } = req.query
        bookmark = await Bookmarks.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      } else {
        const { userId } = req.query
        bookmark = await Bookmarks.findAll({
          where: {
            UserId: userId
          },
          include: [
            { model: Songs }
          ]
        })
          .map(bookmark => bookmark.toJSON())
          .map(bookmark => _.extend(
            {},
            bookmark.Song,
            { bookmarkId: bookmark.id }
          ))
      }
      // console.log(bookmark)
      res.send(bookmark).status(200)
    } catch (err) {
      res.send({
        err: 'error occured'
      })
    }
  },
  async post (req, res) {
    try {
      const {SongId, UserId} = req.body
      const book = await Bookmarks.findOrCreate({
        where: {
          SongId: SongId,
          UserId: UserId
        }
      }).spread((user, created) => {
        console.log(user.get({
          plain: true
        }))
        console.log(created)
        res.send(user)
      })
      
    } catch (err) {
      console.log(err)
      res.send({
        err: 'error occured'
      })
    }
  },
  async delete (req, res) {
    try {
      const bookmarkId = req.body
      console.log(req.body)
      const book = await Bookmarks.findById(bookmarkId.id)
      await book.destroy()
      res.send(book)
    } catch (err) {
      console.log(err)
      res.send({
        err: 'error occured'
      })
    }
  }
}
