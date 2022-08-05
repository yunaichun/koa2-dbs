const Service = require('../../service/mongo/pagecount');
const Utils = require('../../utils/output');

// == 获取动态路由参数: ctx.params
// == 获取请求头参数: ctx.request.query
// == 获取请求体参数: ctx.request.body
// == 获取文件参数: ctx.request.files
module.exports = {
  async updateAndFind(ctx, next) {
    const params = ctx.request.query;
    const result = await Service.updateAndFind(params);
    ctx.body = Utils.success(result);
    await next();
  }
};
