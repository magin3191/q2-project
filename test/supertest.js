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

//   app.post('/stats', function(req, res) {
//     res.staus(200).json(getRightConstraint)
// })
//     describe('GET /stats', function() {
//       it('should get stats', function(done) {
//         request(app)
//         .get('/stats')
//         .set('Accept', 'getRightConstraint/json')
//         .expect(function(res) {
//           req.body.constraint = 'results', done
//         })
//       })
//     })

  app.get('/user', function(req, res) {
    res.status(200).json({name: 'tobi'});
  });

  describe('GET /user', function() {
  it('user.name should be an case-insensitive match for "tobi"', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toUpperCase();
      })
      .expect(200, {
        id: 'some fixed id',
        name: 'TOBI'
      }, done);
  });
});

app.get('/stats_db', function(req, res) {
  res.status(200).json({name: 'g'});
});
request(app)
.get('/stats_db')
.expect('Content-Type', /json/)
.expect('Content-Length', '12')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

setTimeout((function() {
     return process.exit();
   }), 3200);
