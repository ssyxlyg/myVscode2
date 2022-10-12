var Mock = require('mockjs')
Mock.mock(/api\/users/,{
	msg:"成功",
	status:0,
	"list|10":[
		{
			"name":"@cname",
			"id|+1":996,
			"age|16-80":1,
			"gender|1":[1,2,3],
			"salary|7000-15000.2":1,
			"pic":function(){ 
				return Mock.Random.dataImage("200x100",this.name);
				},
			"tel":/1\d{10}/,
			"email":/[a-z]{2,10}@(126|163|qq|gmail)\.com/,
			// "email":"@email"
			"address":"@county(true)",
			"motto":"@csentence",
			"qq":/\d{5,12}/
			 
		}
	]
	
})
Mock.mock(/api\/category/,
{"time":1599554570577,"code":0,"msg":"成功","data":[{"id":6,"name":"美食","img1":"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01hKSnoI2JJhz2bCgzy_!!2053469401.png"},{"id":4,"name":"居家日用","img1":"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01wYZtCv2JJhz38DYaQ_!!2053469401.png"},{"id":1,"name":"女装","img1":"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01zr98jg2JJhz1JBWPh_!!2053469401.png"},{"id":3,"name":"美妆","img1":"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01CGLh5g2JJhyzWsJN7_!!2053469401.png"},{"id":8,"name":"数码家电","img1":"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01VJj85i2JJhyxOJiE0_!!2053469401.png"},{"id":5,"name":"鞋品","img1":"https://img.alicdn.com/imgextra/i1/2053469401/O1CN017pZ1OF2JJhz3aYStC_!!2053469401.png"},{"id":9,"name":"男装","img1":"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01xbolNx2JJhyzmhcz6_!!2053469401.png"},{"id":10,"name":"内衣","img1":"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01BqMTPD2JJhyzlIlEf_!!2053469401.png"},{"id":2,"name":"母婴","img1":"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Hz4Omt2JJhz3aY3y7_!!2053469401.png"},{"id":14,"name":"家装家纺","img1":"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01b7QRoZ2JJhz1JEGsu_!!2053469401.png"},{"id":7,"name":"文娱车品","img1":"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01dUQnIU2JJhz17fwhe_!!2053469401.png"},{"id":12,"name":"配饰","img1":"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01eGxbf02JJhyxedUyA_!!2053469401.png"},{"id":11,"name":"箱包","img1":"https://img.alicdn.com/imgextra/i1/2053469401/O1CN014aXsNM2JJhyzlL2YQ_!!2053469401.png"},{"id":13,"name":"户外运动","img1":"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01oTRh752JJhyxed61t_!!2053469401.png"}]}
)
Mock.mock(/api\/cake/,{
	list:[
		{pic:"https://image.hongbeibang.com/FqPt6zlDLnkgSVdj13dlZBw7offu?640X900&imageView2/1/w/640/h/896",title:"马卡法龙"},
		{pic:"https://image.hongbeibang.com/FkOF8YhV7kpbF5lmsfZpMHQdnpQV?640X900&imageView2/1/w/640/h/896",title:"马卡法龙2"},
	]
})







// import Mock from 'mockjs'
/* Mock.mock("http://www.mi.com/list/","get",function(){
	return {status:0,name:"mumu",age:18}
}) */
// Mock.mock(/list/,"get",function(){
// 	return {status:0,name:"mumu",age:18}
// })
Mock.mock(/api\/echo/,"post",function(options){
	var data = JSON.parse(options.body);
	// console.log(data,options);
	return {status:0,msg:`${data.name}的年纪是${data.age}`}
})
// // mock 随机数据
// 用户列表
// name:      姓名
// age:     年龄
// gender: 性别
// salary 薪资
// pic:头像,
// tel:电话,
// email 邮箱
// address 地址
// motto:格言,
// qq:612