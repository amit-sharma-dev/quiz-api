// Initialize express router
let router = require('express').Router();
const { validate, Joi } = require('express-validation');
var VerifyToken = require('../middleware/VerifyToken');
const questionValidate = require('../validator/questions');
const userValidate = require('../validator/users');

// Import Controllers
var MealController = require('../controllers/MealController');
var QuestionController = require('../controllers/QuestionController');
var AuthController = require('../controllers/auth/AuthController');

// add middleware
router.use('/auth/me', VerifyToken);
router.use('/auth/logout', VerifyToken);
router.use('/meals', VerifyToken);
router.use('/meals/:meal_id', VerifyToken);

// define routes
router.route('/meals')
  .get(MealController.index)
  .post(MealController.new);
router.route('/meals/:meal_id')
  .get(MealController.view)
  .patch(MealController.update)
  .put(MealController.update)
  .delete(MealController.delete);

router.route('/question', validate(questionValidate.create))
  .post(QuestionController.new);

// auth routes
router.route('/auth/register', validate(userValidate.register)).post(AuthController.register);
router.route('/auth/login', validate(userValidate.login)).post(AuthController.login);
router.route('/auth/me').get(AuthController.me);
router.route('/auth/logout').get(AuthController.logout);

// Export API routes
module.exports = router;