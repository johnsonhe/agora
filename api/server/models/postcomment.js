'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    static associate(models) {
      PostComment.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      }),
      PostComment.belongsTo(models.ForumPost, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
      });
    }
  };
  PostComment.init({
    content: DataTypes.STRING,
    support: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostComment',
  });
  return PostComment;
};