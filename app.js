// Import express
let express = require('express');
// Initialize the app
let app = express();
// Import config
require('dotenv').config();
// Setup server port
let port = process.env.PORT || 8080;
// Import routes
let apiRoutes = require("./routes/api");
let webRoutes = require("./routes/web");
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
const mkdirp = require('mkdirp');
let multer = require('multer');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(express.static('uploads'));
// set view engine
app.set('views', './views');
app.set('view engine', 'ejs');
// multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = '/uploads/';
//         mkdirp(dir, err => cb(err, dir))
//     }
// });

app.options("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-CSRF-TOKEN');
    res.sendStatus(200);
});

// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE, {
    useNewUrlParser: true
});

// Use Api routes in the App
app.use('/api/v1', apiRoutes);
// Use Web routes in the App
app.use('/', webRoutes);

// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running app on port " + port);
    console.log("open on browser : http://localhost:" + port);
});


