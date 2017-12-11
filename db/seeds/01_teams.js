'use strict'

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('teams').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('teams').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

var seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('DB-CSVs/Teams.csv')

// COPY Player FROM '../../DB-CSVs/Players.csv' WITH (FORMAT csv)



exports.seed = seeder({
  table: 'teams',
  file: file,
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
