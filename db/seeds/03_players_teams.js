

const seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Player_Teams.csv')



exports.seed = seeder({
  table: 'player_teams',
  file: file,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
