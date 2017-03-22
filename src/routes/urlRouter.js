const express = require("express");
const urlRouter = express.Router();
const urlController = require('../controllers/urlController');

urlRouter.post('/url', urlController.addUrlAction);
urlRouter.delete('/url/:id(\\d+)', urlController.removeUrlAction);
urlRouter.get('/url/:id(\\d+)', urlController.getUrlAction);
urlRouter.get('/url/', urlController.getUrlAction);
//urlRouter.get('/url', urlController.getUrl);


module.exports = urlRouter;
