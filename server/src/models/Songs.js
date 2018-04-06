module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Songs', {
    title: { type: DataTypes.STRING, unique: true },
    artist: { type: DataTypes.STRING, allowNull: false },
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING

  })
  return Song
}
