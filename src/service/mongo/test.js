const Model = require('../../model/mongo/test');

module.exports = {
  async insert(body) {
    const newModal = new Model(body);
    const result = await newModal.save();
    return result;
  },
  async remove(params) {
    const result = await Model.remove(params);
    return result;
  },
  async update(body, params) {
    const result = await Model.update(params, body, { multi: true });
    return result;
  },
  async findOne(params) {
    const result = await Model.findOne(params);
    return result;
  },
  async findAndCountAll(params) {
    let { page, size } = params;
    page = Number(page);
    size = Number(size);
    delete params.page;
    delete params.size;
    const rows = await Model.find(params)
      .skip((page - 1) * size)
      .limit(size)
      .sort({'_id': -1});
    const count = await Model.count({})
    return { rows, count };
  },
};
