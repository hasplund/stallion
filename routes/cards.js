var express = require('express');
var router = express.Router();
var Card = require('../model/card');

/* GET home page. */
router.get('/', function(req, res, next) {
    Card
        .find({})
        .exec(function (err, cards) {
          if (err) throw err;
          res.status(200).json(cards)
        })
});

module.exports = router;
