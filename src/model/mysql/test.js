const Sequelize = require('sequelize');
const config = require('../../config');

const { host, user, password, database } = config.mysql;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

module.exports = sequelize.define('test', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: '主键id'
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'test',
    comment: '姓名'
  },
  brother: {
    type: Sequelize.STRING,
    comment: '兄弟'
  },
  age: {
    type: Sequelize.INTEGER,
    comment: '年龄'
  },
  sex: {
    type: Sequelize.STRING,
    comment: '性别'
  },
  birthday: {
    type: Sequelize.DATE,
    comment: '生日'
  },
}, {
  freezeTableName: true,
  timestamps: false
});
