//悬浮商品效果
var _con = document.querySelectorAll(".con");

//时令推荐
_con.forEach(function (tag) {
    var _li_cover = tag.lastElementChild;

    tag.onmouseover = function () {

        _li_cover.style.display = "block";
        this.style.opacity = 0.3;
        this.children[1].style.display = "none"
    }

    tag.onmouseout = function () {
        _li_cover.style.display = "none";
        this.style.opacity = 1;
        this.children[1].style.display = "block"
    }
    tag.onclick = function () {
        location.href = 'details.html'
    }

})


//沙发
_con.forEach(function (tag) {
    var _li_cover = tag.lastElementChild;

    tag.onmouseover = function () {

        _li_cover.style.display = "block";
        this.style.opacity = 0.3;
        this.children[1].style.display = "none"
    }

    tag.onmouseout = function () {
        _li_cover.style.display = "none";
        this.style.opacity = 1;
        this.children[1].style.display = "block"
    }

})
//固定定位部分，下滑出现回顶部
var _ul = document.querySelector(".download ul");
var _head_top = document.querySelector(".head_top");
var _wrapper = document.querySelector(".wrapper");
var _kf = document.querySelector(".kf");
window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    // var _label = document.createElement("label");
    // _ul.lastElementChild.removeChild(_label);
    if (window.pageYOffset >= 800) {
        _ul.lastElementChild.style.display = "block";
        _kf.style.display = "block";
        _head_top.style.display = "none";
        _wrapper.style.display = "block"
    }
    else {
        _ul.lastElementChild.style.display = "none";
        _kf.style.display = "none";
        _head_top.style.display = "block";
        _wrapper.style.display = "none"



    }
})
