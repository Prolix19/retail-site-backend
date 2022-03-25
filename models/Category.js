// Import required items from Sequelize
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create our Category model
class Category extends Model {}

Category.init(
  {
    // Define columns according to requirements
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
