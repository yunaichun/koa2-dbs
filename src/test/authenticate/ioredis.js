const Redis = require('ioredis');
const config = require('../../config');

const redis = new Redis({
  ...config.redis,
  // keyPrefix: 'SESSION_ID:',
  ttl: 10 * 60,
  family: 4,
  db: 0
});

redis.set('testKey', 'testValue').then(() => {
  console.log('redis set testKey success')
  redis.get('testKey').then(res => 
    console.log('redis get testKey is:', res)
  );
}).catch(err => {
  console.error('redis set value error -->', err);
});
