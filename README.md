# 简介

Koa2 项目模版

- MySQL 数据存储
- MongoDB 数据存储
- Redis 数据缓存
- pm2 自动发布到阿里 ECS


## 说明文档

```sh
# 本地开发
$ npm run dev

# 数据库脚本
$ npm run auto:sql

# 检测 MySQL 连接是否成功
$ npm run test:sequelize

# 检测 MongoDB 连接是否成功
$ npm run test:mongoose

# 检测 Redis 连接是否成功
$ npm run test:ioredis

# pm2 测试环境发布
$ npm run deploy:stag

# pm2 正式环境发布
$ npm run deploy:prod
```


### 项目结构

```bash
# 每个目录下分为 mongo、mysql 两类
|-- src            
    |-- app.js                入口文件         
    |-- config                配置文件
    |-- model                 实体层  
    |-- service               接口层
    |-- controller            逻辑层
    |-- router                路由层
    |-- db                    数据库脚本等
    |-- static                静态服务目录
    |-- middleware            中间件
    |-- utils                 通用方法
    |-- test                  测试文件等
```
