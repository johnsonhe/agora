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
      Forum.hasMany(models.CourseSection, {
        foreignKey: 'forumId',
        as: 'forumPost',
        onDelete: 'CASCADE'
      });
    }
  };
  Forum.init({
    posts: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};