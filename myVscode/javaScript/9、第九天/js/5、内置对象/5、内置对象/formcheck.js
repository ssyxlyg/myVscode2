//1、获取相关的标签
var _email=document.querySelector("#email"); //邮箱输入框
var _emailInfo=document.querySelector("#emailInfo"); //邮箱提示框
var _pwd=document.querySelector("#pwd"); //邮箱输入框
var _pwdInfo=document.querySelector("#pwdInfo"); //邮箱提示框
var _repwd=document.querySelector("#repwd"); //重复密码输入框
var _repwdInfo=document.querySelector("#repwdInfo"); //重复密码提示框

var _uname=document.querySelector("#uname"); //用户名输入框
var _unameInfo=document.querySelector("#unameInfo"); //用户名提示框

//邮箱验证
_email.onblur=function(){
	//每次失去焦点前先清空提示
   _emailInfo.innerHTML="";
   //1、获取用户输入的邮箱
   var email=_email.value;
   console.log(email);
   //2、验证邮箱是否复合格式
   //非空验证
   if(email==""||email==undefined){
	   _emailInfo.innerHTML="邮箱不能为空";
	   return;  //跳出函数
   }
   if(!email.includes("@")){
   	   _emailInfo.innerHTML="邮箱需要包含@";
	   return;
   }
   if(!email.includes(".")){
   	   _emailInfo.innerHTML="邮箱需要包含.";
   	   return;
   }
   if(email.indexOf("@")>email.indexOf(".")){
	   _emailInfo.innerHTML="@必须在.前";
	   return;
   }
}
//密码验证
var pwd;
_pwd.onblur=function(){
	//每次失去焦点前先清空提示
	_pwdInfo.innerHTML="";
	//1、获取用户输入的邮箱
	pwd=_pwd.value;
	if(pwd==""|| pwd==undefined){
		_pwdInfo.innerHTML="密码不能为空";
		return
	}
	if(pwd.length<6){
		_pwdInfo.innerHTML="密码不少于6位";
		return
	}
}


//重复密码验证
_repwd.onblur=function(){
	//每次失去焦点前先清空提示
	_repwdInfo.innerHTML="";
	//1、获取用户输入的邮箱
	var repwd=_repwd.value;
	if(repwd==""|| repwd==undefined){
		_repwdInfo.innerHTML="密码不能为空";
		return;
	}
	if(repwd!=pwd){
		_repwdInfo.innerHTML="两次密码不一致";
		return
	}
}


//用户名验证
_uname.onblur=function(){
	var isNumber=true;  //默认不含数字
	//每次失去焦点前先清空提示
	_unameInfo.innerHTML="";
	//1、获取用户输入的邮箱
	var uname=_uname.value;
	if(uname==""|| uname==undefined){
		_unameInfo.innerHTML="用户名不能为空";
		return;
	}
	for (var i = 0; i < uname.length; i++) {
		var ch=uname.charAt(i);
		//如果是数字，返回false
		if(!isNaN(ch)){
			isNumber=false;
			break;
		}
	}
	if(!isNumber){
		_unameInfo.innerHTML="用户名不能含有数字";
		return;
	}
}
