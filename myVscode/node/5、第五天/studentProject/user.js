/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-09-17 09:32:24
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-09-17 14:19:29
 * @FilePath: \vsFile\myVscode\node\5、第五天\studentProject\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//创建服务
let express = require("express");
let app = express();
app.use(express.json())
// 导入cookie
let cookieParser = require("cookie-parser");
let cookie = cookieParser()
// 导入express-session
let expressSession = require("express-session");
app.use(expressSession({
    resave: true, //每次是否都刷新存储器
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }, //1个小时过期
    secret: "ssxy" //秘钥
}))

// 创建数据库链接
let mysql = require("mysql");
let conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "feed"
})

// 开启链接
conn.connect(function () {
    console.log("数据库已链接");
})

//允许跨域
app.use((req, res, next) => {
    //设置请求头
    res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Max-Age': 1728000,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json; charset=utf-8'
    })
    req.method === 'OPTIONS' ? res.status(204).end() : next()
})

// 登录接口
app.post('/api/login', function (req, res) {
    let sql = `select * from studentInfo where sName='${req.body.sName}' and password='${req.body.password}'`;
    conn.query(sql, function (err, data) {
        if (!err) {
            if (data.length > 0) {
                res.json({
                    errCode: 0,
                    msg: '登录成功',
                    data: data
                })
            } else {
                res.json({
                    errCode: 2,
                    msg: '用户名或密码错误',
                })
            }

        } else {
            res.json({
                errCode: 1,
                msg: '登录失败',
                err: err
            })
        }
    })
})
// 查询接口--all
app.get('/api/infoList', function (req, res) {
    let sql = 'select * from studentInfo';
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                msg: "查询成功",
                data: data
            })
        } else {
            res.json({
                errCode: 1,
                msg: "查询失败",
                err: err
            })
        }
    })
})

// 查询接口--id
app.get('/api/infoListById/:id', function (req, res) {
    let sql = `select * from studentInfo where sId=${req.params.id}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                mag: "查询成功",
                data: data
            })
        } else {
            res.json({
                errCode: 0,
                mag: "查询失败",
                err: err
            })
        }
    })
})

// 查询接口--sName
app.get('/api/infoListBysName', function (req, res) {
    let sql = `select * from studentInfo where sName='${req.query.sName}'`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                msg: "查询成功",
                data: data
            })
        } else {
            res.json({
                errCode: 1,
                msg: "查询失败",
                err: err
            })
        }
    })
})

// 查询接口--分页
app.get('/api/infoListPage', function (req, res) {
    let currentPage = req.query.currentPage || 1;
    let size = req.query.size || 5;
    let sql = `select * from studentInfo limit ${(currentPage - 1) * size},${size}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            let sql2 = `select count(*) as totalCount from studentInfo`;
            conn.query(sql2, function (err2, data2) {
                let totalCount = data2[0].totalCount;
                let totalPage = Math.ceil(totalCount / size)
                console.log(data2);
                if (!err2) {
                    res.json({
                        errCode: 0,
                        msg: "查询成功",
                        data: data,
                        pageInfo: {
                            totalPage: totalPage,
                            totalCount: totalCount,
                            size: size,
                            currentPage: currentPage
                        }

                    })
                } else {
                    res.json({
                        errCode: 2,
                        msg: "分页失败",
                        err: err2
                    })
                }
            })
        } else {
            res.json({
                errCode: 1,
                msg: "查询失败",
                err: err
            })

        }

    })
})

// 增添接口
app.post('/api/addInfo', function (req, res) {
    let sql = `insert into studentInfo(sName,password,score,sex,address,phone) 
    value('${req.body.sName}','${req.body.password}',${req.body.score},'${req.body.sex}','${req.body.address}','${req.body.phone}') `;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                msg: "添加成功",
                data: data
            })
        } else {
            res.json({
                errCode: 1,
                msg: "添加失败",
                err: err
            })
        }
    })
})

// 删除接口
app.delete('/api/delInfo/:id', function (req, res) {
    let sql = `delete from studentInfo where sId=${req.params.id}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                msg: "删除成功",
                data: data
            })
        } else {
            res.json({
                errCode: 1,
                msg: "删除失败",
                err: err
            })
        }
    })
})

// 修改接口
app.put('/api/updateInfo/:id', function (req, res) {
    let sql = `update studentInfo set sName='${req.body.sName}',password='${req.body.password}',score=${req.body.score},sex='${req.body.sex}',phone='${req.body.phone}' where sId=${req.params.id}`
    conn.query(sql, function (err, data) {
        if (!err) {
            res.json({
                errCode: 0,
                msg: "修改成功",
                data: data
            })
        } else {
            res.json({
                errCode: 1,
                msg: "修改失败",
                err: err
            })
        }
    })
})


app.listen(8008, function () {
    console.log("服务器已开启");
})


