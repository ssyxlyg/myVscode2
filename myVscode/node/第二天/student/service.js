// 搭建服务器
let express = require('express');
let app = express();

// 创建数据库链接
let mysql = require('mysql');
// 链接数据库
let conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "feed"
})

conn.connect(function () {
    console.log("数据库链接成功");
})

// 查询接口
app.get('/api/userList', function (req, res) {
    let sql = 'select * from user';
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": "0",
                "msg": "查询成功",
                "data": data
            })
        } else {
            res.json({
                "errCode": "1",
                "msg": "查询成功",
                "err": err
            })
        }
    })
})

// 添加接口
app.use(express.json())
app.post('/api/addUser', function (req, res) {
    let sql = `insert into user(userName,passWord,sex,address) value('${req.body.userName}','${req.body.passWord}','${req.body.sex}','${req.body.address}')`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": "0",
                "msg": "添加成功",
                // "data": data
            })
        } else {
            res.json({
                "errCode": "1",
                "msg": "添加失败",
                "err": err
            })
        }
    })
})

// 修改用户密码
app.put('/api/updateUser/:id', function (req, res) {
    let sql = `update user set password=${req.body.passWord} where userId=${req.params.id}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "修改成功",
                "data": data
            })
        } else {
            res.json({
                "errCode": 1,
                "msg": "修改失败",
                "err": err
            })
        }
    })
})

// 删除接口
app.delete('/api/delUser/:id', function (req, res) {
    let sql = `delete from user where userId=${req.params.id}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "删除成功",
                "data": data
            })
        } else {
            res.json({
                "errCode": 0,
                "msg": "删除失败",
                "data": data
            })
        }
    })
})

app.listen(8008, function () {
    console.log("服务器启动成功");
})

// conn.end(function () {
//     console.log("已断开数据库链接");
// })