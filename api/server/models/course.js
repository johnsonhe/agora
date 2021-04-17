'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate = (models) => {
    }
  };
  Course.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};