/* 
1、链接数据库
	1.1导入mysql  npm i 导入mysql
	1.2 创建链接
	1.3 链接
	1.4 执行sql 
2、搭建服务
	2.1、导入express npm i express
	2.2、创建服务
	2.3、开启服务 
*/

var express = require("express");
var app = express();
app.use(express.json());
app.use(express.static("./public/public")) //定义静态资源的位置
var mysql = require('mysql');

//导入cookie   npm i cookie-parser
var cookieParser = require('cookie-parser');
var cookie = cookieParser();
//导入session  npm  i express-session
var expressSession = require('express-session');
app.use(expressSession({
	resave: true, //每次是否都刷新存储器
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60
	}, //1个小时过期
	secret: "mdy" //秘钥
}))

var conn = mysql.createConnection({
	"host": "localhost",
	"user": "root",
	"password": "123456",
	"database": "feed"
})
conn.connect(function (err) {
	if (!err) {
		console.log("链接成功");
	}
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
//登录接口
app.post('/api/login', function (req, res) {
	var sql = `select * from user 
	where userName='${req.body.userName}' and password='${req.body.password}'`
	conn.query(sql, function (err, data) {
		if (!err) {
			if (data.length > 0) {
				//7天免登录，存cookie
				res.cookie("userName", req.body.userName, { maxAge: 1000 * 60 * 60 * 24 * 7 });
				//session
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
//注销接口
app.post('/api/logout', function (req, res) {
	req.session.destroy(); //销毁session
	res.json({
		"errCode": 0
	})
})
//是否登录接口
app.get('/api/isLogin', function (req, res) {
	if (req.session["userName"]) {
		var sql = `select * from user where userName=${req.session["userName"]}`
		conn.query(sql, function (err, data) {
			if (!err) {
				res.json({
					"errCode": 0,
					"data": data
				})
			} else {
				res.json({
					"errCode": 2,
					"msg": "用户还未注册"
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





//查询接口
app.get("/api/userList", function (req, res) {
	var sql = 'select * from user';
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

//分页接口
app.get("/api/userPage", function (req, res) {
	var size = req.query.size || 3; //每页显示的条数
	var currentPage = req.query.currentPage || 1; //当前页码
	var sql = `select * from user limit ${(currentPage - 1) * size},${size}`;

	conn.query(sql, function (err, data) {
		if (!err) {
			var sql2 = "select count(*) as total from user";
			conn.query(sql2, function (err2, data2) {
				if (!err2) {
					// [{"total":total}]
					var total = data2[0].total; //总条数
					//总页码=Math.ceil(总条数/size)
					var totalPage = Math.ceil(total / size); //总页码
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
						"msg": "查询总行数失败",
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

//根据id查询接口
app.get("/api/userList/:id", function (req, res) {
	var sql = `select * from user where userId=${req.params.id}`;
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

//根据姓名查询接口
app.get("/api/userListByName", function (req, res) {
	var sql = `select * from user where userName like '%${req.query.userName}%'`;
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

//删除接口
app.delete("/api/deleteUser/:id", function (req, res) {
	var sql = `delete from user where userId=${req.params.id}`;
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

//修改接口
app.put("/api/updateUser/:id", function (req, res) {
	var sql =
		`UPDATE user SET userName ='${req.body.userName}', sex ='${req.body.sex}' , address = '${req.body.address}' , password = '${req.body.password}' , phone = '${req.body.phone}' WHERE userId = ${req.params.id}`;
	conn.query(sql, function (err, data) {
		if (!err) {
			res.json({
				"errCode": 0,
				"msg": "修改成功"
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

//添加接口
app.post("/api/addUser", function (req, res) {
	var sql =
		`INSERT INTO user (userName, address, password, phone) VALUES ('${req.body.userName}', '${req.body.address}', '${req.body.password}', '${req.body.phone}')`;
	conn.query(sql, function (err, data) {
		if (!err) {
			res.json({
				"errCode": 0,
				"msg": "添加成功"
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

app.listen(8086, function () {
	console.log("启动成功");
})
app.post('', function (req, res) {
	let sql = `insert into ''`;
	conn.query(sql, function (err, data) {
		if (!err) {
			res.json({
				errCode: 0,
				msg: '添加成功',
				data: data
			})
		} else {
			res.json({
				errCode: 1,
				msg: '添加失败',
				err: err
			})
		}
	})
})
