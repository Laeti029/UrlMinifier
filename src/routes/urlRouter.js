const urlRouter = express.Router();
const urlController = require('../controllers/urlController');
let jsonParser = bodyParser.json();

urlRouter.post('/url', urlController.addUrlAction);
urlRouter.delete('/url/:id(\\d+)', urlController.removeUrlAction);
urlRouter.get('/url/:id(\\d+)', urlController.getUrlAction);
urlRouter.get('/url', urlController.getUrl);


module.exports = urlRouter;