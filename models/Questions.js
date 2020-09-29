const database = require('../config/database');
const Schema = database.Schema;

var Questions = new Schema({
    quetion: String,
    options: Object,
    category: String,
    correct: Number
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'questions',
    strict: false
});

module.exports = database.model('Questions', Questions);