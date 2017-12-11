'use strict'

const express = require('express')
const knex = require('../knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY
const router = express.Router()
router.get('/fake', (req, res, next) => {
  return res.status(200).send('Home Q2-Project')
})


router.post('/users', (req, res, next) => {
  const { email, password } = req.body
  if(!email) {
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Email must not be blank')
  }
  if(!password) {
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Password must be at least 8 characters long')
  }

  knex('users')
    .where('email', email)
    .first()
    .then((user) => {
      if (user) {
        res.setHeader('content-type', 'text/plain')
        return res.status(400).send('Email already exists')
      }else {
        const thePassword = req.body.password
        bcrypt.hash(thePassword, 12)

      .then((hashPass) => {
        return knex('users')
          .insert({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            hashed_password: hashPass
          }, '*')
          .then((user) => {
            const newObj = {
              id: user[0].id,
              firstName: user[0].first_name,
              lastName: user[0].last_name,
              email: user[0].email
            }
            const token = jwt.sign({ userId: user[0].id }, JWT_KEY)
            res.cookie('token', token, { httpOnly: true })
            res.status(200)
            res.setHeader('Content-Type', 'application/json')
            res.send(newObj)
          })
          .catch((err) => {
            next(err)
          })
        })
      }
    })
})

module.exports = router
