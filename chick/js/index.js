// 轮播图 
var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//等同于以下设置
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



let listBox = document.getElementsByClassName('list-box')[0];
let TheList = document.getElementsByClassName('The-list')
let box = document.getElementsByClassName('box');
let data = null;
let str = ``;
// str = Array.from(str)

var xhr = new XMLHttpRequest;
xhr.open('get', 'data.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText)
    }
    bindHTML(data)
}
xhr.send();

function bindHTML(data) {
    for (let i = 0; i < 2; i++) {
        let index = Math.round(Math.random() * 9)
        data.forEach((item, index) => {
            str += `<div class="The-list" id="divs">
            <a href="javascript:;">
                <h3 class="The-h">${item.title}</h3>
                <div class="The-p">
                    ${item.p}
                </div>
            </a>
            <div class="The-buttom">
                    <span><a href="javascript:;">${item.author}</a></span>
                    <span><span class="The-sz">${item.hot}</span><img src="${item.img}" alt="" srcset=""></span>
            </div>
        </div>`
        });
    }
    for (let i = 0; i < 50; i++) {
        box[i].innerHTML = str;
        TheList[i].style.height = Math.round(Math.random() * (450 - 250) + 300) + 'px'
    }
}





// 回到顶部
let surTop = document.getElementById('top');
let nav = document.getElementsByClassName('nav')[0];
let navlogo = document.getElementsByClassName('nav-logo')[0];
navlogo.style.background = '#ffd47a'
console.log(navlogo);
window.onscroll = function (){
    let winH = utils.win('clientHeight')// 浏览器的可视区域的高度
    let winT = utils.win('scrollTop') //获取浏览器滚动条的高度
   if(winT>=winH){
    surTop.style.display = 'block' 
   }else{
       surTop.style.display = 'none'
   }
   if(winT>=320){
    nav.style.background = '#fff'
    navlogo.style.background = '#fff'
    // navlogo.onmouseenter = function(){
    //     navlogo.style.background = '#f5f3f3'
    // }
    // navlogo.onmouseleave = function(){
    //     navlogo.style.background = ' #fff'
    // }
   }else{
    nav.style.background = '#ffd47a'
    navlogo.style.background = '#ffd47a'
    // navlogo.onmouseenter = function(){
    //     navlogo.style.background = '#ffbb28'
    // }
    // navlogo.onmouseleave = function(){
    //     navlogo.style.background = '#ffd47a'
    // }
   }
}
surTop.onclick = function (){
    let winT  = utils.win('scrollTop');
    let part = winT/20;
    let itemr = setInterval(function (){
        winT -= part
        utils.win('scrollTop',winT);
        if(winT <= 0){
            clearInterval(itemr)
        }
    },20)
}



// 导航固定
