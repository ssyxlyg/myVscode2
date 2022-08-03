var _email = document.getElementById("email");//获取输入框节点
var _emailInfo = document.getElementById("emailInfo");//获取提示框节点

// 邮箱验证
_email.onblur = function () {
    // 输出正确重置为空
    _emailInfo.innerHTML="";
    // 获取输入框的值
    var email = _email.value;
    // 非空判断
    if (email == "" || email == undefined) {
        _emailInfo.innerHTML = "不能为空";
        return;
    }
    // 判断是否含有@
    if (!email.includes("@")) {
        _emailInfo.innerHTML = "必须包含@";
        return;
    }
    // // 判断是否含有.
    if (!email.includes(".")) {
        _emailInfo.innerHTML = "必须包含.";
        return;
    }
    //判断位置
    if(email.indexOf("@")>email.indexOf(".")){
        _emailInfo.innerHTML=".必须在@之后";
        return;
    }

}

var _pwd=document.getElementById("pwd");
var _pwdInfo=document.getElementById("pwdInfo");
// 密码验证
_pwd.onblur = function () {
    // 输出正确重置为空
    _pwdInfo.innerHTML="";
    // 获取输入框的值
    var pwd = _pwd.value;
    // 非空判断
    if (pwd == "" || pwd == undefined) {
        _pwdInfo.innerHTML = "不能为空";
        return;
    }
    // 限定长度
    if (pwd.length<6) {
        _pwdInfo.innerHTML = "不能小于6";
        return;
    }
    

}