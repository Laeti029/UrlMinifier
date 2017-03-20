'use strict';

const express = require("express");
import { Server } from 'http';

let app = express();
let http = Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080);
console.log("Listen port 8080");
