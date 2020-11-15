const Router = require('koa-router');
const Controller = require('../../controller/mysql/test');

const router = new Router();

router.post('/insert', Controller.insert);
router.delete('/delete/:id', Controller.delete);
router.put('/update/:id', Controller.update);
router.get('/findOne', Controller.findOne);
router.get('/findAndCountAll', Controller.findAndCountAll);

module.exports = router;
