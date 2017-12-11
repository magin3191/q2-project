<<<<<<< HEAD
var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

app.use(express.static('public'))
=======
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
module.exports = knex

app.use(bodyParser.json())

app.use(express.static('public'))

>>>>>>> 816a81009ec74347babb1d97d14e94ca25bd3fc8
app.listen(port, function() {
  console.log(`listening on port ${port}`)
})

<<<<<<< HEAD
module.exports = {
  knex,
  app,
  environment,
  port
}
=======
app.get('/stats/players', function(req, res, next) {
  knex
    .select('stats_db')
    .from('players')
    .where('id', req.params.id)
    .then(function(table) {
      res.send(table)
    })
})

app.get('/stats/teams', function(req, res, next) {
  knex
    // .select('stats_db')
    // .from('teams')
    // .where('id', req.params.id)
    // .then(function(table) {
    //   res.send(table)
    })
})

app.get('/users/:id', function(req, res, next) {
  // knex('users').where('id',req.params.id)
  // .then(function(result){
  //   res.send(result)
  })
})

app.post('/users/', function(req, res, next) {})

app
  .route('/favorites')
  .get(function(req, res, next) {})
  .post(function(req, res, next) {})
  .delete(function(req, res, next) {})

app.get('/token', function(req, res, next) {})
>>>>>>> 816a81009ec74347babb1d97d14e94ca25bd3fc8
