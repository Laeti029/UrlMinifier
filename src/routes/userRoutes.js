const router = express.Router();
const UrlController = require('../controllers/UserController');
let jsonParser = bodyParser.json();

router.post('/register', UserController.register);
router.post('/login', UserController.connect);
module.exports = router;
