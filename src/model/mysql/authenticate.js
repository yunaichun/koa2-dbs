const Sequelize = require('sequelize');
const config = require('../../config');

const { host, user, password, database } = config.mysql;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });
