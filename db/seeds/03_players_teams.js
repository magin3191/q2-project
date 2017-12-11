//
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('player_teams').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('player_teams').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

const seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Player_Teams.csv')

// COPY Player FROM '../../DB-CSVs/Players.csv' WITH (FORMAT csv)



exports.seed = seeder({
  table: 'players_teams',
  file: file,
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
