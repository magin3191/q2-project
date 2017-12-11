//
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('players').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('players').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

// import seeder from 'knex-csv-seeder';
var seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Players.csv')

// COPY Player FROM '../../DB-CSVs/Players.csv' WITH (FORMAT csv)



exports.seed = seeder({
  table: 'players',
  file: file,
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
