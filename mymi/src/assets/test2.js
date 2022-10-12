var name = "mumu"; //创建变量
function fun (){  // 创建一个方法
	alert(name);
}
class Person{ // 创建一个类
	constructor(name) {
	    this.name = name;
	}
	say(){
		alert(this.name);
	}
}
function getNode(){
	var img = document.querySelector("img");
	alert(img.src);
}
export {fun,name,getNode}; //导出
export default Person; //默认导出