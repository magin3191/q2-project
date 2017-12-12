const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cutDownData =require('../js/db.js').cutDownData

app.use(bodyParser.json())

router.post('/stats',function(req,res){
  cutDownData(constraint, domStat1, domStat2)
  .then(function(results){
    res.send(results)
  })
})


module.exports={router}
