'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ForumPost extends Model {
    static associate(models) {
      ForumPost.belongsTo(models.Forum, {
        foreignKey: 'forumId',
        onDelete: 'CASCADE',
      }),
      ForumPost.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  };
  ForumPost.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    support: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ForumPost',
  });
  return ForumPost;
};