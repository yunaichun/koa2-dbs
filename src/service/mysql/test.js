const Model = require('../../model/mysql/test');

module.exports = {
  async insert(body) {
    const result = await Model.create(body);
    return result;
  },
  async delete(params) {
    const result = await Model.destroy(params);
    return result;
  },
  async update(body, params) {
    const result = await Model.update(body, params);
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
    const result = await Model.findAndCountAll({
      where: params,
      offset: (page - 1) * size,
      limit: size,
      order: [['id', 'DESC']],
    });
    return result;
  },
};
