const Utils = require('../utils/output');

module.exports = async(ctx, next) => {
  try {
    console.log(`method and url is:`, ctx.request.method, ctx.request.url);
    await next();
  } catch (e) {
    const err = typeof e !== 'string' ? e : e.toString();
    ctx.body = Utils.error(err);
  }
}
