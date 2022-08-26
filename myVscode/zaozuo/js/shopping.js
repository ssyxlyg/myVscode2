var nextId = localStorage.nextId || 0;

function updateInfo() {
    //更新数据
    localStorage.taskList = JSON.stringify(ary);
    //更新nextId
    localStorage.nextId = nextId;
}

//获取数据
var ary;
function getInfo() {
    // 考虑第一次没有，需要定义空数组
    //从localstroge中取出
    return localStorage.taskList == undefined ? [] : JSON.parse(localStorage.taskList);
}

console.log(getInfo())
var _cartIndex = document.querySelector(".cart-index");
console.log(_cartIndex)
function show() {
    ary = getInfo();
    for (var item of ary) {
        var _ul = document.createElement("ul");
        _ul.innerHTML = `
<li class="ch_box" name="${item.nextId}"><input type="checkbox"></li>
<li>
    <img src="${item.imgSrc}" alt="">
</li>
<li class="theme">
    <div>
        <h4>
            半月湾行政沙发
        </h4>
        <p>

            <span>海灰/</span>
            <span>精简版/</span>
            <span>转角四人座左扶手/</span>
        </p>
    </div>
</li>
<li class="get_time">
    <div>
        预计<em>2022-10-03</em>发货
    </div>
</li>
<li class="_price">
    <div>
        <span>¥${item.price1}</span>
        <label>¥${item.price2}</label>
    </div>
</li>
<li class="_count">
    <div class="_count_inner1">
        <button>-</button>
        <input type="text" value="1">
        <button>+</button>
    </div>
</li>
<li class="del">
    <span>修改</span>
    <span>删除</span>
</li>
`
    }
    _cartIndex.appendChild(_ul);
    _inputs = document.querySelectorAll(".cart-index input[type=checkbox]");
    // updateInfo();
}
show();
/**************************/
_cartIndex.onclick = function (event) {
    var target = event.srcElement || event.target;


    ary = getInfo();
    console.log(nextId);

    // var nextId;
    if (target.nodeName == "SPAN") {

        var index = ary.findIndex(function (item) {
            return item.nextId == nextId;
        })
        ary.splice(index, 1);
        console.log(target.parentNode.parentNode)
        target.parentNode.parentNode.remove();
        updateInfo();
        show();
    }
}

/***********************/
/*结算部分定位*/
var _total = document.querySelector(".total");
var _cart_part = document.querySelector(".cart-part-list")
_total.style.marginTop = window.innerHeight - _total.clientHeight - _cart_part.clientHeight + "px";
window.onscroll = function () {
    var _top = window.pageYOffset - _total.clientHeight;
    _total.style.marginTop = window.innerHeight - _total.clientHeight - _cart_part.clientHeight + window.pageYOffset + "px";
    if (window.pageYOffset >= 30) {
        _total.style.marginTop = 30 + "px"
        return
    }
}
/*全选反选效果的实现*/
var _prev = document.querySelector(".prev");
var _inputs = document.querySelectorAll(".cart-index input[type=checkbox]");
console.log(_inputs)
var _inp = _prev.firstElementChild.firstElementChild;
var _i = document.querySelector(".prev i")


_inp.onclick = function () {
    var status = _inp.checked;
    if (status == false) {
        _i.innerHTML = 0;
    } else {
        _i.innerHTML = _inputs.length;
    }
    // console.log(status);
    _inputs.forEach(function (tag) {
        tag.checked = status;
    })
    sum();
    Btn();
}
_inputs.forEach(function (tag) {
    tag.onclick = function () {

        var array = Array.from(_inputs).filter(function (item) {
            return item.checked == true;
        })
        console.log(array);
        _i.innerHTML = array.length;
        if (array.length == _inputs.length) {
            _inp.checked = true;
        } else {
            _inp.checked = false;
        }
        sum();
        Btn();
        // show();

        _inputs = document.querySelectorAll(".cart-index input[type=checkbox]");

    }
})
/*商品加减按钮的实现*/
var _count_inner1 = document.querySelectorAll("._count_inner1");
var _ul = document.querySelectorAll(".count_inner1 ul");
_count_inner1.forEach(function (tag) {
    var cols = tag.firstElementChild;
    var add = tag.lastElementChild;
    var inp = tag.children[1];
    var num = inp.value * 1;


    cols.onclick = function () {
        num -= 1;
        inp.value = num;

        if (num <= 0) {
            this.disabled = true;
        }
        sum();
        Btn();
    }
    add.onclick = function () {
        cols.disabled = false;
        num += 1;
        inp.value = num
        sum();
        Btn();
    }
})
/*商品总价*/
var _sumPrice = document.querySelector(".back .shifu");
var _sumPrice2 = document.querySelector(".back .real_price");
var _yh = document.querySelector(".back .real_price2");


console.log(_sumPrice.innerText)
function sum() {
    var sum = 0;
    var sum2 = 0;
    var _price = document.querySelectorAll("._price");
    // console.log(_price.parentNode)
    var a = Array.from(_price).filter(function (item) {
        return item.parentNode.firstElementChild.firstElementChild.checked == true;
    })
    // console.log(a)

    Array.from(a).forEach(function (tag) {
        var tal = tag.firstElementChild.firstElementChild.innerText;
        var tal2 = tag.firstElementChild.lastElementChild.innerText;
        var _inp = tag.nextElementSibling.children[0].children[1].value;
        // console.log(_inp);
        console.log(tag.parentNode.firstElementChild.firstElementChild.checked)

        tal = tal.slice(1) * _inp;
        tal2 = tal2.slice(1) * _inp;
        // console.log(tal);
        sum += tal;
        sum2 += tal2
        console.log(sum);
    })
    _sumPrice.innerText = `¥${sum}`;
    _sumPrice2.innerText = `¥${sum2}`;
    _yh.innerText = `¥${sum2 - sum}`
}
sum();
/*删除商品*/
var _del = document.querySelectorAll(".del");
_del.forEach(function (tag) {
    tag.lastElementChild.onclick = function () {
        if (confirm("确认删除吗？"))
            tag.parentElement.remove();
        sum();
        _inputs = document.querySelectorAll(".cart-index input[type=checkbox]");
        show();

    }

})
var _btn_xd = document.querySelector(".back button");
console.log(_btn_xd)

function Btn() {
    var _tar = _sumPrice.innerText.slice(1);
    console.log(_tar);
    if (_tar <= 0) {
        _btn_xd.disabled = true;
        _btn_xd.style.backgroundColor = "#d2d2d2"
    } else {
        _btn_xd.disabled = false;
        _btn_xd.style.backgroundColor = "black"
    }
}
Btn();
/************************************/
