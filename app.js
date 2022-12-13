const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'hello world!',
  });
});

module.exports = app;
