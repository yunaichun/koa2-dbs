const mysql = require('mysql');
const config = require('../config');

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
