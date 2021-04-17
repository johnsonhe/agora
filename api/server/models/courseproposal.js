'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseProposal extends Model {
    static associate(models) {
    }
  };
  CourseProposal.init({
    support: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseProposal',
  });
  return CourseProposal;
};