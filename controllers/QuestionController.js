const Questions = require('../models/Questions');

Questions = require('../models/Questions');

exports.new = function (req, res) {
    let questions = new Questions();
    questions.quetion = req.body.quetion;
    questions.options = req.body.options;
    questions.category = req.body.category;
    questions.correct = req.body.correct;
    // save the mealRate and check for errors
    questions.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New questions created!',
            data: mealRate
        });
    });
};