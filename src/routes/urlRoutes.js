const router = express.Router();
const UrlController = require('../controllers/UrlController');
let jsonParser = bodyParser.json();

router.post('/url', jsonParser, UrlController.addUrl);
router.delete('/url', UrlController.removeUrl);
router.get('/url', UrlController.getUrls);


module.exports = router;