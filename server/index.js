const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res, next) => {
    res.json({
      message: 'Welcome to the API',
    });
  });

app.get('/api/posts', (req, res, next) => {
    res.json({
      message: 'GET all posts',
    });
  });

module.exports = app;