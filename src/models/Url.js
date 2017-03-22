var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    url: String,
    urlMinify: String,
    userId: String,
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
