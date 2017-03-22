const express = require("express");
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/register', userController.registerAction);
userRouter.post('/login', userController.connectAction);

module.exports = userRouter;
