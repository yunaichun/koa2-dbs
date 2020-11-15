const Koa = require('koa');
const path = require('path');
const body = require('koa-body');
const static = require('koa-static');

const router = require('./router');
const log = require('./middleware/log');
const cors = require('./middleware/cors');
const session = require('./utils/session');

const app = new Koa();

app.use(log);
app.use(cors);
app.use(session);
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
