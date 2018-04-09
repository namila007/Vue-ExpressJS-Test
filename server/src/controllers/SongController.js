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
      let songs = null
      if (req.query.search) {
        const search = req.query.search
        if (search) {
          songs = await Songs.findAll({
            where: {
              $or: [
                'title', 'artist', 'album'
              ].map(key => ({
                [key]: {
                  $like: `%${search}%`
                }
              }))
            }
          })
        }
      } else {
        songs = await Songs.findAll({
          limit: 10
        })
      }
      res.send(songs).status(200)
    } catch (err) {
      res.status(500).send({
        error: 'Error Occured while fetch songs'
      })
    }
  },
  async findSong (req, res) {
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
    
  },
  async findSongbyId (req, res) {
    try {
      const song = await Songs.findOne({
        where: { id: req.params.id }
      })
      if (!song) {
        res.status(404).send({
          error: 'Song ' + req.params.id + ' does not found'
        })
      } else {
        res.send(song)
      }
    } catch (err) {
      res.status(500).send({
        error: 'Error Occured while fetching the song'
      })
    }
  },
  async put (req, res) {
    console.log(req.body)
    try {
      const song = await Songs.update(req.body, {
        where: { id: req.params.id }
      })
      res.status(200).send(req.body)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error Occured while updating the song'
      })
    }
  }
}
