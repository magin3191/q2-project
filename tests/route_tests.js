'use strict';

process.env.NODE_ENV = 'test';
import server from '../app.js'
const request = require('supertest');
const express = require('express');
const app = express();

request = request('http://localhost:3000');

request.get('/').expect(200, function(done) {
  console.log(done);
});

request.get('/').expect('Hello world', function(err){
  console.log(err);
});

// suite('routes', addDatabaseHooks(() => {
//   test('GET /stats', (done) => {
//     /* eslint-disable max-len */
//     request(server)
//       .get('/stats')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, [{
//         id: 'what we are returning',
//         stat1: 'what we are returning',
//         stat2: 'what we are returning'
//       }], done)
//   });
//   test('GET /user/:id', (done) => {
//       /* eslint-disable max-len */
//       request(server)
//         .get('/users')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, {
//           id: 1,
//           user: 'username',
//           password: 'password',
//           favorite: 'json'
//         }, done);
//
//         /* eslint-enable max-len */
//     });
//
// }))
