const Koa = require('koa');
const Router = require('koa-router');
const health = require('./health');
const mysql = require('./mysql/test');
const mongo = require('./mongo/test');

const router = new Router();

router.use('/health', health.routes(), health.allowedMethods());
router.use('/mysql', mysql.routes(), mysql.allowedMethods());
router.use('/mongo', mongo.routes(), mongo.allowedMethods());

module.exports = router;