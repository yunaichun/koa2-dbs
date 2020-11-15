# 简介

Koa2 项目模版

- MySQL 数据存储
- MongoDB 数据存储
- Redis 数据缓存
- pm2 自动发布到阿里 ECS


## 说明文档

```sh
# 本地开发
$ run run dev

# 数据库脚本
$ run run auto:sql

# 检测 MySQL 连接成功
$ run run test:sequelize

# 检测 MongoDB 连接成功
$ run run test:mongoose

# pm2 测试环境发布
$ run run deploy:stag

# pm2 正式环境发布
$ run run deploy:prod
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
    |-- middleware            自定义中间件
    |-- utils                 全局通用方法
    |-- test                  备用文档等
```
