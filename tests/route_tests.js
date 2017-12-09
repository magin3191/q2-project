'use strict';

process.env.NODE_ENV = 'test';

const {suite, test} = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');
const {addDatabaseHooks} = require('./utils')

suite('routes', addDatabaseHooks(() => {
  test('GET /stats', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/stats')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 'what we are returning',
        stat1: 'what we are returning',
        stat2: 'what we are returning'
      }], done)
  });
  test('GET /user/:id', (done) => {
      /* eslint-disable max-len */
      request(server)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          id: 1,
          user: 'username',
          password: 'password',
          favorite: 'json'
        }, done);

        /* eslint-enable max-len */
    });

}))
