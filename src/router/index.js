const Koa = require('koa');
const Router = require('koa-router');
const health = require('./health');

const router = new Router();

router.use('/health', health.routes(), health.allowedMethods());

module.exports = router;