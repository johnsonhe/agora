'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ForumPosts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      support: {
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
      forumId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Forums',
          key: 'id',
          as: 'forumId',
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ForumPosts');
  }
};