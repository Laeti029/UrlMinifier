const userRouter = express.Router();
const UrlController = require('../controllers/UserController');
let jsonParser = bodyParser.json();

userRouter.post('/register', UserController.registerAction);
userRouter.post('/login', UserController.connectAction);
module.exports = userRouter;
