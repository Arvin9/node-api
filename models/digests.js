var query = require("../db/mysql.js");

var digests = {};
digests.queryByParame = function(id,offset,limit,callback){
    let sql = "SELECT * FROM digest ";
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

        callback(vals);
    });
}

module.exports = digests;
