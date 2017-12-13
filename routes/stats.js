const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const getRightConstraint = require('../js/db.js').getRightConstraint
const cutDownData = require('../js/db.js').cutDownData
// router.use(bodyParser.json())

router.post('/stats', function(req, res, next) {
  cutDownData({column: 'Pos', value:'PG', opp: false}, 'FG', 'MP').then(
    function(results) {
      res.send(results)
    }
  )
  .catch((err) => {
    console.log(err)
    res.send(err)
  })
})

module.exports = router
