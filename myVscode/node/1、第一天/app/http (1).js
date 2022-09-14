//引入http模块
let http=require('http');
//引入url:获取路由参数   npm i url
let url=require('url');

//创建服务
// req:request请求； res:response响应
let server=http.createServer(function(req,res){
	//从请求中拿到路由参数
	let params=url.parse(req.url);
	res.statusCode=200;  //正确的状态吗
	//设置请求头
	res.setHeader('Content-Type','application/json;charset=utf-8')
	//给前端的响应结果
	res.end(`{"errCode":0,"msg":"${params.search}"}`);
})

//开启服务
server.listen(8888,function(){
	console.log("服务启动成功");
})

/* 访问:
     localhost:8888
	 127.0.0.1:8888
	 192.168.13.8:8888
	 查看本机ip:ipconfig 
停止服务:ctrl+c
*/