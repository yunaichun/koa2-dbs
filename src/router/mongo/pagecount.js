const Router = require('koa-router');
const Controller = require('../../controller/mongo/pagecount');

const router = new Router();

router.get('/', Controller.updateAndFind);

module.exports = router;
