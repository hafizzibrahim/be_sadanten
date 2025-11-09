const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ensiklopedia = sequelize.define('Ensiklopedia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'ensiklopedia',
  timestamps: true, // tetap aktif
  createdAt: 'created_at',   // ⬅️ Sesuaikan nama kolom
  updatedAt: 'updated_at'    // ⬅️ Sesuaikan nama kolom
});

module.exports = Ensiklopedia;