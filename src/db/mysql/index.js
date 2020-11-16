const mysql = require('mysql');
const config = require('../../config');
const pool = mysql.createPool(config.mysql);

// == values 为 sql 里面的 ? 对应的数组字段
// == UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?
// == ['a', 'b', 'c', userId]
const execSqlQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('connect mysql error -->', err.stack);
        reject(err);
      } else {
        console.log('connect mysql success.');
        connection.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
          connection.release();
        });
      }
    });
  });
}

module.exports = execSqlQuery;
