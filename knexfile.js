// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stats_db',

    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    }
  }

};
