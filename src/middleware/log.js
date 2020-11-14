module.exports = async(ctx, next) => {
  try {
    console.log(ctx.request);
    await next();
  } catch (e) {
    if (typeof e !== 'string') {
      console.error(e.toString());
    } else {
      console.error(e);
    }
  }
}
