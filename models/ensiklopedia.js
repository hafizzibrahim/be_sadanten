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
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  audio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'ensiklopedia',
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Ensiklopedia;