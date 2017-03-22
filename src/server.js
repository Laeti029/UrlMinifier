'use strict';

const http = require('http');
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = http.createServer();
const app = express();

// Router
const userRouter = require('./routes/userRouter');
const urlRouter = require('./routes/urlRouter');

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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.get('Origin'));
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Origin");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Max-Age", 3600);

    if(req.method === 'OPTIONS')
        res.sendStatus(200)
    else
        next();
})
app.use(userRouter);
app.use(urlRouter);

app.listen(8080, () => {
  console.log(`Application listening on port 8080`);
});
