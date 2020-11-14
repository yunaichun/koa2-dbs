const MySQLUtil = require('../db/mysql');

module.exports = {
    async insert(sql, params) {
        const result = await MySQLUtil(sql, params);
        return result;
    },
    async delete(sql, params) {
        const result = await MySQLUtil(sql, params);
        return result;
    },
    // == values 为 sql 里面的 ? 对应的数组字段
    // == UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?
    // == ['a', 'b', 'c', userId]
    async select(sql, params) {
        const result = await MySQLUtil(sql, params);
        return result;
    },
    async update(sql, params) {
        const result = await MySQLUtil(sql, params);
        return result;
    },
};