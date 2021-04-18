'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.ForumPost, {
        foreignKey: 'userId',
        as: 'forumposts',
        onDelete: 'CASCADE'
      }),
      User.hasMany(models.PostComment, {
        foreignKey: 'userId',
        as: 'postcomments',
        onDelete: 'CASCADE'
      }),
      User.hasMany(models.Contribution, {
        foreignKey: 'userId',
        as: 'contributions',
        onDelete: 'CASCADE'
      });
    }
  };
  User.init({
    id: {type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};