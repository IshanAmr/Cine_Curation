module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('wishlist', {
      movieId: {
        type: DataTypes.INTEGER,
        references: { model: 'movies', key: 'id' },
      },
      addedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, { timestamps : true });
  
    Wishlist.associate = (models) => {
      Wishlist.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
    };
  
    return Wishlist;
  };
  