const Model = require('../../model/mongo/pagecount');

module.exports = {
  async updateAndFind(params) {
    const result = await Model.findOne(params);
    if (result) {
      const { count } = result;
      await Model.update(params, { count: count + 1 }, { multi: true });
    } else {
      const { url } = params;
      if (!url) throw Error('url is required');
      if (url.indexOf('answera.top') === -1) throw Error('your website is not allowed to count');
      const newModal = new Model({ ...params, count: 1 });
      await newModal.save();
    }

    const { count } = await Model.findOne(params);
    return count;
  }
};
