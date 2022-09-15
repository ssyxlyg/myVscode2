let mysql = require('mysql');

let conn = mysql.createConnection({
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
let find = `select * from user`;
let add = `insert into user(userName, address, password, phone) value('黄哈哈','长沙',123,'159')`;
let update = `update user set address="襄阳" where userId=4`;
let del = `delete from user where userId=8`

conn.query(add, function (err, res) {
    if (!err) {
        console.log(res);
    }
})

conn.end(function (err) {
    if (!err) {
        console.log("断开链接");
    }
})