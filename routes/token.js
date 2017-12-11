'use strict'

const express = require('express')
const bcrypt = require('bcrypt')
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY
const router = express.Router()

router.get('/token', (req, res) => {
  jwt.verify(req.cookies.token, JWT_KEY, (err, payload) => {
    if (err) {
      res.send(false)
    } else {
      res.send(true)
    }
  })
})

router.post('/token', (req, res, next) => {
  const { email, password } = req.body
  if(!email) {
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Email must not be blank')
  }
  if(!password) {
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Password must not be blank')
  }

  knex('users')
    .where('email', req.body.email)
    .first()
    .then((user) => {
      if (!user) {
        res.setHeader('Content-Type', 'text/plain')
        res.status(400)
        res.send('Bad email or password')
      } else {
        bcrypt.compare(req.body.password, user.hashed_password, (err, match) => {
          if (match) {
            const token = jwt.sign({ userId: user.id }, JWT_KEY)

            let newObj = {
              id: user.id,
              email: user.email,
              firstName: user.first_name,
              lastName: user.last_name
            }

            res.cookie('token', token, { httpOnly: true })
            res.status(200)
            res.setHeader('Content-Type', 'application/json')
            res.send(newObj)
          } else {
            res.setHeader('Content-Type', 'text/plain')
            res.status(400)
            res.send('Bad email or password')
          }
        })
      }
    })
})

router.delete('/token', (req, res) => {
  res.clearCookie('token')
  res.end()
})

module.exports = router
