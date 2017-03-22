const request = require('supertest');
const express = require('express');

const app = express();

describe('GET /register', function() {
  it('respond with json', function(done) {
    request(app)
      .post('/register')
      .field('email', 'test@test.fr')
      .field('password', 'Test1234#')
      .expect(200, done);
  });
});