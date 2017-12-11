// this is the data massaging file
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

const domStat1 = null // these live in the dom
const domStat2 = null // these live in the dom

const stat1 = null //this will be handed from dom, these are both coming from the player-teams table knex('player_teams').select(domStat1)
const stat2 = null //this will be handed from dom, these are both coming from the player-teams table knex('player_teams').select(domStat2)

const playerarr = ['Populated with player names in order of ID']

// Player ID will correspond to array index +1, we need to generate an array of player names that I can pull from
// to generate a player object that looks like this {player_name: Alex Abrines, stat1: values, stat2: values, regression_cords: [25,44] }
// https://github.com/Tom-Alexander/regression-js

//we will begin by handing the

//if conditionals will handle the constrains past this point
