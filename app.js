var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)
module.exports = knex



app.use(express.static('public'))

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})

app.get('/stats/players', function(req,res,next){

  })

})

app.get('/stats/teams',function(req,res,next){

})



app.get('/users/:id',function(req,res,next){

})


app.post('/users/',function(req,res,next){

})




app.route('/favorites')
  .get(function(req,res,next){

  })
  .post(function(req,res,next){

  })
  .delete(function(req,res,next){

  })

app.get('/token',function(req,res,next){

})
