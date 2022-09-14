// 搭建服务器
// 导入express
let express = require('express');
let app = express();


// 创建链接数据库
let sql = require('mysql');
// 创建链接
let conn = sql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "feed"

})

// 链接数据库
conn.connect(function (err) {
    if (!err) {
        console.log("链接成功");
    }
})

// 查询接口
app.get('/api/userList', function (req, res) {
    // sql查询操作
    let sql = "select * from user";
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "查询成功",
                "data": data
            })
        } else {
            res.json({
                "errCode": 1,
                "msg": "查询失败",
                "err": err
            })
        }
    })
})

// 添加接口
app.use(express.json());
app.post('/api/addUser', function (req, res) {
    // sql查询操作
    let sql = `insert into user(userName,address,passWord,phone) value('${req.body.userName}','${req.body.address}','${req.body.passWord}','${req.body.phone}')`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "添加成功",
                "data": data
            })
        } else {
            res.json({
                "errCode": 1,
                "msg": "添加失败",
                "err": err
            })
        }
    })
})

// 删除接口
app.delete('/api/deleteUser/:id', function (req, res) {
    let sql = `delete from user where userId=${req.params.id}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "删除成功"
            })
        } else {
            res.json({
                "errCode": 1,
                "msg": "删除失败",
                "err": err
            })
        }
    })
})
// 修改接口
app.put('/api/updateUser/:id', function (req, res) {
    let sql = `update user set passWord=${req.body.passWord} where userId=${req.params.id}`
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                "errCode": 0,
                "msg": "修改成功"
            })
        } else {
            res.json({
                "errCode": 1,
                "msg": "修改失败"
            })
        }
    })
})

// 启动服务器
app.listen(8086, function () {
    console.log("服务器启动成功");
})
// 断开数据库链接
// conn.end(function (err) {
//     if (!err) {
//         console.log("已断开链接");
//     }
// })

