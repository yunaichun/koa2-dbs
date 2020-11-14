module.exports = {
  info(errcode, errmsg, data = {}) {
    return { errcode, errmsg, data };
  },
  success(data = {}) {
    return { errcode: 0, errmsg: '', data };
  },
  error(e) {
    const errcode = '9999';
    const errmsg = typeof e === 'string' ? e : e.toString();
    return { errcode, errmsg };
  }
};
