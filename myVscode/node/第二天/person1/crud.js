//搭建服务
//11、导入express  npm  i express
var express = require('express');
var app = express();

//1、导入mysql  npm i mysql
var mysql = require('mysql');
//2、创建链接
var conn = mysql.createConnection({
	"host": "localhost",
	"user": "root",
	"password": "root",
	"database": "feed"
})

//3、链接
conn.connect(function(err) {
	if (!err) {
		console.log("链接成功");
	}
})

//4、用户发请求时执行sql
// 查询接口
app.get('/api/userList', function(req, res) {
	//sql查询操作操作
	var sql = 'select * from user';
	conn.query(sql, function(err, data) {
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
				"err":err
             })
		}
	})
})

// 添加接口
//第三方中间件
app.use(express.json());
app.post('/api/addUser', function(req, res) {
	//sql查询操作操作
	var sql = `INSERT INTO user (userName, address, password, phone) VALUES ('${req.body.userName}', '${req.body.address}', '${req.body.password}', '${req.body.phone}')`;
	conn.query(sql, function(err, data) {
		if (!err) {
			res.json({
				"errCode": 0,
				"msg": "添加成功"
			})
		} else {
             res.json({
             	"errCode": 1,
             	"msg": "添加失败",
				"err":err
             })
		}
	})
})


//修改用户密码
app.put("/api/updateUser/:id",function(req,res){
    var sql=`update user set password=${req.body.password} where userId=${req.params.id}`;
    conn.query(sql,function(err,data){
        if(!err){
             res.json({
                "errCode":0,
                "msg":"修改成功"
             })
        }else{
            res.json({
                "errCode":0,
                "msg":"修改失败",
                "err":err
             })
        }
    })
})

//删除用户
app.delete("/api/deleteUser/:id",function(req,res){
    var sql=`delete from user where userId=${req.params.id}`;
    conn.query(sql,function(err,data){
        if(!err){
             res.json({
                "errCode":0,
                "msg":"删除成功"
             })
        }else{
            res.json({
                "errCode":0,
                "msg":"删除失败",
                "err":err
             })
        }
    })
})


app.listen(8086, function() {
	console.log("服务启动成功");
})
