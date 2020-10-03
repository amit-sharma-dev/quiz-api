var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { ValidationError } = require('express-validation');
const winston = require('./config/winston');
const moment = require('moment');
const i18n = require('./config/lang');


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./config/swagger");
const swaggerDocs = swaggerJsDoc(swaggerOptions);

var indexRouter = require('./routes/index');

var app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add cors to headers and add a unique key to request.
app.use(function (req, res, next) {
    //allow cors headers in response
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Accept-Language, Authorization");
    //add a unique key in res as request_id.
    res.request_id = process.env.ENVIRONMENT + '.' + process.env.SERVER_ID + '.' + process.pid + '.' + moment().unix() + '.' + Math.random().toString(36).replace(/[^a-zA-Z]+/g, '').substr(0, 5);
    next();
});
//add middleware to get Accept-Language and change locale
app.use(i18n);

app.use('/', indexRouter);

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({
            "status": false,
            "status_code": err.statusCode,
            "message": res.__('validation_error'),
            "error": err.details,
            "request_id": res.request_id
        })
    }
    return res.status(500).json()
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.status(404).json({
        "status": false,
        "status_code": 404,
        "message": res.__('not_found'),
        "error": {},
        "request_id": res.request_id
    })
    //next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // winston logging
    winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;