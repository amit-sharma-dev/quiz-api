const database = require('../database/database');
const Schema = database.Schema;

var User = new Schema({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'users',
    strict: false
});

module.exports = database.model('User', User);