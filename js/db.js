// this is the data massaging file
const knex = require('../knex')
const runRegression = require('./regres.js').runRegression

function getRightConstraint(domc) {
  let column = ''
  let value = ''
  let opp = false
  if (domc === 'All') {
    column = 'All'
    value = 'All'
    opp = 'All'
  }
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

  if (domc === '&lt; 6\'2"') {
    column = 'Ht'
    value = 73
    opp = '<'
  }
  if (domc === '6\'2" - 6\'6"') {
    column = 'Ht'
    value = 73
    opp = 78
  }
  if (domc === '&gt; 6\'6"') {

    column = 'Ht'
    value = 79
    opp = '>'
  }
  if (domc === '&lt; 200') {
    column = 'Wt'
    value = 200
    opp = '<'
  }
  if (domc === '200 - 230') {
    column = 'Wt'
    value = 200
    opp = 230
  }
  if (domc === '&gt; 230') {
    column = 'Wt'
    value = 230
    opp = '>'
  }
  if (domc === '&lt; 23') {
    column = 'Age'
    value = 23
    opp = '<'
  }
  if (domc === '23 - 28') {
    column = 'Age'
    value = 23
    opp = 28
  }
  if (domc === '&gt; 28') {
    column = 'Age'
    value = 28
    opp = '>'
  }
  return { column: column, value: value, opp: opp }
}

// // this will be handed from dom, these are both coming from the player-teams table knex('player_teams').select(domStat2)
// const constraint = getRightConstraint(domConstraint) //this comes from players table

// the order here is we cut down the player table based on the constraint, then we will grab the entries in player-teams
// linked by name, then we grab the two stats we want. After that we generate an object that looks like [{player_name: Alex Abrines, stat1: 12, stat2: 2}]

function cutDownData(constraint, domStat1, domStat2) {
  if (constraint.opp === false) {
    return knex('players')
      .select('player_teams.Player', domStat1, domStat2)
      .where(constraint.column, constraint.value)
      .join('player_teams', 'player_teams.Player', 'players.Player')
      .then(result => {
        return runRegression(result, domStat1, domStat2)
      })
  }
  if (constraint.opp === 78 || constraint.opp === 230 || constraint.opp === 28) {
    return knex('players')
      .select('player_teams.Player', domStat1, domStat2)
      .whereBetween(constraint.column, [constraint.value, constraint.opp])
      .join('player_teams', 'player_teams.Player', 'players.Player')
      .then(result => {
        return runRegression(result, domStat1, domStat2)
      })
  }
  if (constraint.column === 'All' || constraint.opp === 'All' || constraint.opp === 'All') {
    return knex('players')
      .select('player_teams.Player', domStat1, domStat2)
      .join('player_teams', 'player_teams.Player', 'players.Player')
      .then(result => {
        return runRegression(result, domStat1, domStat2)
      })
  }
  else {
    return knex('players')
      .select('player_teams.Player', domStat1, domStat2)
      .where(constraint.column, constraint.opp, constraint.value)
      .join('player_teams', 'player_teams.Player', 'players.Player')
      .then(result => {
        return runRegression(result, domStat1, domStat2)
      })
  }
}
module.exports = { cutDownData, getRightConstraint }
// Player ID will correspond to array index +1, we need to generate an array of player names that I can pull from
// to generate a player object that looks like this {player_name: Alex Abrines, stat1: values, stat2: values, regression_cords: [25,44] }
// https://github.com/Tom-Alexander/regression-js

// we will begin by handing the

// if conditionals will handle the constrains past this point
