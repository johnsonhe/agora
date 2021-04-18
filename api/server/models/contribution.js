'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    static associate(models) {
      Contribution.belongsTo(models.Course, {
        foreignKey: 'courseId',
        onDelete: 'CASCADE',
      })
    }
  };
  Contribution.init({
    user: DataTypes.UUID,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contribution',
  });
  return Contribution;
};