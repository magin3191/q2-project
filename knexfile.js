// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stats_db',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }

};
