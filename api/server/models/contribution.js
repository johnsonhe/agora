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
      }),
      Contribution.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      })
    }
  };
  Contribution.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contribution',
  });
  return Contribution;
};