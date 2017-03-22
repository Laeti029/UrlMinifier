const express = require("express");
const urlService = require('../services/urlService')

const addUrlAction = (req, res) => {
    urlService.addUrl(req.body, (response) => {
        if (response.data) {
            res.status(200);
        } else {
            res.status(500);
        }
        res.json(response);
    });
};

const removeUrlAction = (req, res) => {
    urlService.removeUrl(req.body, (url) => {

    });
};

const getUrlAction = (req, res) => {
    urlService.getUrl(req.body, (url) => {
        if (url) {
            res.json(url);
        } else {
            res.sendStatus(500);
        }
    });
};

module.exports = {
    addUrlAction,
    removeUrlAction,
    getUrlAction
};
