const Router = require('koa-router');
const Controller = require('../controller/mysql');

const router = new Router();

router.post('/insert', Controller.insert);
router.delete('/delete', Controller.delete);
router.get('/select', Controller.select);
router.put('/update', Controller.update);

module.exports = router;
