module.exports = async(ctx, next) => {
    // == 当有自定义请求头字段的时候，浏览器会发送一次预检 OPTIONS 请求
    // == 设置Credentials，就不能设置*。【携带session】
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
    ctx.set('Content-Type', 'application/json;charset=utf-8');
    // ctx.set('Access-Control-Allow-Credentials', true);

    if (ctx.method == 'OPTIONS') {
        ctx.body = '';
        ctx.status = 204;
    } else {
        await next();
    }
};