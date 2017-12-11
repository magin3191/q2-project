const request = require('supertest')
const express = require('express')
//const test = require('mocha')
const app = require('../app')
const knex = require('knex')

  describe('homepage', function() {
    it('finds fake route', function(done) {
      request(app).get('/fake')
        .expect(200, /Home Q2-Project/, done)
    })
  })



// app.get('/stats_db', function(req, res) {
//   res.status(200).json({name: 'g'});
// });
// request(app)
// .get('/stats_db')
// .expect('Content-Type', /json/)
// .expect('Content-Length', '15')
// .expect(200)
// .end(function(err, res) {
//   if (err) throw err;
// });
