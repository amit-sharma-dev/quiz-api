// Initialize express router
let router = require('express').Router();
var VerifyToken = require('./middleware/VerifyToken');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to nodejs MVC framework',
    });
});

// Import Controllers
var MealController = require('./controllers/MealController');
var AuthController = require('./controllers/auth/AuthController');

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
router.route('/auth/logout').get(AuthController.me);

// Export API routes
module.exports = router;