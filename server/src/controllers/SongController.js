const { Songs } = require('../models')

module.exports = {
  async post (req, res) {
    try {
      const song = await Songs.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error Occured while adding a Song'
      })
      // console.log(err)
    }
  },
  async index (req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10
      })
      res.send(songs).status(200)
    } catch (err) {
      res.status(500).send({
        error: 'Error Occured while fetch songs'
      })
    }
  },
  async findSong (req, res) {
    console.log(req.params.title)
    try {
      const song = await Songs.findOne({
        where: { title: req.params.title }
      })
      if (!song) {
        res.status(404).send({
          error: 'Song ' + req.params.title + ' does not found'
        })
      } else {
        res.send(song)
      }
    } catch (err) {
      res.status(500).send({
        error: 'Error Occured while fetching the song'
      })
    }
  }

}
