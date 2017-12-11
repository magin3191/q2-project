const regression =require('regression')
const result = regression.linear([[24,22], [44,2], [33,7]]) //([[stat1(player1), stat2(player2)]]);
const gradient = result.equation[0]
const yIntercept = result.equation[1]

const playerarr = ['Populated with player names in order of ID']

// Player ID will correspond to array index +1, we need to generate an array of player names that I can pull from
// to generate a player object that looks like this {player_name: Alex Abrines, stat1: values, stat2: values, regression_cords: [25,44] }
// https://github.com/Tom-Alexander/regression-js
console.log(result)

//