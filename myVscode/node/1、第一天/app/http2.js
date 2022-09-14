//
let http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {
    let param = url.parse(req, res);
    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    res.end(`{"errCode":0,"msg":"${param.search}"}`)
})

// 开启服务器
server.listen(8888, function () {
    console.log("服务器启动成功");
})
// 访问
// localhost:8888
// 127.0.0.1:8888
// 192.168.13.31:8888