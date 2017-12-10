var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)
module.exports = knex

app.use(express.static('public'))
app.listen(port, function() {
  console.log(`listening on port ${port}`)
})
module.exports = app
