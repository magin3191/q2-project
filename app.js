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
const stats = require('./routes/stats')
const favorites = require('./routes/favorites')

app.use(token)
app.use(users)
app.use(stats)
app.use(favorites)

app.listen(process.env.PORT || 3000, function(){
  console.log("listening on port", this.address().port, app.settings.env);
});

module.exports = app
