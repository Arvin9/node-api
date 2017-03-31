var query = require("../db/mysql.js");
var moment = require('moment');

var digests = {};
digests.queryByParame = function(id,offset,limit,callback){
    let sql = "SELECT * FROM digests ";
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
        if(err) callback(err);
        callback(vals);
    });
}
digests.create = function(title,content,provenance,callback){
    let add_time = moment().format("YYYY-MM-DD HH:mm:ss");
    let sql = "INSERT INTO digests (title, content, provenance,add_time) VALUES (";
    sql += "'" + title + "','" + content + "','" + provenance + "','" + add_time + "')";

    query(sql,function(err,vals,fields){
        //do something
        if(err) callback(err);
        callback(vals);
    });
}
digests.update = function(id,title,content,provenance,read_quantity,callback){

    let sql = "UPDATE digests SET ";
    if(title)
        sql     += "title = '"          + title + "' ";
    if(content){
        if(title)
            sql += ",content = '"       + content + "' ";
        else
            sql += "content = '"        + content + "' ";
    }
    if(provenance){
        if(title || content)
            sql += ",provenance = '"    + provenance + "' ";
        else
            sql += "provenance = '"     + provenance + "' ";
    }
    if(read_quantity){
        if(title||content||provenance)
            sql += ",read_quantity = '" + read_quantity + "' ";
        else
            sql += "read_quantity = '"  + read_quantity + "' ";
    }

    sql += "WHERE id = " + id;

    query(sql,function(err,vals,fields){
        //do something
        if(err) callback(err);
        callback(vals);
    });
}
module.exports = digests;
