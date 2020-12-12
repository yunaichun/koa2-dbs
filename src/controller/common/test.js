const path = require('path');
const fs = require('fs');
const Utils = require('../../utils/output');
const redisImpl = require('../../utils/redisImpl');

// == 获取动态路由参数: ctx.params
// == 获取请求头参数: ctx.request.query
// == 获取请求体参数: ctx.request.body
// == 获取文件参数: ctx.request.files
module.exports = {
  // == 上传
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    const { path: uploadPath, name } = file;
    const readStream = fs.createReadStream(uploadPath);
    const ext = name.split('.').pop();
    const newPath = path.join(__dirname,  `../../static/${Date.now()}.${ext}`);
    const writeStream = fs.createWriteStream(newPath);
    readStream.pipe(writeStream);
    ctx.body = Utils.success('file 上传成功');
    await next();
  },

  // == cache to redis
  async cacheToRedis(ctx, next) {
    const key = `user:${ctx.params.id}`;
    const user = await redisImpl.get(key);
    console.log('redis user value is:', user);
    if (!user) {
      const result = await { user: 'test', age: '1'};
      // == 查询到值将结果存储下来
      if (!result) {
        await redisImpl.set(key, 'null');
      } else {
        await redisImpl.set(key, result);
      }
      ctx.body = Utils.success(result);
      await next();
    } else {
      ctx.body = Utils.success(user);
      await next();
    }
  },

  // == cookie 操作
  async setCookies(ctx, next) {
    ctx.cookies.set(
      'uid', 
      '123456789',
      {
        domain: '',
        path: '/',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2021-02-15'),
        httpOnly: true,
        sameSite: true,
        overwrite: true,
      }
    );
    ctx.body = Utils.success('cookies 写入成功');
    await next();
  },
  async getCookies(ctx, next) {
    ctx.body = Utils.success(`cookies 读取成功: ${ctx.cookies.get('uid')}`);
    await next();
  },

  // == session 写入 MySQL
  async setSessionToMySQL(ctx, next) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    };
    ctx.body = Utils.success(ctx.session);
    await next();
  },
  async getSessionFromMySQL(ctx, next) {
    ctx.session.count = ctx.session.count + 1;
    // == session 被存储在 _mysql_session_store 表中
    // == ctx.session 等价于 select data from  where id=`SESSION_ID:${ctx.cookies.get('SESSION_ID')}`;
    ctx.body = Utils.success(ctx.session);
    await next();
  },

  // == session 写入 Redis
  async setSessionToRedis(ctx, next) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    };
    ctx.body = Utils.success(ctx.session);
    await next();
  },
  async getSessionFromRedis(ctx, next) {
    ctx.session.count = ctx.session.count + 1;
    // == session 被存储在 _mysql_session_store 表中
    // == ctx.session 等价于 select data from  where id=`SESSION_ID:${ctx.cookies.get('SESSION_ID')}`;
    ctx.body = Utils.success(ctx.session);
    await next();
  }
};
