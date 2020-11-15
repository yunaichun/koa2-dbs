const Router = require('koa-router');
const Controller = require('../../controller/mysql/test');

const router = new Router();

router.post('/insert', Controller.insert);
router.delete('/delete/:id', Controller.delete);
router.get('/findAndCountAll', Controller.findAndCountAll);
router.get('/findOne', Controller.findOne);
router.put('/update/:id', Controller.update);

router.post('/upload', Controller.upload);
router.get('/setCookies', Controller.setCookies);
router.get('/getCookies', Controller.getCookies);
router.get('/setSession', Controller.setSession);
router.get('/getSession', Controller.getSession);

module.exports = router;
