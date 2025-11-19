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
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Ensiklopedia;