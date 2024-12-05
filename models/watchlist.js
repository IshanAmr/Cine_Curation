module.exports = (sequelize, DataTypes) => {
    const Watchlist = sequelize.define('watchlist', {
      movieId: {
        type: DataTypes.INTEGER,
        references: { model: 'movies', key: 'id' },
      },
      addedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: true } );
  
    Watchlist.associate = (models) => {
      Watchlist.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
    };
  
    return Watchlist;
  };
  