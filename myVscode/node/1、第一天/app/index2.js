// let utils = require("./utils");
// console.log(utils.max(8, 10));

// let { max, min } = require("./utils");
// console.log(max(10, 20), min(1, 2))

// let http = require("axios");
// http.get("https://520mg.com/mi/list.php?page=1").then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(err);
// })

// var fs = require('fs');
// var res = fs.readFileSync('./qiku.txt', 'utf-8');
// console.log(1);
// console.log(res);
// console.log(2);


// console.log(1)
// fs.readFile('./qiku.txt', 'utf-8', function (err, res) {
//     if (!err) {
//         console.log(res)
//     }
// })
// console.log(2);
// let fs = require("fs");
// console.log(1111);
// let res = fs.writeFileSync('./html.txt', '你好');
// // console.log(res);
// console.log(22222)

let fs = require('fs');
console.log(111);
fs.writeFile('./html.txt', 'node.js', function (err) {
    if (!err) {
        console.log("写入成功");
    }
})
console.log(2222)
