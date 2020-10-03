const express = require('express');
const router = express.Router();
const { validate, Joi } = require('express-validation');
var VerifyToken = require('../middleware/VerifyToken');
const userValidate = require('../validator/users');

var AuthController = require('../controllers/auth/AuthController');

router.route('/register', validate(userValidate.register)).post(AuthController.register);
router.route('/login', validate(userValidate.login)).post(AuthController.login);
router.route('/me', VerifyToken).get(AuthController.me);
router.route('/logout', VerifyToken).get(AuthController.logout);

module.exports = router;