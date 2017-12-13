const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const getRightConstraint = require('../js/db.js').getRightConstraint
const cutDownData = require('../js/db.js').cutDownData

router.post('/stats', function(req, res, next){
  console.log(req.body)
  cutDownData(getRightConstraint(domConstraint), domStat1, domStat2)
  .then(function(results){
    res.send(results)
  })
})

module.exports = router
