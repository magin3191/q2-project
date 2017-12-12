const express = require('express')
const router = express.Router()
const cutDownData =require('../js/db.js').cutDownData

router.post('/stats',function(req,res){
  cutDownData(constraint, domStat1, domStat2).then(function(results){
    res.send(results)
  })
})


module.exports={router}
