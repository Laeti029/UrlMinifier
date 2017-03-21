const router = express.Router();
const UrlController = require('../controllers/UrlController');
let jsonParser = bodyParser.json();

router.post('/url', jsonParser, UrlController.addUrl);
router.delete('/url/:id(\\d+)', UrlController.removeUrl);
router.get('/url/:id(\\d+)', UrlController.getUrl);
router.get('/url', UrlController.getUrls);


module.exports = router;