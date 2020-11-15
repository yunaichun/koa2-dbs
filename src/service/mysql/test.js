const Model = require('../../model/mysql/test');

module.exports = {
  async findAndCountAll(params) {
    const result = await Model.findAndCountAll(params);
    return result;
  },
  async findOne(params) {
    const result = await Model.findOne(params);
    return result;
  },
  async create(body) {
    const result = await Model.create(body);
    return result;
  },
  async update(body, params) {
    const result = await Model.update(body, params);
    return result;
  },
  async destroy(params) {
    const result = await Model.destroy(params);
    return result;
  },
};
