// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.render('index', {title: "Node MVC Framework"})
});

router.get('/fileUpload', function (req, res) {
    res.render('upload', {title: "Node MVC Framework"})
});

router.post("/upload", function (req, res, next) {
    console.log('i am here');
    console.log(req.files);
    if (req.files) {
        console.log(util.inspect(req.files));
        if (req.files.myFile.size === 0) {
            return next(new Error("Hey, first would you select a file?"));
        }
        fs.exists(req.files.myFile.path, function (exists) {
            if (exists) {
                res.end("Got your file!");
            } else {
                res.end("Well, there is no magic for those who don’t believe in it!");
            }
        });
    }
});

// Export API routes
module.exports = router;
