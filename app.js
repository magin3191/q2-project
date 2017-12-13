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

app.use(token)
app.use(users)
app.use(stats)

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
  }
});

module.exports = app
