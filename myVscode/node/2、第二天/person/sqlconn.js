// 搭建服务器
// 导入express
let express = require('express');
let app = express();
app.use(express.json());
app.use(express.static("./public"));

/*************cookie*****************/
// 导入cookie
let cookieParser = require("cookie-parser");
let cookie = cookieParser();
// 导入session
let expressSession = require("express-session");
app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    },
    secret: "ssxy"
}))
/**********************跨域*************************************/
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
/*******************************/
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

/***********jsonp**************/


// 登录接口
app.post('/api/login', function (req, res) {
    let sql = `select * from user where userName='${req.body.userName}' and passWord='${req.body.passWord}'`
    conn.query(sql, function (err, data) {
        if (!err) {
            if (data.length > 0) {
                //7天免登录，存cookie
                res.cookie("userName", req.body.userName, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                req.session["userName"] = req.body.userName;
                res.json({
                    "errCode": 0,
                    "msg": "登录成功",
                    "data": data
                })
            } else {
                res.json({
                    "errCode": 2,
                    "msg": "用户名或密码错误"
                })
            }

        } else {
            res.json({
                "errCode": 1,
                "msg": "查询失败",
                "err": err
            })
        }
    })
})

// 注销接口
app.post('/api/logout', function (req, res) {
    req.session.destroy();
    res.json({
        "errCode": 0
    })
})

// 验证是否登录
app.get('/api/isLogin', function (req, res) {
    if (req.session["userName"]) {
        let sql = `select * from user where userName='${req.session["userName"]}'`;
        conn.query(sql, function (err, data) {
            if (!err) {
                res.json({
                    "errCode": 0,
                    "msg": "欢迎登录",
                    "data": data
                })
            } else {
                res.json({
                    "errCode": 2,
                    "msg": "查询错误"
                })
            }
        })
    } else {
        res.json({
            "errCode": 1,
            "msg": '用户未登录'
        })
    }
})
// 查询接口--all
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
// 查询接口--id
app.get('/api/userList/:id', function (req, res) {
    // sql查询操作
    let sql = `select * from user where userId=${req.params.id}`;
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

// 姓名查询
app.get('/api/userListByName', function (req, res) {
    // sql查询操作
    let sql = `select * from user where userName like '%${req.query.userName}%'`;
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

// 分页查询
app.get('/api/userPage', function (req, res) {
    // sql查询操作
    let size = req.query.size;//每页条数
    let currentPage = req.query.currentPage;//当前页码数
    let sql = `select * from user limit ${(currentPage - 1) * size},${size}`;
    conn.query(sql, function (err, data) {
        if (!err) {
            let sql2 = "select count(*) as total from user";

            conn.query(sql2, function (err2, data2) {
                if (!err2) {
                    let total = data2[0].total;
                    let totalPage = Math.ceil(total / size);
                    res.json({
                        "errCode": 0,
                        "msg": "查询成功",
                        "data": data,
                        "pageSupport": {
                            "size": size,
                            "currentPage": currentPage,
                            "totalPage": totalPage,
                            "total": total
                        }
                    })

                } else {
                    res.json({
                        "errCode": 2,
                        "msg": "查询总条数失败",
                        "err": err2
                    })
                }
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

app.post('/api/addUser', function (req, res) {
    // sql查询操作

    let sql = `insert into user(userName,address,passWord,phone,sex,email) value('${req.body.userName}','${req.body.address}','${req.body.passWord}','${req.body.phone}','${req.body.sex}','${req.body.email}')`;
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

    let sql = `update user set userName='${req.body.userName}',passWord='${req.body.passWord}',address='${req.body.address}',phone='${req.body.phone}',sex='${req.body.sex}' where userId=${req.params.id}`
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

/*****************************/
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

