// this is the data massaging file
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

const domStat1 = null // these live in the dom
const domStat2 = null // these live in the dom
const domConstraint = null // these live in the dom

function getRightConstraint(domc) {
  let column = ''
  let value = ''
  let opp = false
  if (
    domc === 'PG' ||
    domc === 'SG' ||
    domc === 'SF' ||
    domc === 'PF' ||
    domc === 'C'
  ) {
    column = 'Pos'
    value = domc
  }
  if (domc === "6'") {
    column = 'Ht'
    value = 71
    opp = '>'
  }
  if (domc === "6' - 6'6\"") {
    column = 'Ht'
    value = 72
    opp = 78
  }
  if (domc === `> 6'6"`) {
    column = 'Ht'
    value = 79
    opp = 87
  }
  if (domc === '< 200') {
    column = 'Wt'
    value = 200
    opp = '<'
  }
  if(domc === '200 - 230') {
    column = 'Wt'
    value = 200
    opp = 230
  }
  if(domc === '> 230') {
    column = 'Wt'
    value = 230
    opp === '>'
  }
  return { column: column, value: value, opp: opp }
}

const stat1 = null // this will be handed from dom, these are both coming from the player-teams table knex('player_teams').select(domStat1)
const stat2 = null // this will be handed from dom, these are both coming from the player-teams table knex('player_teams').select(domStat2)
const constraint = getRightConstraint(domConstraint) //this comes from players table

// the order here is we cut down the player table based on the contrait, then we will grab the entries in player-teams
// linked by name, then we grab the two stats we want. After that we generate an object that looks like [{player_name: Alex Abrines, stat1: 12, stat2: 2}]

function cutDownData(constraint, stat1, stat2) {
  if (constraint.opp === false) {
    knex('Players').where(contraint.column, contraint.value)
  }
  if (constraint.opp === 78) {
    knex('Players').whereBetween(contraint.column,[contraint.value,constraint.opp])
  }
  if (constraint.opp === 87) {
    knex('Players').whereBetween(constraint.column,[contraint.value,constraint.opp])
  }
  else {
    knex('Players').where(constraint.column, constraint.opp, constraint.value)
  }
}

// Player ID will correspond to array index +1, we need to generate an array of player names that I can pull from
// to generate a player object that looks like this {player_name: Alex Abrines, stat1: values, stat2: values, regression_cords: [25,44] }
// https://github.com/Tom-Alexander/regression-js

// we will begin by handing the

// if conditionals will handle the constrains past this point
