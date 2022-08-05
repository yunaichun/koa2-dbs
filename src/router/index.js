const Koa = require('koa');
const Router = require('koa-router');
const health = require('./health');
const mysql = require('./mysql/test');
const mongo = require('./mongo/test');
const pagecount = require('./mongo/pagecount');
const common = require('./common/test');

const router = new Router();

router.use('/v1/health', health.routes(), health.allowedMethods());
router.use('/v1/mysql', mysql.routes(), mysql.allowedMethods());
router.use('/v1/mongo', mongo.routes(), mongo.allowedMethods());
router.use('/v1/pagecount', pagecount.routes(), pagecount.allowedMethods());
router.use('/v1/common', common.routes(), common.allowedMethods());

module.exports = router;