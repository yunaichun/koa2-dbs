const session = require('koa-session2');
const Redis = require('ioredis');
const config = require('../config');

class RedisStore extends session.Store {
  constructor() {
    super();
    this.redis = new Redis({
      ...config.redis,
      // keyPrefix: 'SESSION_ID:',
      ttl: 10 * 60,
      family: 4,
      db: 0
    });
  }

  async get(sid) {
    let data = await this.redis.get(`SESSION_ID:${sid}`);
    return JSON.parse(data);
  }

   // == 过期时间设置 10 分钟
  async set(session,  { sid = this.getID(24), maxAge = 10 * 60 } = {}) {
    try {
      // Use redis set EX to automatically drop expired sessions
      await this.redis.set(`SESSION_ID:${sid}`, JSON.stringify(session), 'EX', maxAge);
    } catch (e) {}
    return sid;
  }

  async destroy(sid) {
    return await this.redis.del(`SESSION_ID:${sid}`);
  }
}

module.exports = session({
  key: 'SESSION_ID',
  store: new RedisStore(),
});
