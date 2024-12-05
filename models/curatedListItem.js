module.exports = (sequelize, DataTypes) => {
    const CuratedListItem = sequelize.define(
      'curatedListItem',
      {
        curatedListId: {
          type: DataTypes.INTEGER,
          references: { model: 'curatedLists', key: 'id' },
        },
        movieId: {
          type: DataTypes.INTEGER,
          references: { model: 'movies', key: 'id' },
        },
      },
      { timestamps: true }
    );
  
    CuratedListItem.associate = (models) => {
      CuratedListItem.belongsTo(models.CuratedList, { foreignKey: 'curatedListId', as: 'curatedList' });
      CuratedListItem.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
    };
  
    return CuratedListItem;
  };
  