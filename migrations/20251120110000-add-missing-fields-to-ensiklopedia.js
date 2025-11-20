'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Menambahkan kolom category
    await queryInterface.addColumn('ensiklopedia', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Menambahkan kolom location
    await queryInterface.addColumn('ensiklopedia', 'location', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Menambahkan kolom status
    await queryInterface.addColumn('ensiklopedia', 'status', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Menambahkan kolom audio
    await queryInterface.addColumn('ensiklopedia', 'audio', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ensiklopedia', 'category');
    await queryInterface.removeColumn('ensiklopedia', 'location');
    await queryInterface.removeColumn('ensiklopedia', 'status');
    await queryInterface.removeColumn('ensiklopedia', 'audio');
  }
};
