module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmarks', {})

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Songs)
  }

  return Bookmark
}
