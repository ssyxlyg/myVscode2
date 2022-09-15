var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'feed',
    user: 'root',
    password: '123456'
})
pool.getConnection(function (err, connection) {
    if (!err) {
        console.log('与mysql数据库建立连接成功');
    }
})  