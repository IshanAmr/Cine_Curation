module.exports = (sequelize, DataTypes) => {
    const CuratedList = sequelize.define('curatedList', {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
    },{ timestamps: true });
  
    CuratedList.associate = (models) => {
      CuratedList.belongsToMany(models.Movie, {
        through: models.CuratedListItem,
        foreignKey: 'curatedListId',
        otherKey: 'movieId',
        as: 'movies',
      });
  
      CuratedList.hasMany(models.CuratedListItem, { foreignKey: 'curatedListId', as: 'items' });
    };
  
    return CuratedList;
  };
  