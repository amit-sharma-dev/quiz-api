const database = require('../database/database');
const Schema = database.Schema;

var MealRateList = new Schema({
    state: String,
    data: Object,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'meal_rate_list',
    strict: false
});

module.exports = database.model('MealRateList', MealRateList);