
module.exports = (express) => {
  // router
  const router = express.Router();

  // module controller
  const controller = require('../controller/user')();

  /**
   * Get All
   */
  router.get('/', controller.getAll);

  /**
   * Authenticate
   */
  router.post('/auth', controller.auth);
  

  return router;
}