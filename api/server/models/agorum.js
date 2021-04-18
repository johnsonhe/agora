'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agorum extends Model {
    static associate = (models) => {
      Agorum.hasOne(models.Course, {
        foreignKey: 'agorumId',
        as: 'courses',
        onDelete: 'CASCADE'
      }),
      Agorum.hasOne(models.Forum, {
        foreignKey: 'agorumId',
        as: 'forums',
        onDelete: 'CASCADE'
      });
    }
  };
  Agorum.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    members: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agorum',
  });

  return Agorum;
};