const Router = require('koa-router');

const router = new Router();

router.get('/', async(ctx, next) => {
  console.log(`current environment is ${process.env.NODE_ENV}`);
  ctx.body = `succss: ${process.env.NODE_ENV}`;
  await next();
});

module.exports = router;
