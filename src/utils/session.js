// == 适用于 koa2 的 session 中间件，提供存储介质的读写接口 
const session = require('koa-session-minimal');
// == 为 koa-session-minimal 中间件提供 MySQL 数据库的 session 数据读写操作。将 sessionId 和对应的数据存到数据库
const MysqlSession = require('koa-mysql-session');

const config = require('../config');

// == 配置存储 session 信息的 mysql
let store = new MysqlSession(config.mysql);

// == 存放 sessionId 的 cookie 配置
let cookie = {
  maxAge: 10 * 60 * 1000,
  expires: new Date('2021-02-15'),
  path: '/',
  domain: '',
  httpOnly: true,
  overwrite: true,
  secure: '',
  sameSite: true,
  signed: '',
};

module.exports = session({
  key: 'SESSION_ID',
  store: store,
  cookie: cookie,
});
