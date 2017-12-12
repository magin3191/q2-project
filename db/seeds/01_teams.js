'use strict'


var seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Teams.csv')


exports.seed = seeder({
  table: 'teams',
  file: file,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
