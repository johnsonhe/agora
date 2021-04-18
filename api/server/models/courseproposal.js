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
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: DataTypes.STRING,
    support: DataTypes.INTEGER,
    description: DataTypes.STRING,
    contributors: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseProposal',
  });
  return CourseProposal;
};