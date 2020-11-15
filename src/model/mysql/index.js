const Sequelize = require('sequelize');
const config = require('../../config');

const { host, user, password, database } = config.mysql;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

module.exports = {
  Sequelize,
  sequelize
};
