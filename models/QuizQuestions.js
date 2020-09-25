const database = require('../database/database');
const Schema = database.Schema;

var QuizQuestions = new Schema({
    quetion_id: String,
    quetion: String,
    user_id: String,
    options: Object,
    category: String,
    correct: Number
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'quiz_questions',
    strict: false
});

module.exports = database.model('QuizQuestions', QuizQuestions);