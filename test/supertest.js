const request = require('supertest')
const express = require('express')
const app = require('../app')
const knex = require('knex')

  describe('homepage', function() {
    it('finds fake route', function(done) {
      request(app).get('/fake')
        .expect(200, /Home Q2-Project/, done)
    })
  })
  describe('users', function() {
    it('checks users route', function(done) {
      request(app).post('/users')
      .expect(400, /Email must not be blank/, done)
    })
  })

  // describe('stats', function() {
  //   it('checks stats path', function(done) {
  //     request(app).get('/stats')
  //     .expect('table', done)
  //
  //   })
  // })
  describe('stats', function() {
    it('checks players path', function(done) {
      request(app).get('/stats')
      .expect('table', done)

    })
  })

  // setTimeout((function() {
  //      return process.exit();
  //    }), 320);

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
