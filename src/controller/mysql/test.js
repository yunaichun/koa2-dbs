const path = require('path');
const fs = require('fs');
const Service = require('../../service/mysql/test');
const Utils = require('../../utils/output');

// == 获取动态路由参数: ctx.params
// == 获取请求头参数: ctx.request.query
// == 获取请求体参数: ctx.request.body
// == 获取文件参数: ctx.request.files
module.exports = {
  async insert(ctx, next) {
    const body = ctx.request.body;
    const result = await Service.insert(body);
    ctx.body = Utils.success({
      data: result
    });
    await next();
  },
  async delete(ctx, next) {
    const params = { where: { id: ctx.params.id } };
    const result = await Service.delete(params);
    ctx.body = Utils.success({
      data: result
    });
    await next();
  },
  async update(ctx, next) {
    const body = ctx.request.body;
    const params = { where: { id: ctx.params.id } };
    const result = await Service.update(body, params);
    ctx.body = Utils.success({
      data: result
    });
    await next();
  },
  async findOne(ctx, next) {
    const params = { where: ctx.request.query };
    const result = await Service.findOne(params);
    ctx.body = Utils.success({
      data: result
    });
    await next();
  },
  async findAndCountAll(ctx, next) {
    const params = ctx.request.query;
    const { page, size } = params;
    const { count, rows } = await Service.findAndCountAll(params);
    ctx.body = Utils.success({
      data: rows,
      page,
      size,
      count,
    });
    await next();
  },
};
