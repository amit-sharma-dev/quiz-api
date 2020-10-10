const Questions = require('../models/Questions');
const response = require('../helpers/response');
const winston = require('winston');
const { infoLogConfig } = require('../config/log').winston;
const logger = winston.createLogger(infoLogConfig);
const config = require('../config/config');

exports.new = function (req, res) {
    let questions = new Questions();
    questions.quetion = req.body.quetion;
    questions.options = req.body.options;
    questions.category = req.body.category;
    questions.correct = req.body.correct;
    // save the mealRate and check for errors
    questions.save(function (err) {
        if (err) {
            logger.error(err);
            return response.sendInternalServerError(res, err);
        }

        return response.sendCreated(res, {}, res.__('question.created'));
    });
};

exports.getAll = function (req, res) {
    Questions.find(function (err, questions) {
        if (err) {
            logger.error(err);
            return response.sendInternalServerError(res, err);
        }

        return response.sendAccepted(res, questions, res.__('question.find'));
    }).catch(error => {
        logger.info(error);
        return response.sendInternalServerError(res, error);
    });
};