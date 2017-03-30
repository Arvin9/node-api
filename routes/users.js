var express = require('express');
var router = express.Router();
var query = require("../db/mysql.js");

/* GET users listing. */
router.get('/', function(req, res, next) {

    query("SELECT 1 + 1 AS solution",function(err,vals,fields){
        //do something
        console.log(err);
        console.log(vals);
        console.log(fields);
        res.send(vals);
    });

});

module.exports = router;
