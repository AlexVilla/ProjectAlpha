var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) { //for url "/" of localhost it respond with hello world
    res.status(200).send('Hello World!');
});

module.exports = router;