const Koa = require('koa');
const path = require('path');
const body = require('koa-body');
const static = require('koa-static');

const router = require('./router');
const log = require('./middleware/log');
const cors = require('./middleware/cors');
// == 以下2个中间件只能取一个
const sessionRedis = require('./middleware/session/redis');
const sessionMysql = require('./middleware/session/mysql');

const app = new Koa();

app.use(log);
app.use(cors);
app.use(sessionRedis);
app.use(sessionMysql);
app.use(body({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024
  }
}));
app.use(static(path.join(__dirname,  './static')));
app.use(router.routes());

app.listen(3000, () => {
  console.log('server started on port 3000');
});
