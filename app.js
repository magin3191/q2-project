const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const cookieParser = require('cookie-parser')
const knex = require('knex')(config)
module.exports = knex

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('public'))

const token = require('./routes/token')
const users = require('./routes/users')

app.use(token)
app.use(users)

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})

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

app
  .route('/favorites')
  .get(function(req, res, next) {})
  .post(function(req, res, next) {})
  .delete(function(req, res, next) {})
