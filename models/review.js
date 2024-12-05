module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
      movieId: {
        type: DataTypes.INTEGER,
        references: { model: 'movies', key: 'id' },
      },
      rating: DataTypes.FLOAT, 
      reviewText: DataTypes.STRING,
      addedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, { timestamps : true });
  
    Review.associate = (models) => {
      Review.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
    };
  
    return Review;
  };
  