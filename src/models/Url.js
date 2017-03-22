var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    urlBase: String,
    urlMinify: String,
    userId: String,
});


module.exports = mongoose.model('Url', urlSchema);
