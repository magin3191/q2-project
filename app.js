if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const cookieParser = require('cookie-parser')
const knex = require('knex')(config)

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

app.get('/stats', function(req, res, next) {
  knex('stats_db')
    .limit(10)
    .then(function(table) {
      res.send(table)
    })
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

module.exports = app
