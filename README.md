# 简介

Koa2 项目模版

- 操作 MySQL
- 操作 MongoDB
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
