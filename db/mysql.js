var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : '314159',
    database        : 'api',
    charset         : 'UTF8_GENERAL_CI',
    dateStrings     : true,
    port            : 3306
});

var query = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports = query;

// 调用示例
/*
var query = require("./lib/mysql.js");
query("select 1 from 1",function(err,vals,fields){
    //do something
});
*/
