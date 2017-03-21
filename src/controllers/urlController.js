const UrlService = require('../services/UrlService');
class UrlController {
    addUrl(req, res) {
        let post = req.body;
        let tmp = post.url;
        console.log(tmp);
    }
    removeUrl(req, res) {
        res.send('remove Url')
    }
    getUrls(req, res) {
        res.send('get urls')
    }
    getUrl(req, res) {
        res.send('get url')
    }
}
module.exports = new UrlController();