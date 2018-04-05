const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword (user, option) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return null
  }
  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    // bcrypt.hashAsync(password, null, null, function (err, res) {
    //   console.log('new ' + res)
    //   if (err) {
    //     return err
    //   }
    //   if (res === this.password) return true
    //   else return false
    // })
    return bcrypt.compare(password, this.password).then(function (res) {
      // console.log(res + 'sssss')
      return res
    })
    //   function (err, res) {
    //   console.log(res)
    //   if (err) {
    //     console.log(err)
    //     return err
    //   }
    //   return res
    // })
  }
  User.associate = function (models) {
  }
  return User
}
