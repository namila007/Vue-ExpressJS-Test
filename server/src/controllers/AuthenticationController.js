const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const TIME = 60 * 5
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: TIME
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(400).send({
          error: 'User not found'
        })
      }
      const isPassValid = await user.comparePassword(password)
      if (!isPassValid) {
        return res.status(403).send({
          error: 'Invalid Password'
        })
      }
      const userJson = user.toJSON()
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // console.log(err)
      res.status(500).send({
        error: 'Error Occured'
      })
    }
  }
}
