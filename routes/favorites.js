'use strict';

const bcrypt = require('bcrypt')
const { camelizeKeys, decamelizeKeys } = require('humps')
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const express = require('express')
const router = express.Router()
const JWT_KEY = process.env.JWT_KEY

const authorize = (req, res, next) => {
  jwt.verify(req.cookies.token, JWT_KEY, (err, payload) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'))
    }
    req.claim = payload
    next()
  })
}

router.get('/favorites', authorize, (req, res, next) => {
  knex('favorites')
    .innerJoin('books', 'books.id', 'favorites.book_id')
    .where('favorites.user_id', req.claim.userId)
    .then((items) => {
      const favs = camelizeKeys(items)
      res.send(favs)
    })
})

router.post('/favorites', authorize, (req, res, next) => {
  const id = req.body.bookId
  if(isNaN(id)){
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Book ID must be an integer');
  }
  knex('books')
    .where('id', id)
    .first()
    .then((book) => {
      if(!book){
        res.setHeader('content-type', 'text/plain')
        return res.status(404).send('Book not found');
      }
    const newFav = {user_id: req.claim.userId,book_id: req.body.bookId}
    return knex('favorites').insert(newFav, '*')
      .then(fav => {
        delete newFav.created_at
        delete newFav.updated_at
        res.send(camelizeKeys(fav[0]))
      })
    })
    .catch((err) => {
      next(err)
    })
})

router.delete('/favorites', authorize, (req, res, next) => {
  const id = req.body.bookId;
  if (isNaN(id)) {
    res.setHeader('content-type', 'text/plain')
    return res.status(400).send('Book ID must be an integer');
  }
  let favorite;

  knex('favorites')
    .where('id', id)
    .first()
    .then((book) => {
      // if (!book) {
      //   res.setHeader('content-type', 'text/plain')
      //   return res.status(404).send('Favorite not found');
      // }
    // const clause = { bookId: id, userId: req.claim.userId };
    favorite = camelizeKeys(book);
    return knex('favorites')
      delete newFav.created_at
      delete newFav.updated_at
      .del()
      .where('id', favorite.id);
    })
    .then(() => {
      if (!favorite) {
        res.setHeader('content-type', 'text/plain')
        return res.status(404).send('Favorite not found');
      }
      delete favorite.id;
      res.send(favorite);
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;
