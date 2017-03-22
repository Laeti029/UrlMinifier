// UserController
const userService = require('../services/userService')

const registerAction = (req, res) => {

  userService.addUser(req.body, (response) => {
    if (response.result) {
      res.status(200);
    } else {
      res.status(500);
    }

    res.json(response);
  });
};

const connectAction = (req, res) => {

  userService.getUser(req.body, (user) => {
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(500);
    }
  });
};

module.exports = {
  registerAction,
  connectAction
};