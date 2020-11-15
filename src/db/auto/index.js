
const MySQLUtil = require('../mysql/index');
const { getSqlContentMap, eventLog } = require('./util');

// == 获取所有 sql 脚本内容
let sqlContentMap = getSqlContentMap();

// == 执行所有 sql 文件
const execAllSqlFiles = async () => {
  console.log('开始结束=====');
  for(let file in sqlContentMap) {
    let sqlShell = sqlContentMap[file];
    let sqlShellList = sqlShell.split(';');
    for (let [i, shell] of sqlShellList.entries()) {
      if (shell.trim()) {
        let result = await MySQLUtil(shell);
        if (result.serverStatus * 1 === 2) {
          eventLog(null, file, i);
        } else {
          eventLog(true, file, i);
        }
      }
    }
  }
  console.log('执行结束=====');
}

execAllSqlFiles();
