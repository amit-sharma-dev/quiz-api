// Import Mongoose
require('dotenv').config();
let mongoose = require('mongoose');
mongoose.connect("mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE, {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = mongoose;