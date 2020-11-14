const Koa = require('koa');
const Router = require('koa-router');
const health = require('./health');
const mysql = require('./mysql');

const router = new Router();

router.use('/health', health.routes(), health.allowedMethods());
router.use('/mysql', mysql.routes(), mysql.allowedMethods());

module.exports = router;