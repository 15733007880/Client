// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:true,//等同于以下设置
  /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
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



// 文章列表
let listBox = document.getElementsByClassName('list-box')[0];
var TheList;
let divs = document.getElementById('divs');
// console.log(divs);
let box = document.getElementsByClassName('box');
// console.log(box);
let data = null;
let str = ``;
// str = Array.from(str)
var Text;

var xhr = new XMLHttpRequest;
xhr.open('get', 'data.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText)
    }
    bindHTML(data)
}
xhr.send();
// console.log(data);
function bindHTML(data) {
    for (let i = 0; i < 1; i++) {
        data.forEach((item)=>{
            str += `<div class="The-list" id="divs">
            <a href="javascript:;">
                <h4 class="The-h">${item.title}</h4>
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
     
        for (let i = 0; i < 4; i++) {
            TheList = document.getElementsByClassName('The-list');
            TheList = Array.from(TheList)
            // console.log(TheList);
            box[i].innerHTML = str;
        }
    }
    for(var i=0;i<TheList.length;i++){
        // console.log(TheList[i]);
        TheList[i].style.height = Math.round(Math.random()*(450-300)+300) + 'px';
    }
}



// 小火箭一键向上

let nav = document.getElementsByClassName('header-nav')[0];
let surTop = document.getElementById('top');
console.log(surTop);
// console.log(nav)

window.onscroll = function (){
    let winH = utils.win('clientHeight');// 浏览器可视区域的高度
    let winT = utils.win('scrollTop')// 获取浏览器滚动条的高度
    if(winT>=winH){
        surTop.style.display = 'block'
    }else{
        surTop.style.display = 'none'
    }
}
surTop.onclick = function (){
    let winT = utils.win('scrollTop');
    let par = winT/20;
    let itemr = setInterval(function (){
        winT-=par;
        utils.win('scrollTop',winT);
        if(winT<=0){
            clearInterval(itemr)
        }
    },20)
}