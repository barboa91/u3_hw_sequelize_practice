'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hero_id: {
        type: Sequelize.INTEGER
      },
      item1_id: {
        type: Sequelize.INTEGER
      },
      item2_id: {
        type: Sequelize.INTEGER
      },
      item3_id: {
        type: Sequelize.INTEGER
      },
      item4_id: {
        type: Sequelize.INTEGER
      },
      item5_id: {
        type: Sequelize.INTEGER
      },
      item6_id: {
        type: Sequelize.INTEGER
      },
      gold: {
        type: Sequelize.INTEGER
      },
      health: {
        type: Sequelize.INTEGER
      },
      mana: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players');
  }
};