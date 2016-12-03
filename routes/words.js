var express = require('express');
var wordsRound = require('../bin/words-proc/words-round');

var router = express.Router();


router.get('/', function (req, res, next) {
    console.log(res);
    var possibleWords = wordsRound(req.query.jumble);
    res.status(200).json({
        possibleWords
    });
});

module.exports = router;