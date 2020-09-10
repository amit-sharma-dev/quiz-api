// Initialize express router
let router = require('express').Router();
var VerifyToken = require('../middleware/VerifyToken');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to nodejs MVC framework',
    });
});

// Import Controllers
var MealController = require('../controllers/MealController');
var AuthController = require('../controllers/auth/AuthController');

router.use(function(req, res, next) {
  // Enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

//   if (0 === Object.keys(req.body).length) {
//       return res.status(422).send({status: false, message : 'Invalid Payload.'});
//   }

  next()
});

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

// auth routes
router.route('/auth/register').post(AuthController.register);
router.route('/auth/login').post(AuthController.login);
router.route('/auth/me').get(AuthController.me);
router.route('/auth/logout').get(AuthController.logout);

// Export API routes
module.exports = router;