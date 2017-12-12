

var seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Players.csv')




exports.seed = seeder({
  table: 'players',
  file: file,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
