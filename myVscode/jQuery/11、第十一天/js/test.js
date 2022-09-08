export let a=1;   //按需导出

export let user={"name":"张三","age":20}
export function getInfo(a,b){
	return a+b;
}

let b=2;
let str="奇酷";
export {b,str};  //同时导出多个

//默认导出

 let d=10;
 export default d;  //默认导出,在本文件中只能有一个