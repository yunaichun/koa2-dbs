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
    console.log('connect mysql success.')
  })
  .catch(err => {
    console.error('connect mysql error -->', err)
  });
