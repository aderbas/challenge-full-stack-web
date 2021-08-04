
module.exports = (express) => {
  // router
  const router = express.Router();

  // module controller
  const controller = require('../controller/student')();

  /**
   * Get all students
   */
  router.get('/', controller.getAll);

  /**
   * Save new
   */
  router.post('/', controller.save);

  /**
   * Update student
   */
   router.put('/', controller.update);
   
  /**
   * Remove student
   */
   router.delete('/:id', controller.delete);   
  

  return router;
}