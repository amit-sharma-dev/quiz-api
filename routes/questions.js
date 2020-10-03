const express = require('express');
const router = express.Router();
const { validate, Joi } = require('express-validation');
var VerifyToken = require('../middleware/VerifyToken');
const questionValidate = require('../validator/questions');

var QuestionController = require('../controllers/QuestionController');

/**
 * @swagger
 * /api/question:
 *  post:
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        quetion: body
 *        required: true
 *        description: Question create Payload
 *        schema:
 *            $ref: '#/definitions/Question'
 *    responses:
 *      '201':
 *        description: loggedIn
 */
router.route('/', [VerifyToken, validate(questionValidate.create)])
    .post(QuestionController.new);


module.exports = router;