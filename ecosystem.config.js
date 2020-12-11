module.exports = {
  apps : [{
    name: 'koa2-dbs',
    script: './src/app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_staging: {
      NODE_ENV: 'staging'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    staging : {
      user: 'root',
      host: '47.99.145.58',
      ref: 'origin/master',
      repo: 'git@github.com:yunaichun/koa2-dbs.git',
      path: '/var/www/koa2-dbs',
      'post-deploy' : 'cnpm ci && pm2 startOrReload ecosystem.config.js --env staging',
    },
    production : {
      user: 'root',
      host: '47.99.145.58',
      ref: 'origin/master',
      repo: 'git@github.com:yunaichun/koa2-dbs.git',
      path: '/var/www/koa2-dbs',
      'post-deploy' : 'cnpm ci && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
};
