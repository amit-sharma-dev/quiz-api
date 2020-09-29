require('dotenv').config();
const mongoose = require('mongoose');

let uri = "mongodb://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE;
if (process.env.APP_ENV === 'development') {
    uri = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE
}

mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = mongoose;