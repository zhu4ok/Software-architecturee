const request = require('supertest');
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send(process.env.GREETING || 'Hello World');
});

describe('GET /', () => {
  test('It should respond with Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual(process.env.GREETING || 'Hello World');
    expect(response.statusCode).toBe(200);
  });
});
