//1、导入mysql  npm i mysql
let mysql=require('mysql');
//2、创建链接
let conn=mysql.createConnection({
	"host":"localhost",
	"user":"root",
	"password":"root",
	"database":"feed"
})

//3、打开链接
conn.connect(function(err){
	if(!err){
		console.log("链接成功");
	}
})
//4、执行sql
// let sql='select * from user'
// let sql=`update user set address="襄阳" where userId=4`
// let sql=`delete from user where userId=9`
let sql=`INSERT INTO user (userName, address, password, phone) VALUES ('刘老根', '象牙山', '123', '3637')`
conn.query(sql,function(err,res){
	if(!err){
		console.log(res);
	}
})

//5、断开链接
conn.end(function(err){
	if(!err){
		console.log("断开链接成功");
	}
})