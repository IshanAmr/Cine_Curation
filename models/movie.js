module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('movie', {
      title: DataTypes.STRING,
      tmdbId: DataTypes.INTEGER, 
      genre: DataTypes.TEXT,
      actors: DataTypes.TEXT,
      releaseYear: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      description: DataTypes.TEXT,
    },
   { timestamps : true });
  
    Movie.associate = (models) => {
      Movie.hasMany(models.Review, { foreignKey: 'movieId', as: 'reviews' });
  
      Movie.belongsToMany(models.CuratedList, {
        through: models.CuratedListItem,
        foreignKey: 'movieId',
        otherKey: 'curatedListId',
        as: 'curatedLists',
      });
  
      Movie.hasMany(models.Watchlist, { foreignKey: 'movieId', as: 'watchlists' });
  
      Movie.hasMany(models.Wishlist, { foreignKey: 'movieId', as: 'wishlists' });
    };
  
    return Movie;
  };
  