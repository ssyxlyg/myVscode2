// let express = require('express');
// let app = express();


// app.listen(8008, function () {
//     console.log("服务器启动成功");
// })
// 创建数据库链接
// let mysql = require('mysql');
// // 链接数据库
// let conn = mysql.createConnection({
//     "host": "localhost",
//     "user": "root",
//     "password": "123456",
//     "database": "feed"
// })

// conn.connect(function () {
//     console.log("数据库链接成功");
// })

const mysql = require('mysql');

// mysql 连接配置
const mysqlConf = {
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "feed"
}
// 用于保存数据连接实例
var db = null;

var pingInterval;

// 如果数据连接出错，则重新连接
function handleError(err) {
    logger.info(err.stack || err);
    connect();
}

// 建立数据库连接
function connect() {

    if (db !== null) {
        db.destroy();
        db = null;
    }

    db = mysql.createConnection(mysqlConf);
    db.connect(function (err) {
        if (err) {
            logger.info("error when connecting to db,reConnecting after 2 seconds:", err);
            setTimeout(connect, 2000);
        } else {
            console.log("数据库链接成功");
        }
    });
    db.on("error", handleError);

    // 每个小时ping一次数据库，保持数据库连接状态
    clearInterval(pingInterval);
    pingInterval = setInterval(() => {
        // console.log('ping...');
        db.ping((err) => {
            if (err) {
                console.log('ping error: ' + JSON.stringify(err));
            }
        });
    }, 120000);
}

connect();