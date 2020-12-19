## 简介

基于 Koa2 搭建的后台项目模版, 包含:

- MySQL 数据增删查改
- MongoDB 数据增删查改
- Redis 数据存储
- 上传、cookie、session
- pm2 自动发布到阿里 ECS

## 项目启动

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

## 目录结构

```
└── src            
    ├── app.js                入口文件         
    ├── config                配置文件
        ├── base.js           三个环境相同的配置（隐私配置）
        ├── dev.js            开发环境配置         
        ├── stag.js           stag环境配置
        ├── prod.js           正式环境配置
        └── index.js          配置入口
    ├── model                 实体层
        ├── mongo             mongoose ORM
        └── mysql             sequelize ORM
    ├── service               接口层
        ├── mongo             mongoose 增删查改接口
        └── mysql             sequelize 增删查改接口
    ├── router                路由层
        ├── common            Koa2 基本操作接口: 上传、cookie、session
        ├── mongo             MongoDB 增删查改路由
        ├── mysql             MySQL 增删查改路由
        ├── health.js         健康检查路由
        └── index.js          入口路由
    ├── controller            控制层
        ├── common            Koa2 基本操作逻辑: 上传、cookie、session
        ├── mongo             MongoDB 增删查改逻辑
        └── mysql             MySQL 增删查改逻辑
    ├── middleware            中间件
        ├── session           Koa2 中 session 存储到 MySQL 和 Redis 中间件
        ├── cors.js           跨域中间间
        └── log.js            日志中间件
    ├── utils                 通用方法
        ├── redisImpl.js      redis 数据缓存封装
        └── output.js         接口数据统一输出封装
    ├── test                  测试文件等
        ├── authenticate      验证 MongoDB、MySQL、Redis 是否可以正常连接
        └── postman           接口 postman 测试导出文件
    ├── db                    数据库文件和自动执行脚本等
    └── static                静态服务目录
```

## API 文档

- [接口文档](./API.md)

## 学习笔记

- Redis 存储 session: https://www.answera.top/backend/redis/session
- Redis 缓存请求: https://www.answera.top/backend/redis/impl
- MySQL 文档对象模型 Sequelize 在 koa2 中的使用: https://www.answera.top/backend/mysql/orm
- MongoDB 文档对象模型 Mongoose 在 koa2 中的使用: https://www.answera.top/backend/mongo/orm
- express 中间件: https://www.answera.top/backend/node/express
- koa2 中间件: https://www.answera.top/backend/node/koa
- koa2 服务端渲染: https://www.answera.top/backend/node/ssr
