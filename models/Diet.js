const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Diet extends Model {}

Diet.init(
  // ID-NAME
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    diet_name: {
      type: DataTypes.STRING
    }
  },
 // CONFIGURATION OPTIONS
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diet',
  }
);

module.exports = Diet;