'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        autoIncrement: true,
        type: Sequelize.TEXT
      },
      answer: {
        autoIncrement: true,
        type: Sequelize.TEXT
      },
      topicId: {
        autoIncrement: true,
        type: Sequelize.TEXT,
        references: {
          model: "Topics",
          key: "id"
        }
      },
      img: {
        autoIncrement: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};