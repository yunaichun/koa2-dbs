const Redis = require('ioredis');
const config = require('../config');

class RedisStore {
  constructor() {
    this.redis = new Redis({
      ...config.redis,
      // keyPrefix: 'SESSION_ID:',
      ttl: 10 * 60,
      family: 4,
      db: 0
    });
  }

  async get(key) {
    let data = await this.redis.get(`${key}`);
    return JSON.parse(data);
  }

   // == 过期时间设置 10 分钟
  async set(key, value, maxAge = 10 * 60) {
    try {
      // Use redis set EX to automatically drop expired sessions
      await this.redis.set(`${key}`, JSON.stringify(value), 'EX', maxAge);
    } catch (e) {}
    return value;
  }

  async destroy(key) {
    return await this.redis.del(`${key}`);
  }
}

module.exports = new RedisStore();
