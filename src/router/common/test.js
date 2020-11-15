const Router = require('koa-router');
const Controller = require('../../controller/common/test');

const router = new Router();

router.post('/upload', Controller.upload);
router.get('/setCookies', Controller.setCookies);
router.get('/getCookies', Controller.getCookies);
router.get('/setSessionToMySQL', Controller.setSessionToMySQL);
router.get('/getSessionFromMySQL', Controller.getSessionFromMySQL);
router.get('/setSessionToRedis', Controller.setSessionToRedis);
router.get('/getSessionFromRedis', Controller.getSessionFromRedis);
router.get('/cacheToRedis/:id', Controller.cacheToRedis);

module.exports = router;
