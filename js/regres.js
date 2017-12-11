const regression = require('regression')
const result = regression.linear([[24, 22], [44, 2], [33, 7]]) //([[stat1(player1), stat2(player1)]]); knex('players').where()
const gradient = result.equation[0]
const yIntercept = result.equation[1]

// result looks like this: { points: [ [ 24, 19.81 ], [ 44, 0.21 ], [ 33, 10.99 ] ],
// predict: [Function: predict],
// equation: [ -0.98, 43.33 ],
// r2: 0.89,
// string: 'y = -0.98x + 43.33' }

module.exports = { result }
