let express = require('express');
let app = express();

// 相应为页面
app.get('/', function (req, res) {
    res.send('<h1>首页</h1>')
})

app.get("/about", function (req, res) {
    res.send('<h1>关于</h1>')

})

// 相应为json数据
app.use(express.static("./public"));//定义静态资源位置

app.get('/user', function (req, res) {
    res.json({ "errCode": 0, "msg": "hello", data: ['张三', "李四"] })
})

// 相应到模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/list', function (req, res) {
    res.render("list", { "errCode": 0, "title": "用户列表", "data": ['张三', '李四', '王五'] })
})

// 启动服务
app.listen(8082, function () {
    console.log("启动成功");
})