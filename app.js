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
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE, {
    useNewUrlParser: true
});

// Use Api routes in the App
app.use('/api', apiRoutes);

// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running app on port " + port);
});


