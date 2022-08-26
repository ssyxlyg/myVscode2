var _form = document.querySelector("form");
var _inpTel = _form.children[2].children[0];
var _inpYzm = _form.children[3].children[0];

_inpTel.addEventListener('focus', function () {
    _form.children[2].style.borderBottom = "1px solid black";
})

_inpTel.addEventListener('blur', function () {
    _form.children[2].style.borderBottom = "1px solid #D2D2D2";
})

_inpYzm.addEventListener('focus', function () {
    this.style.borderBottom = "1px solid black";

})
_inpYzm.addEventListener('blur', function () {
    this.style.borderBottom = "1px solid #D2D2D2";
})

function telYz() {
    var rel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var val = _inpTel.value;
    if (rel.test(val)) {
        var yzm = _form.children[3].children[1];
        yzm.style.backgroundColor = "black";
        yzm.disabled = false;
        return true;
    } else {
        alert("无效手机号");
        _inpTel.value = "";
        yzm.style.backgroundColor = "#D2D2D2";
        return false;
    }
}
_inpTel.addEventListener('blur', telYz);

_inpYzm.addEventListener('input', function () {
    var val = _inpYzm.value;
    var rel = /^\d{4}$/
    // if (rel.test(val){
    //     _form.children[3].children[1].disabled = true
    //     _form.children[3].children[1].style.backgroundColor = "#D2D2D2"
    // }


    if (rel.test(val) && telYz()) {
        _form.children[4].children[0].style.backgroundColor = "black";
        _form.children[3].children[1].style.backgroundColor = "#D2D2D2"
        _form.children[3].children[1].disabled = true


        _form.children[4].children[0].disabled = false;

    } else {
        _form.children[4].children[0].style.backgroundColor = "#D2D2D2";
    }
})

_form.children[3].children[1].addEventListener('click', function () {
    if (telYz()) {
        _inpYzm.disabled = false;
        this.disabled = true;
        this.style.backgroundColor = "#D2D2D2"
        // _form.children[3].children[1].disabled = false;
        var val = _form.children[3].children[1].innerText = 60 + "s";
        val = val.substr(0, 2) * 1;
        console.log(val)
    }
    var id = setInterval(function () {
        val--;
        _form.children[3].children[1].innerText = val + "s";
        if (val < 0) {
            _form.children[3].children[1].innerText = "重新发送";
            clearInterval(id);
        }

    }, 1000)
})