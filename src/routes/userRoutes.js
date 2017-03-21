const express = require("express");
const userRouter = express.Router();
const UserController = require('../controllers/userController');
let bodyParser= require('body-parser')
let jsonParser = bodyParser.json();

userRouter.post('/register', UserController.registerAction);
userRouter.post('/login', UserController.connectAction);
module.exports = userRouter;
