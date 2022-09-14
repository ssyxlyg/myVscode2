//1、导入express  npm i express
let express=require('express');
var app=express();


//2、写接口
//直接响应为页面
app.get('/',function(req,res){
	res.send('<h1>首页页面</h1>')
})

app.get('/about',function(req,res){
	res.send('<h1>关于页面</h1>')
})

//响应为json数据，前后端分离
//定义静态资源的位置
app.use(express.static("./public"))
app.get('/user',function(req,res){
	res.json({"errCode":0,"msg":"查询成功","data":['张三','李四','王五']})
})

//响应到模板引擎,前后端不分离
//1、安装模板引擎 npm i ejs
app.set('views','./views');
//2、定义模板引擎的位置
app.set('view engine','ejs');
//3、使用模板引擎
app.get('/list',function(req,res){
	//第一个参数必须和文件名一致
	res.render("list",{"errCode":0,"title":"用户列表","data":['张三','李四','王五']})
})


//3、启动服务
app.listen(8082,function(){
	console.log("启动成功");
})