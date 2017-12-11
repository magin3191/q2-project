// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/stats_db',

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
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL


    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }

};
