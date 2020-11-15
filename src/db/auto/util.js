const fs = require('fs');

let sqlContentMap = {};

// == 遍历 sql 目录下的所有文件
const walkFile = function(dir, mime){
  let files = fs.readdirSync(dir);
  let fileList = {};
  for(let [i, file] of files.entries()) {
    let arr = file.split('\.');
    let fileMime = (arr.length > 1) ? arr[arr.length - 1] : 'undefined';
    if(fileMime === mime) {
      fileList[file] =  dir + file;
    }
  }
  return fileList;
}

// == 生成 sql 目录下文件的 map 文件数据: { 文件名: 文件绝对路径 }
const getSqlMap = () => {
  let baseDir = __dirname;
  baseDir = baseDir.replace(/\\/g, '\/');
  let arr = baseDir.split('\/');
  arr = arr.splice(0, arr.length - 1);
  baseDir = arr.join('/') + '/sql/';

  let fileList = walkFile(baseDir, 'sql');
  return fileList;
}

// == 读取 sql 文件内容
const getSqlContent = (fileName,  filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  sqlContentMap[fileName] = content;
}

// == 封装所有sql文件脚本内容: { 文件名: 文件内容 }
exports.getSqlContentMap = () => {
  let sqlMap = getSqlMap();
  for(let fileName in sqlMap) {
    getSqlContent(fileName, sqlMap[fileName]);
  }
  console.log('最终遍历文件内容结果', sqlContentMap);
  return sqlContentMap;
}

// 打印脚本执行日志
exports.eventLog = (err , fileName, index) => {
  if(err) {
    console.log(`[ERROR] sql脚本文件: ${fileName} 文件第 ${index + 1} 条脚本 执行失败=====`);
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${fileName} 文件第 ${index + 1} 条脚本 执行成功=====`);
  }
}
