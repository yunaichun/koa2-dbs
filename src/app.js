const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const router = require('./router');
const log = require('./middleware/log');

const app = new Koa();

const staticPath = './static';
app.use(static(path.join( __dirname,  staticPath)));
app.use(log);
app.use(router.routes());

app.listen(3000, () => {
  console.log('server started on port 3000');
});
