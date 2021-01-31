// Imports Sequelize Constructor i.e. Library
const Sequelize = require('sequelize');

require('dotenv').config();

// Establish SSH To Ecommerce_db
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 666
  });
}

module.exports = sequelize;