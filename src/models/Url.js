var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    url: string,
    urlminify: string,
    userId: string,
});

var Url = mongoose.model('Url', urlSchema);

module.exports = url;
