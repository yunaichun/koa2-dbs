const mysql = require('mysql');
const config = require('../../config');

// == values 为 sql 里面的 ? 对应的数组字段
// == UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?
// == ['a', 'b', 'c', userId]
module.exports = (sql, values) => {
  const connection = mysql.createConnection(config.mysql);
  return new Promise((resolve, reject) => {
    connection.connect(err => {
      if (err) {
        console.error('error connecting: ' + err.stack);
        reject(err);
      } else {
        console.log('success connect to mysql');
        connection.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
          connection.destroy();
        });
      }
    });
  });
}
