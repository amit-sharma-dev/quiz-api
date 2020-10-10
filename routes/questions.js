const express = require('express');
const router = express.Router();
const { validate, Joi } = require('express-validation');
var VerifyToken = require('../middleware/VerifyToken');
const questionValidate = require('../validator/questions');
const QuestionController = require('../controllers/QuestionController');

/**
 * @swagger
 * /api/question:
 *  post:
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: Authorization
 *      - in: body
 *        quetion: body
 *        required: true
 *        description: Question create Payload
 *    responses:
 *      '201':
 *        description: Question created successfully
 */
router.route('/', [VerifyToken, validate(questionValidate.create)])
    .post(QuestionController.new);

router.get('/', [VerifyToken], QuestionController.getAll);

module.exports = router;