var query = require("../db/mysql.js");
var moment = require('moment');

var quotations = {};

quotations.queryByParame = function(id,offset,limit,callback){
    let sql = "SELECT * FROM quotations ";
    if(id){
        sql += "WHERE id = " + id + " ";
    }
    if(limit){
        if(offset)
            sql += "LIMIT " + offset + "," + limit;
        else
            sql += "LIMIT " + limit;
    }

    query(sql,function(err,vals,fields){
        //do something
        vals.map(function(val){
            val.add_time = moment(val.add_time).format('YYYY-MM-DD HH:mm:ss');
        });
        callback(vals);
    });
}

module.exports = quotations;
