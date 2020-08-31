// Import mealRate model
MealRateList = require('../models/MealRateList');
// Handle index actions
exports.index = function (req, res) {
    MealRateList.get(function (err, mealRates) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "mealRates retrieved successfully",
            data: mealRates
        });
    });
};
// Handle create mealRate actions
exports.new = function (req, res) {
    var mealRate = new MealRateList();
    mealRate.state = req.body.state;
    mealRate.data = req.body.data;
    // save the mealRate and check for errors
    mealRate.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New mealRate created!',
            data: mealRate
        });
    });
};

// Handle view mealRate info
exports.view = function (req, res) {
    MealRateList.findById(req.params.mealRate_id, function (err, mealRate) {
        if (err)
            res.send(err);
        res.json({
            message: 'mealRate details loading..',
            data: mealRate
        });
    });
};
// Handle update mealRate info
exports.update = function (req, res) {
    MealRateList.findById(req.params.mealRate_id, function (err, mealRate) {
        if (err)
            res.send(err);
        mealRate.data = req.body.data;
        // save the mealRate and check for errors
        mealRate.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'mealRate Info updated',
                data: mealRate
            });
        });
    });
};
// Handle delete mealRate
exports.delete = function (req, res) {
    MealRateList.remove({
        _id: req.params.meal_id
    }, function (err, mealRate) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'mealRate deleted'
        });
    });
};