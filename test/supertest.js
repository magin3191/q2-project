const request = require('http://localhost:3000')
const express = require('express')
const app = express()

request.get('/').expect(200, function(err) {
  console.log(err);
})
  // request.get('/').expect('heya', function(err) {
  //   console.log(err);
  // })
