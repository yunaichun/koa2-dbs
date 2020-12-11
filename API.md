# koa2-dbs 接口 API 文档

* [0 接口返回规范](#0-接口返回规范)
* [1 健康检查API](#1-健康检查API)
* [2 通用接口API](#2-通用接口API)
  * [2.1 上传](#21-上传)
  * [2.2 设置cookie](#22-设置cookie)
  * [2.3 获取cookie](#23-获取cookie)
  * [2.4 设置session到mysql](#24-设置session到mysql)
  * [2.5 从mysql获取session](#25-从mysql获取session)
  * [2.6 设置session到redis](#26-设置session到redis)
  * [2.7 从redis获取session](#27-从redis获取session)
  * [2.8 请求缓存到redis](#28-请求缓存到redis)
* [3 MySQL数据库操作API](#3-mysql数据库API)
  * [3.1 新增](#31-新增)
  * [3.2 删除](#32-删除)
  * [3.3 修改](#33-修改)
  * [3.4 单条查询](#34-单条查询)
  * [3.5 分页查询](#35-分页查询)
* [4 MongoDB数据库操作API](#4-其余API)
  * [4.1 新增](#41-新增)
  * [4.2 删除](#42-删除)
  * [4.3 修改](#43-修改)
  * [4.4 单条查询](#44-单条查询)
  * [4.5 分页查询](#45-分页查询)

## 0 接口返回规范

**正确返回**
```text
{
    "errcode": 0,
    "errmsg": "",
    "data": data
}
```

**异常返回**
```text
{
    "errcode": 9999,
    "errmsg": errmsg
}
```

## 1 健康检查API

**接口**

> GET /v1/health

**举例**
```text
http://www.answera.top/v1/health
```


## 2 通用接口API

### 2.1 上传

**接口**
> POST /v1/common/upload

**入参**
入参 | 类型 | 含义 | 默认 | 必须
---|---|---|---|---
file | file | 上传文件 | 无 | 是 

**举例**
```text
axios.post('http://www.answera.top/v1/common/upload', {
  file
}).then((res) => {
  console.log(res.data);
});
```


### 2.2 设置cookie

**接口**
> GET /v1/common/setCookies

**举例**
http://www.answera.top/v1/common/setCookies

### 2.3 获取cookie

**接口**
> GET /v1/common/getCookies

**举例**
http://www.answera.top/v1/common/getCookies

### 2.4 设置session到mysql

> GET /v1/common/setSessionToMySQL

**举例**
http://www.answera.top/v1/common/setSessionToMySQL

### 2.5 从mysql获取session

> GET /v1/common/getSessionFromMySQL

**举例**
http://www.answera.top/v1/common/getSessionFromMySQL

### 2.6 设置session到redis

> GET /v1/common/setSessionToRedis

**举例**
http://www.answera.top/v1/common/setSessionToRedis

### 2.7 从redis获取session

> GET /v1/common/getSessionFromRedis

**举例**
http://www.answera.top/v1/common/getSessionFromRedis

### 2.8 请求缓存到redis

> GET /v1/common/cacheToRedis/:id

**举例**
http://www.answera.top/v1/common/cacheToRedis/1234


## 3 MySQL数据库操作API

### 3.1 新增

**接口**
> POST /v1/mysql/insert

**入参**
入参 | 类型 | 含义 | 默认 | 必须
---|---|---|---|---
id | int | 自增id | 无 | 否 
username | string | 姓名 | 无 | 是 
brother | string | 兄弟 | 无 | 否 
age | int | 年龄 | 无 | 否 
sex | string | 性别 | 无 | 否 
birthday | date | 生日 | 无 | 否 

**返回值**

返回值 | 类型 | 含义
---|---|---
id | int | 自增id 
username | string | 姓名 |
brother | string | 兄弟 |
age | int | 年龄 
sex | string | 性别 
birthday | date | 生日 

**举例**
```text
axios.post('http://www.answera.top/v1/mysql/insert', {
  username: 'test',
  brother: 'aa',
  age: 2,
  sex: '1',
  birthday: '2018-12-01'
}).then((res) => {
  console.log(res.data);
});
```

### 3.2 删除

**接口**
> DELETE /v1/mysql/delete/:id

**举例**
```text
axios.delete('http://www.answera.top/v1/mysql/delete/14')
.then((res) => {
  console.log(res.data);
});
```

### 3.3 修改

**接口**
> PUT /v1/mysql/update/:id

**举例**
```text
axios.delete('http://www.answera.top/v1/mysql/update/14', {
  username: '22'
}).then((res) => {
  console.log(res.data);
});
```

### 3.4 单条查询

**接口**
> GET /v1/mysql/findOne?id=1

**举例**
http://www.answera.top/v1/mysql/findOne?id=1

### 3.5 分页查询

**接口**
> GET /v1/mysql/findAndCountAll?page=2&size=2

**举例**
example: http://www.answera.top/v1/mysql/findAndCountAll?page=2&size=2


## 4 MongoDB数据库操作API

### 4.1 新增

**接口**
> POST /v1/mongo/insert

**入参**
入参 | 类型 | 含义 | 默认 | 必须
---|---|---|---|---
id | int | 自增id | 无 | 否 
username | string | 姓名 | 无 | 是 
brother | string | 兄弟 | 无 | 否 
age | int | 年龄 | 无 | 否 
sex | string | 性别 | 无 | 否 
birthday | date | 生日 | 无 | 否 

**返回值**

返回值 | 类型 | 含义
---|---|---
id | int | 自增id 
username | string | 姓名 |
brother | string | 兄弟 |
age | int | 年龄 
sex | string | 性别 
birthday | date | 生日 

**举例**
```text
axios.post('http://www.answera.top/v1/mongo/insert', {
  username: 'test',
  brother: 'aa',
  age: 2,
  sex: '1',
  birthday: '2018-12-01'
}).then((res) => {
  console.log(res.data);
});
```

### 4.2 删除

**接口**
> DELETE /v1/mongo/delete/:id

**举例**
```text
axios.delete('http://www.answera.top/v1/mongo/delete/14')
.then((res) => {
  console.log(res.data);
});
```

### 4.3 修改

**接口**
> PUT /v1/mongo/update/:id

**举例**
```text
axios.delete('http://www.answera.top/v1/mongo/update/14', {
  username: '22'
}).then((res) => {
  console.log(res.data);
});
```

### 4.4 单条查询

**接口**
> GET /v1/mongo/findOne?id=1

**举例**
http://www.answera.top/v1/mongo/findOne?id=1

### 4.5 分页查询

**接口**
> GET /v1/mongo/findAndCountAll?page=2&size=2

**举例**
example: http://www.answera.top/v1/mongo/findAndCountAll?page=2&size=2
