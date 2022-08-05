const Model = require('../../model/mongo/pagecount');

module.exports = {
  async updateAndFind(params) {
    const result = await Model.findOne(params);
    console.log(123, params, result)
    if (result) {
      const { count } = result;
      await Model.update(params, { count: count + 1 }, { multi: true });
    } else {
      if (!params.url) throw Error('url is required');
      if (url.indexOf('answera.top') === -1) throw Error('only count answera.top site');
      const newModal = new Model({ ...params, count: 1 });
      await newModal.save();
    }

    const { count } = await Model.findOne(params);
    return count;
  }
};
