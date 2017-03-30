var express = require('express');
var router = express.Router();

var quotations = require('../models/quotations');

/* GET quotations listing. */
router.get('/:id', function(req, res) {
    quotations.queryByParame(req.params.id,null,null,function(rows){
        res.send(rows);
    });
});

router.get('/', function(req, res) {
    quotations.queryByParame(null,req.query.offset,req.query.limit,function(rows){
        res.send(rows);
    });
});

module.exports = router;
