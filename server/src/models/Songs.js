module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Songs', {
    title: { type: DataTypes.STRING, unique: true },
    artist: { type: DataTypes.STRING, allowNull: false },
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.TEXT,
    youtubeId: DataTypes.TEXT

  })
  return Song
}
