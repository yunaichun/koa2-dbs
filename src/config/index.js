const dev = require('./dev');
const stag = require('./stag');
const prod = require('./prod');

const envConfigs = {
  'development': dev,
  'staging': stag,
  'production': prod
};
const env = process.env.NODE_ENV;
const envConfig = envConfigs[env];

console.log(`current environment is ${env}`);

module.exports = envConfig;
