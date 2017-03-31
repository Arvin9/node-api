var express = require('express');
var router = express.Router();

var digests = require('../models/digests');

/* GET quotations listing. */
router.get('/:id', function(req, res) {
    digests.queryByParame(req.params.id,null,null,function(rows){
        res.send(rows);
    });
});

router.get('/', function(req, res) {
    digests.queryByParame(null,req.query.offset,req.query.limit,function(rows){
        res.send(rows);
    });
});

module.exports = router;
