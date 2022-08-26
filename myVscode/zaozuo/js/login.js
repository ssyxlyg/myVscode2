var _method1 = document.querySelector(".method1");
var _method2 = document.querySelector(".method2");
var _inp_tel = document.querySelector(".inp_tel");
var _inp_tel2 = document.querySelector(".inp_tel2");
var _yzm = document.querySelector(".yzm");
var _pwd = document.querySelector(".pwd");
var _form = document.querySelector("form");
var _to_wechat = document.querySelector(".to_wechat");
var _forget = document.querySelector(".forget");
var _sub = document.querySelector(".sub");

// 切换
_method1.onclick = function () {
    _inp_tel.style.display = "block";
    _yzm.style.display = "block";
    _to_wechat.style.display = "block";

    _inp_tel2.style.display = "none";
    _pwd.style.display = "none";
    _forget.style.display = "none";
    this.style.color = "black";
    _method2.style.color = "#a0a0a0"
}
_method2.onclick = function () {
    _inp_tel2.style.display = "block";
    _pwd.style.display = "block";
    _forget.style.display = "flex";

    _inp_tel.style.display = "none";
    _yzm.style.display = "none";
    _to_wechat.style.display = "none";
    this.style.color = "black";
    _method1.style.color = "#a0a0a0"
}
// 快捷登录
_inp_tel.children[0].onfocus = function () {
    _inp_tel.style.borderBottom = "1px solid black";
}
_inp_tel.children[0].onblur = function () {
    _inp_tel.style.borderBottom = "1px solid #D2D2D2";
}

_yzm.children[0].onfocus = function () {
    this.style.borderBottom = "1px solid black";
}
_yzm.children[0].onblur = function () {
    this.style.borderBottom = "1px solid #D2D2D2";

}

function telYz() {
    var rel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var val = _inp_tel.children[0].value;
    console.log(val);
    var yzm = _yzm.children[1];

    if (rel.test(val)) {
        yzm.style.backgroundColor = "black";
        yzm.disabled = false;

        return true;
    } else {
        alert("无效手机号");
        _inp_tel.children[0].value = "";
        yzm.style.backgroundColor = "#D2D2D2";
        return false;
    }
}
_inp_tel.children[0].addEventListener('blur', telYz);


// _inp_tel.children[0].addEventListener('blur', function () {
//     if (_inp_tel.children[0].value != "") {
//         yzm.style.backgroundColor = "#D2D2D2";
//         yzm.disabled = true;
//     }
// })


_yzm.children[0].addEventListener('input', function () {
    var val = this.value;
    var rel = /^\d{4}$/

    if (rel.test(val) && telYz()) {
        _sub.children[0].style.backgroundColor = "black"
        _sub.children[0].disabled = false;
        _yzm.children[1].disabled = true;
        _yzm.children[1].style.backgroundColor = "#D2D2D2"

    } else {
        _sub.children[0].style.backgroundColor = "#D2D2D2";
    }
})
_yzm.children[0].addEventListener('blur', function () {
    var val = this.value;
    var rel = /^\d{4}$/

    if (rel.test(val) && telYz()) {
        _sub.children[0].style.backgroundColor = "black"
        _sub.children[0].disabled = false;
        _yzm.children[1].disabled = true;
        _yzm.children[1].style.backgroundColor = "#D2D2D2"

    } else {
        _sub.children[0].style.backgroundColor = "#D2D2D2";
    }
})

_yzm.children[1].addEventListener('click', function () {
    if (telYz()) {
        this.style.backgroundColor = "#D2D2D2";
        // this.disabled = true;
        // _inpYzm.disabled = false;
        this.disabled = true;
        var val = this.innerText = 60 + "s";
        val = val.substr(0, 2) * 1;
        console.log(val)
    }
    var id = setInterval(function () {
        val--;
        _yzm.children[1].innerText = val + "s";
        if (val <= 0) {
            _yzm.children[1].innerText = "重新发送";
            _yzm.children[1].disabled = false;
            _yzm.children[1].style.backgroundColor = "black";
            clearInterval(id);
        }

    }, 1000)
})
var _form = document.querySelector("form");
document.onkeydown = function (event) {
    if (event.keyCode == 13) {
        _form.submit();
    }
}

// 密码登录
_inp_tel2.children[0].onfocus = function () {
    _inp_tel2.style.borderBottom = "1px solid black";
}
_inp_tel2.children[0].onblur = function () {
    _inp_tel2.style.borderBottom = "1px solid #D2D2D2";
}

_pwd.children[0].onfocus = function () {
    _pwd.style.borderBottom = "1px solid black";
}
_pwd.children[0].onblur = function () {
    _pwd.style.borderBottom = "1px solid #D2D2D2";

}

function telYz2() {
    var rel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var val = _inp_tel2.children[0].value;
    console.log(val);
    var yzm = _yzm.children[1];
    if (rel.test(val)) {
        return true;
    } else {
        alert("无效手机号");
        _inp_tel2.children[0].value = "";
        return false;
    }
}
_inp_tel2.children[0].addEventListener('blur', telYz2);
function pwdYz() {
    var rel = /^[a-zA-Z]\w{5,17}$/
    var val = _pwd.children[0].value;
    console.log(val);
    // console.log(rel.test(val));
    if (rel.test(val) && telYz2()) {
        _sub.children[0].style.backgroundColor = "black";
        _sub.children[0].disabled = false;
    }
}
_pwd.oninput = function () {
    pwdYz();
}
