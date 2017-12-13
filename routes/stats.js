const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const getRightConstraint = require('../js/db.js').getRightConstraint
const cutDownData = require('../js/db.js').cutDownData
router.use(bodyParser.json())

router.post('/stats', function(req, res, next) {
  cutDownData(getRightConstraint(req.body.constraint), req.body.stat1, req.body.stat2).then(
    function(results) {
      localStorage.setItem('results', JSON.stringify(results))
      res.send(results)
    }
  )
})

module.exports = router
