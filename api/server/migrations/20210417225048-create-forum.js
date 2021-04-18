'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Forums', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      posts: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      agorumId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Agorums',
          key: 'id',
          as: 'agorumId',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Forums');
  }
};