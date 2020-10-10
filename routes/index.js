var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Quiz Api' });
});

/* questions routes */
const questionRouter = require('./questions');
router.use('/api/v1/question', questionRouter);

const authRouter = require('./auth');
router.use('/api/v1/auth', authRouter);


module.exports = router;