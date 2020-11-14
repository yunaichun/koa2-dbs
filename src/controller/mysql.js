const Service = require('../service/mysql');
const Utils = require('../utils/output');

module.exports = {
  async insert(ctx, next) {
    const sql = 'insert into test(id, username) values(1, "xiaoming")';
    const result = await Service.selete(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async delete(ctx, next) {
    const sql = 'delete from test where id=1';
    const result = await Service.selete(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async select(ctx, next) {
    // == 获取动态路由参数: ctx.params
    // == 获取请求头参数: ctx.request.query
    // == 获取请求体参数: ctx.request.body
    const sql = 'SELECT * FROM test';
    const result = await Service.select(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async update(ctx, next) {
    const sql = 'update test set username="xiaoli" where id=2';
    const result = await Service.selete(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
};
