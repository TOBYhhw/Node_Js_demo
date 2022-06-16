const db = require('../db/index')

exports.getHistory = (req, res) => {
    //定义sql语句
    const getHistory = 'select * from bills order by Id asc'
    //调用dp
    db.query(getHistory, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            msg: "请求成功历史交易成功！",
            data: results
        })
    })
}
exports.add = (req, res) => {
    const billinfo = req.query
    const add = 'insert into bills set ?'
    db.query(add, billinfo, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('添加失败！')
        res.send({
            status: 0,
            msg: "添加交易成功！",
        })
    })
}
exports.delete = (req, res) => {
    const billId = req.params.Id
    const deleteId = 'delete from bills where Id=? '
    db.query(deleteId, billId, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除失败！')
        res.send({
            status: 0,
            msg: "删除交易成功！",
        })
    })
}
exports.update = (req, res) => {
    const billupdate = req.query
    const updatebill = 'update bills set ? where Id=? '
    db.query(updatebill, [billupdate, billupdate.Id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('更新失败！')
        res.send({
            status: 0,
            msg: "更新交易成功！",
        })
    })
}
exports.getHistoryByName = (req, res) => {
    const billName = req.query
    const get = 'select * from bills where name=?'
    db.query(get, billName.name, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            msg: "查找交易成功！",
            data: results
        })
    })
}