'use strict';

const bcrypt = require('bcrypt')
const boom = require('boom')
const {
  camelizeKeys,
  decamelizeKeys
} = require('humps')
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const express = require('express')
const router = express.Router()
const JWT_KEY = process.env.JWT_KEY

const authorize = (req, res, next) => {
  jwt.verify(req.cookies.token, JWT_KEY, (err, payload) => {
    if (err) {
      return next(err)
    }
    req.claim = payload
    next()
  })
}

router.get('/favorites', authorize, (req, res, next) => {
  knex('favorites')
    .where('favorites.user_id', req.claim.userId)
    .orderBy('id', 'desc')
    .then((items) => {
      const favs = camelizeKeys(items)
      res.send(favs)
    })
})

router.post('/favorites', authorize, (req, res, next) => {
  let search = JSON.stringify(req.body)
  const newFav = {
    user_id: req.claim.userId,
    favorite: search
  }
  return knex('favorites').insert(newFav, '*')
    .then(fav => {
      res.send(camelizeKeys(fav[0]))
    })
    .catch((err) => {
      next(err)
    })
})

router.delete('/favorites', authorize, (req, res, next) => {
  let search = JSON.stringify(req.body)
  let favs
  return knex('favorites')
    .where('favorite', search).first()
    .then(fav => {
      favs = camelizeKeys(fav)
      return knex('favorites').del()
        .where('id', favs.id)
        .then(() => {
          delete favs.id
          res.send(favs)
        })

    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;
