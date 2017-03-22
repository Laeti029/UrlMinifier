'use strict';

const http = require('http');
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = http.createServer();
const app = express();

// Router
const userRouter = require('./routes/userRouter');

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:Password1234@ds137370.mlab.com:37370/urlminifier', (err, database) => {
  if (err) return console.log(err)
  app.listen(3000, () => {
    console.log('MongoDB listening on port 3000')
  })
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter);

app.listen(8080, () => {
  console.log(`Application listening on port 8080`);
});
