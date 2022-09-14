//1、初识node
// console.log("你好node");

/* 2、引用第三方模块
  1、npm  i axios
  2、require('axios') 
*/
   //使用模块
   // var http=require('axios');
   // http.get('https://520mg.com/mi/list.php?page=1')
   // .then(res=>{
	  //  console.log(res.data);
   // }).catch(err=>{
	  //  console.log(err);
   // })
   
   //3、使用自定义模块
   // let  utils=require("./utils");
   // console.log(utils.max(3,6));
   // console.log(utils.min(3,6));
   
   // //利用解构
   // let {max,min}=require("./utils");
   // console.log(max(3,6));
   // console.log(min(3,6));
   
   //4、使用内置模块
   //对本地文件进行读写
    //1、同步读
	var fs=require('fs');
	console.log(1);
	var res=fs.readFileSync("./qiku.txt",'utf-8');
	console.log(res);
	console.log(2);
	//2、异步读取
	console.log(6);
	fs.readFile('./qiku.txt','utf8',function(err,res){
		//如果没有错误结果
		if(!err){
			console.log(res);
		}
	})
	console.log(8);
	
	
	//同步写
	// console.log(11);
	// fs.writeFileSync('./html.txt','web大前端')
	// console.log(22);
	//异步写
	console.log(66);
	fs.writeFile('./html.txt','nodejs',function(err){
		  if(!err){
			  console.log("写入成功");
		  }
	})
	console.log(88);