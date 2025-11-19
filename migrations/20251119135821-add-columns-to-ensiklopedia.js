'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('ensiklopedia', 'category', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('ensiklopedia', 'location', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('ensiklopedia', 'status', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('ensiklopedia', 'audio', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('ensiklopedia', 'category'),
      queryInterface.removeColumn('ensiklopedia', 'location'),
      queryInterface.removeColumn('ensiklopedia', 'status'),
      queryInterface.removeColumn('ensiklopedia', 'audio'),
    ]);
  }
};