var _head = document.querySelector(".head");
var _head2 = document.querySelector(".head2");

window.addEventListener("scroll", function () {

    //1、wrapper
    //window的滚动距离
    var windowY = window.pageYOffset;
    // console.log(windowY);
    //2、active
    if (windowY >= 400) {
        _head.style.display = "none";
        _head2.style.display = "block";


    } else {
        _head.style.display = "flex";
        _head2.style.display = "none";

    }
})


var _little = document.querySelector(".little"); //小图框
var _mark = document.querySelector(".mark");  //小放大镜
var _great = document.querySelector(".great"); //大放大镜
var _img = document.querySelector(".great img"); //大图

_little.onmouseover = function () {
    _great.style.display = "block";
    _mark.style.display = "block";
}
_little.onmouseout = function () {
    _great.style.display = "none";
    _mark.style.display = "none";
}
_little.onmousemove = function (event) {
    //计算小放大镜的x，y
    var dx = event.pageX - _little.offsetLeft - _mark.offsetWidth / 2;
    var dy = event.pageY - _little.offsetTop - _mark.offsetHeight / 2;
    //到左边
    if (dx <= 0) {
        dx = 0;
    }
    // 到最右边
    if (dx >= _little.offsetWidth - _mark.offsetWidth) {
        dx = _little.offsetWidth - _mark.offsetWidth;
    }
    _mark.style.left = dx + "px";
    //到上边
    if (dy <= 0) {
        dy = 0;
    }
    //到下边
    if (dy >= _little.offsetHeight - _mark.offsetHeight) {
        dy = _little.offsetHeight - _mark.offsetHeight;
    }
    _mark.style.top = dy + "px";

    _img.style.left = -3 * dx + "px";
    _img.style.top = -3 * dy + "px";
}

var _sofa_color = document.querySelector(".sofa_color");
var _span1 = document.querySelectorAll(".sofa_color span:not(.text)");

_sofa_color.onclick = function (event) {
    var target = event.srcElement || event.target;
    console.log(target)

    if (target.nodeName == "IMG") {
        var index = Array.from(_span1).findIndex(function (tag) {
            return tag.children[0] == target;
        })
        console.log(index);
        for (var i = 0; i < _span1.length; i++) {
            if (i == index) {
                _span1[i].style.border = "2px solid black";
                _span1[i].children[1].style.display = "block"

            } else {
                _span1[i].style.border = "1px solid lightgray";
                _span1[i].children[1].style.display = "none"
            }
        }
    }
}


var _skudesc_box = document.querySelector(".skudesc_box");
var _skudesc_box2 = document.querySelector(".skudesc_box2");

var _span2 = document.querySelectorAll(".skudesc_box span:not(.text)");
var _span22 = document.querySelectorAll(".skudesc_box2 span:not(.text)");


_skudesc_box.onclick = function () {
    demo1(event);
}
_skudesc_box2.onclick = function () {
    console.log("1111")
    demo2(event);
}
function demo1(event) {


    // console.log(_span2 + "1111");
    var target = event.srcElement || event.target;


    if (target.nodeName == "LABEL") {
        var index = Array.from(_span2).findIndex(function (tag) {
            return tag.children[0] == target;
        })
        // console.log(index);
        for (var i = 0; i < _span2.length; i++) {
            if (i == index) {
                _span2[i].style.border = "2px solid black";
                _span2[i].children[1].style.display = "block"

            } else {
                _span2[i].style.border = "1px dashed lightgray";
                _span2[i].children[1].style.display = "none"
            }
        }
    }
}
function demo2(event) {


    // console.log(_span2 + "1111");
    var target = event.srcElement || event.target;


    if (target.nodeName == "LABEL") {
        var index = Array.from(_span22).findIndex(function (tag) {
            return tag.children[0] == target;
        })
        // console.log(index);
        for (var i = 0; i < _span22.length; i++) {
            if (i == index) {
                _span22[i].style.border = "2px solid black";
                _span22[i].children[1].style.display = "block"

            } else {
                _span22[i].style.border = "1px dashed lightgray";
                _span22[i].children[1].style.display = "none"
            }
        }
    }
}


var _get_count = document.querySelector(".get_count");

var _btn = document.querySelectorAll(".btn button");
var _add_gwc = document.querySelector(".add_gwc");
/*****************************/
var nextId = localStorage.nextId || 0;
var ary;
function getInfo() {
    // 考虑第一次没有，需要定义空数组
    //从localstroge中取出
    return localStorage.taskList == undefined ? [] : JSON.parse(localStorage.taskList);
}

// 更新数据
function updateInfo() {
    //更新数据
    localStorage.taskList = JSON.stringify(ary);
    //更新nextId
    localStorage.nextId = nextId;
}
var _img2 = document.querySelector(".little img");
var _price = document.querySelector(".price");
console.log(_img.src)
_price1 = _price.firstElementChild.innerText.slice(1);
_price2 = _price.children[1].innerText.slice(1);

console.log(_price1);
console.log(_price2);


_add_gwc.onclick = function () {
    location.href = 'shopping.html';
    ary = getInfo();

    var obj = {
        nextId: nextId++,
        price1: _price.firstElementChild.innerText.slice(1),
        price2: _price.children[1].innerText.slice(1),

        imgSrc: _img2.src
    }
    ary.unshift(obj);
    updateInfo();

}
/***************************/
_btn.forEach(function (item) {
    item.onclick = function (param) {
        var num = _get_count.firstElementChild.value * 1;


        var param = item.innerText;
        console.log(num);
        num = eval(num + param + 1);
        _get_count.firstElementChild.value = num;
        if (num <= 0) {
            // console.log(_btn[1])
            _btn[1].disabled = true;
        } else {
            _btn[1].disabled = false;

        }
    }
})


var _img_container = document.querySelector(".details_02 .img_container");

// console.log(_img_container)
_img_container.onmouseover = function (event) {
    var num = 0;

    var target = event.scrElement || event.target;
    if (target.nodeName == "LI") {

        var id = setInterval(function () {
            // target.lastElementChild.style.display = "inline-block";

            target.lastElementChild.style.width = num++ + "px";
            if (num >= 60) {
                clearInterval(id);
                target.lastElementChild.style.width = "60px"
            }
        }, 5)

    }
}