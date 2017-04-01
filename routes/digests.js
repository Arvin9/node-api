var express = require('express');
var router = express.Router();

var digests = require('../models/digests');

/* GET quotations listing. */
router.get('/:id', function(req, res) {
    digests.queryByParame(req.params.id,null,null,function(rows){
        res.json(rows);
    });
});

router.get('/', function(req, res) {
    digests.queryByParame(null,req.query.offset,req.query.limit,function(rows){
        res.json(rows);
    });
});

router.post('/', function(req, res) {
    let title = req.body.title;
    let content = req.body.content;
    let provenance = req.body.provenance;
    if(!title)      res.status(400).json({statu:400,message:'title不能为空'});
    if(!content)    res.status(400).json({statu:400,message:'content不能为空'});
    if(!provenance) res.status(400).json({statu:400,message:'provenance不能为空'});

    digests.create(title,content,provenance,function(rows){
        res.send(rows);
    });
});
// 根据id进行更新
router.put('/:id', function(req, res) {
    let id = req.params.id;
    if(!id) res.status(400).json({statu:400,message:'id不能为空'});
    let title         = req.body.title;
    let content       = req.body.content;
    let provenance    = req.body.provenance;
    let read_quantity = req.body.read_quantity;

    digests.update(id,title,content,provenance,read_quantity,function(rows){
        res.send(rows);
    });
});
//根据id进行删除
router.delete('/:id', function(req, res) {
    let id = req.params.id;
    if(!id) res.status(400).json({statu:400,message:'id不能为空'});

    digests.delete(id,function(rows){
        console.log(rows.affectedRows);
        if(rows.affectedRows == 0)
            res.send({statu:400,message:'删除数据失败'});
        else
            res.send({statu:204,message:'删除数据成功'});
    });
});

module.exports = router;
