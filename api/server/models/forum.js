'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    static associate(models) {
      Forum.belongsTo(models.Agorum, {
        foreignKey: 'agorumId',
        onDelete: 'CASCADE',
      }),
      Forum.hasMany(models.ForumPost, {
        foreignKey: 'forumId',
        as: 'forumpost',
        onDelete: 'CASCADE'
      });
    }
  };
  Forum.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    posts: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};