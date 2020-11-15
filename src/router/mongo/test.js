const Router = require('koa-router');
const Controller = require('../../controller/mongo/test');

const router = new Router();

router.post('/insert', Controller.insert);
router.delete('/remove/:id', Controller.remove);
router.put('/update/:id', Controller.update);
router.get('/findOne', Controller.findOne);
router.get('/findAndCountAll', Controller.findAndCountAll);

module.exports = router;
