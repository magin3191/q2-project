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

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})

app.get('/stats/players', function(req, res, next) {
  knex
    .select('players')
    .from('stats_db')
    .then(function(table) {
      res.send(table)
    })
})

app.get('/stats/teams', function(req, res, next) {
  knex
    .select('teams')
    .from('stats_db')
    .where('id', req.params.id)
    .then(function(table) {
      res.send(table)
    })
})

app.get('/')

app.get('/users/:id', function(req, res, next) {
  knex('users').where('id',req.params.id)
  .then(function(result){
    res.send(result)
  })
})

app.post('/users/', function(req, res, next) {})

app
  .route('/favorites')
  .get(function(req, res, next) {})
  .post(function(req, res, next) {})
  .delete(function(req, res, next) {})

app.get('/token', function(req, res, next) {})
