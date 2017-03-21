'use strict';

const express = require("express");

import { Server } from 'http';

const MongoClient = require('mongodb').MongoClient

let app = express();
let http = Server(app);
let db;

MongoClient.connect('mongodb://root:Password1234@ds137370.mlab.com:37370/urlminifier', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080);
console.log("Listen port 8080");
