window.addEventListener('load', () => {

// 0️⃣ 메인 메뉴 fixed 효과 scroll event
const header = document.querySelector('#header');

document.addEventListener('scroll', () => {
  let scroll = window.scrollY;

if (scroll <= 0) {
  header.classList.remove('active');
  btnTop.classList.add("on");
} else {
header.classList.add('active');
btnTop.classList.remove("on");
}
});

// 1️⃣ 메뉴 hover 펼쳐지기
const mainMenu = document.querySelectorAll("nav.gnb > ul > li"); // li 6개
const subMenu = document.querySelectorAll("nav.gnb > ul > li > ul");
const headerInner = document.querySelector("div.header_inner");
const borderParent = document.querySelector("div.header_bottom")

mainMenu.forEach(mainMenu => {
  mainMenu.addEventListener("mouseover", (e) => {
    subMenu.forEach(item => {
      item.classList.add("on")
    })
    headerInner.style.height = "600px"
    // borderParent.children[5].style.opacity = "1"
  })
  mainMenu.addEventListener("mouseout", (e) => {
    subMenu.forEach(item => {
      item.classList.remove("on");
    })
    headerInner.style.height = "0px"
    // borderParent.children[5].style.opacity = "0"

  })
})


// 6️⃣ 언어설정
const btnLang = document.querySelector(".language > span")
const lang = document.querySelector(".language > ul")

btnLang.addEventListener("click", e => {
  lang.classList.toggle("active");
})

// 4️⃣ 주메뉴 햄버거 버튼 이벤트
const gnb = document.querySelector("nav.gnb");
const btnHam = document.querySelector("div.hamburger > a");
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");
const gnbAct = document.querySelector("nav.gnbActive");

btnHam.addEventListener("click", e => {
  gnb.classList.toggle("on");
  body.classList.toggle("on");
  bg.classList.toggle("on");
  gnbAct.classList.toggle("on");
  e.currentTarget.parentElement.classList.toggle("on");
  if(gnb.classList.contains("on")){
    lang.classList.remove("active");
  }
})
// 5️⃣ 탑버튼 (탑버튼 모양 변경은 1번 스크롤이벤트에)
const btnTop = document.querySelector(".btn_top > a");
const btnTopOn = document.querySelector(".btn_top > a.on");

let bodyHeight = body.offsetHeight;

btnTop.addEventListener("click", (e) => { 
  e.preventDefault();
  if(btnTop.classList.contains("on")){
    window.scroll({
      top: bodyHeight,
      left: 0,
      behavior: "smooth"
    });
  } else {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});
// 2️⃣ cont1 행복한 빙그레의 맛 기차
const bingTrain = document.querySelector(".menu > ul");
const bingTrainEle = document.querySelectorAll(".menu > ul > li");
const bing_prevBtn = document.querySelector(".menu > .menu_arrow > a:first-child");
const bing_nextBtn = document.querySelector(".menu > .menu_arrow > a:last-child");

// 메뉴 슬라이드
trainNum = 0;

function trainNext(train, element, nextBtn, prevBtn){
  trainNum++;
  if(trainNum >= element.length - 6){
    trainNum = element.length - 6;
    nextBtn.classList.remove("on");
  }
    train.style.transform = `translateX(${trainNum * -259}px)`;
    prevBtn.classList.add("on");
}
function trainPrev(train, nextBtn, prevBtn){
  trainNum--;
  if(trainNum <= 0){
    trainNum = 0;
    prevBtn.classList.remove("on");
  }
  train.style.transform = `translateX(${trainNum * -259}px)`;
  nextBtn.classList.add("on")
}

bing_nextBtn.addEventListener("click", e => {
  trainNext(bingTrain, bingTrainEle, bing_nextBtn, bing_prevBtn);
});

bing_prevBtn.addEventListener("click", e => {
  trainPrev(bingTrain, bing_nextBtn, bing_prevBtn);
});


// 행복한 빙그레의 맛 hover 효과 delay 리셋
for(i=0; i<bingTrainEle.length; i++){

  bingTrainEle[i].addEventListener("mouseover", e =>{
  
    if(e.currentTarget.parentElement.classList.contains("on"))
    bingTrainEle.forEach(item =>
      item.style.transitionDelay = 0+"s"
      )
    e.currentTarget.classList.add("on");
  })
}


// 3️⃣ cont2 브랜드 기차
const brandTrain = document.querySelector(".brand > ul")
const brandTrainEle = document.querySelectorAll(".brand > ul > li")
const brand_prevBtn = document.querySelector(".brand > .menu_arrow > a:first-child")
const brand_nextBtn = document.querySelector(".brand > .menu_arrow > a:last-child")

brand_nextBtn.addEventListener("click", (e) => {
  trainNext(brandTrain, brandTrainEle, brand_nextBtn, brand_prevBtn);
});
brand_prevBtn.addEventListener("click", (e) => {
  trainPrev(brandTrain, brand_nextBtn, brand_prevBtn);
});





//  scroll event
function wheel (element){
  for(let i=0; i<bingTrainEle.length; i++){
    element[i].parentElement.classList.add("on");
  }
}
let cont3 = document.querySelector("div.cont3_inner");
let cont4 = document.querySelector("div.cont4_inner");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if(scroll >= 100 && scroll < 750){
    wheel(bingTrainEle);
  } else if(scroll >= 750 && scroll < 1450){
    wheel(brandTrainEle);
  } else if(scroll >= 1450 && scroll < 2600){
    cont3.classList.add("on");
  } else if(scroll >= 2600){
    cont4.classList.add("on");
  }
})

// 오토배너

// let bannerBox = document.querySelector("section.banner");
let bannerFrame = document.querySelector("div.banner_frame");
let bannerParent = document.querySelector("div.banner_frame > ul");
let banners = document.querySelectorAll("div.banner_frame > ul > li");

const firstEl = bannerParent.firstElementChild;
let cloneFirst = firstEl.cloneNode(true);
	
bannerParent.appendChild(cloneFirst);

bannerFrame.style.width = `${100*(banners.length+1)}%`;

let bnnW = firstEl.offsetWidth;


let bnnNum = 0;
let lastNum = banners.length;

function autoBanner(){
  bnnNum++
  bannerFrame.style.transform = `translateX(${-bnnNum * bnnW}px)`
  bannerFrame.style.transition = "800ms"

  if(bnnNum == lastNum){
    setTimeout(function(){
      bannerFrame.style.transition = "0ms"
      bannerFrame.style.transform = `translateX(0px)`
    }, 800)
    bnnNum = 0;
  }
  autoBnn = setTimeout(autoBanner, 4000);
}
let autoBnn = setTimeout(autoBanner, 4000);

});