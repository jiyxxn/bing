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


// 2️⃣ 언어설정
const btnLang = document.querySelector(".language > span")
const lang = document.querySelector(".language > ul")

btnLang.addEventListener("click", e => {
  lang.classList.toggle("active");
})

// 3️⃣ 주메뉴 햄버거 버튼 이벤트
const gnb = document.querySelector("nav.gnb");
const btnHam = document.querySelector("div.hamburger > a");
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");
const gnbAct = document.querySelector("nav.gnbActive");


btnHam.addEventListener("click", e => {
  e.preventDefault();

  gnb.classList.toggle("on");
  body.classList.toggle("on");
  bg.classList.toggle("on");
  gnbAct.classList.toggle("on");
  e.currentTarget.parentElement.classList.toggle("on");

  if(gnb.classList.contains("on")){
    lang.classList.remove("active");
  }
})

// 4️⃣ 탑버튼
const btnTop = document.querySelectorAll(".btn_top > a");
console.log(btnTop)

let bodyHeight = body.offsetHeight;
document.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if(scroll <= 0){
    btnTop.forEach(item => {
      item.classList.add("on");
    })
  } else if(scroll < 2000) {
    btnTop.forEach(item => {
      item.classList.remove("on");
    })
  }
})

btnTop.forEach(item => {
  item.addEventListener("click", (e) => { 
    e.preventDefault();
    if(item.classList.contains("on")){
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
})


// 5️⃣ 모바일/태블릿 헤더 메뉴
const m_btnHam = document.querySelector("div.m_hamburger > a");
const m_btnClose = document.querySelector(".m_topLink > li:last-of-type > a");
const mobMenu = document.querySelector(".m_header_inner");

m_btnHam.addEventListener("click", e=> {
  mobMenu.classList.add("on");
  bg.classList.add("on");
  body.classList.add("on");
})
m_btnClose.addEventListener("click", e=> {
  e.preventDefault();
  mobMenu.classList.remove("on");
  bg.classList.remove("on");
  body.classList.remove("on");
})

const m_btnLang = document.querySelector(".m_language > span");
const m_lang = document.querySelector(".m_language > ul");

m_btnLang.addEventListener("click", e=> {
  e.preventDefault();
  m_lang.classList.toggle("active");
})

const m_subLi = document.querySelectorAll("ul.m_menu > li");

for(var i=0; i<m_subLi.length; i++){
  m_subLi[i].addEventListener("click", e=> {
    // m_subLi.forEach(item => {
    //   item.classList.remove("active");
    // })
    e.currentTarget.classList.toggle("active");
  })
}
// 6️⃣ cont1 행복한 빙그레의 맛 기차
const bingTrain = document.querySelector(".menu > ul:first-of-type");
const bingTrainEle = document.querySelectorAll(".menu > ul:first-of-type > li");
const bing_prevBtn = document.querySelector(".menu > .menu_arrow > a:first-child");
const bing_nextBtn = document.querySelector(".menu > .menu_arrow > a:last-child");
console.log(bingTrainEle)
let eleWidth = document.querySelector(".menu > ul > li").clientWidth;


// ❗ 메뉴 슬라이드
trainNum = 0;

function trainNext(train, element, nextBtn, prevBtn){
  trainNum++;
  if(trainNum >= element.length - 6){
    trainNum = element.length - 6;
    nextBtn.classList.remove("on");
  }
    train.style.transform = `translateX(${-trainNum * (eleWidth+17)}px)`;
    prevBtn.classList.add("on");
}
function trainPrev(train, nextBtn, prevBtn){
  trainNum--;
  if(trainNum <= 0){
    trainNum = 0;
    prevBtn.classList.remove("on");
  }
  train.style.transform = `translateX(${-trainNum * (eleWidth+17)}px)`;
  nextBtn.classList.add("on")
}

bing_nextBtn.addEventListener("click", e => {
  e.preventDefault();
  trainNext(bingTrain, bingTrainEle, bing_nextBtn, bing_prevBtn);
});

bing_prevBtn.addEventListener("click", e => {
  e.preventDefault();
  trainPrev(bingTrain, bing_nextBtn, bing_prevBtn);
});


// ❗ 행복한 빙그레의 맛 hover 효과 delay 리셋
for(i=0; i<bingTrainEle.length; i++){

  bingTrainEle[i].addEventListener("mouseover", e =>{
  
    if(e.currentTarget.parentElement.classList.contains("on"))
    bingTrainEle.forEach(item =>
      item.style.transitionDelay = 0+"s"
      )
    e.currentTarget.classList.add("on");
  })
}


// 7️⃣ cont2 브랜드 기차
const brandTrain = document.querySelector(".brand > ul:first-of-type")
const brandTrainEle = document.querySelectorAll(".brand > ul:first-of-type > li")
const brand_prevBtn = document.querySelector(".brand > .menu_arrow > a:first-child")
const brand_nextBtn = document.querySelector(".brand > .menu_arrow > a:last-child")

brand_nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  trainNext(brandTrain, brandTrainEle, brand_nextBtn, brand_prevBtn);
});
brand_prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  trainPrev(brandTrain, brand_nextBtn, brand_prevBtn);
});

// ❗ content1,2 mob.ver
const bing_pagnation = document.querySelectorAll(".menu > ul:last-of-type > li");
const brand_pagnation = document.querySelectorAll(".brand > ul:last-of-type > li");
let bdWidth = body.offsetWidth;

function mobPagnation(circle, count, train){
  circle[0].addEventListener("click", e=>{
    e.preventDefault();
    circle.forEach(item => {
      item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    train.style.transform = `translateX(${0}px)`;
  })
  circle[1].addEventListener("click", e=>{
    e.preventDefault();
    circle.forEach(item => {
      item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    train.style.transform = `translateX(${-count * (eleWidth+17)}px)`;
  })
}

if(bdWidth < 769){
  mobPagnation(bing_pagnation, 2, bingTrain);
  mobPagnation(brand_pagnation, 1, brandTrain);
}



// 8️⃣ scroll event
function wheel (element){
  for(let i=0; i<bingTrainEle.length; i++){
    element[i].parentElement.classList.add("on");
  }
}
let cont3 = document.querySelector("div.cont3_inner");
let cont4 = document.querySelector("div.cont4_inner");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  function scrollY(a, b, c, d){
    if(scroll >= a && scroll < b){
      wheel(bingTrainEle);
    } else if(scroll >= b && scroll < c){
      wheel(brandTrainEle);
    } else if(scroll >= c && scroll < d){
      cont3.classList.add("on");
    } else if(scroll >= d){
      cont4.classList.add("on");
    }
  }

  if(bdWidth <= 768){
    // 모바일
    scrollY(10, 550, 1300, 2280);

  } else if(bdWidth > 768 && bdWidth <= 1024){
    // 태블릿
    scrollY(10, 550, 1150, 1900);
  } else {
    // PC
    scrollY(100, 750, 1450, 2600);
  }

})
// ❗ 모바일, 행복한 빙그레의 맛만 0.5초 후에 뜨기
if(bdWidth <= 768){
  let reload = setTimeout(()=>{
    bingTrain.classList.add("on");
  }, 500);
}

// 9️⃣ 배너

const bannerFrame = document.querySelector("div.banner_frame");
const bannerParent = document.querySelector("div.banner_frame > ul");
const banners = document.querySelectorAll("div.banner_frame > ul > li");
	
const firstEl = bannerParent.firstElementChild;
const lastEl = bannerParent.lastElementChild;
let cloneFirst = firstEl.cloneNode(true);
let cloneLast = lastEl.cloneNode(true);
	
bannerParent.appendChild(cloneFirst);
bannerParent.insertBefore(cloneLast, bannerParent.firstElementChild);

bannerFrame.style.width = `${100*(banners.length+2)}%`;

let bnnW = firstEl.offsetWidth;


let bnnNum = 0;
let lastNum = banners.length;

const next = document.querySelector("div.banner_roll > a.next");
const prev = document.querySelector("div.banner_roll > a.prev");
const rolling = document.querySelectorAll("div.banner_roll > ul > li");
const play = document.querySelector("div.banner_roll > p > a");

bannerFrame.style.transform = `translateX(${-bnnW}px)`

next.addEventListener("click", e=> {
  e.preventDefault();
  bnnNum++
  bannerFrame.style.transform = `translateX(${-bnnW * (bnnNum+1)}px)`
  bannerFrame.style.transition = "800ms"

  if(bnnNum == lastNum){
    setTimeout(function(){
      bannerFrame.style.transition = "0ms"
      bannerFrame.style.transform = `translateX(${-bnnW}px)`
    }, 800)
    bnnNum = 0;
  }
  rolling.forEach(item => {
    item.classList.remove("on");
  })
  rolling[bnnNum].classList.add("on");
})
prev.addEventListener("click", e=> {
  e.preventDefault();
  bnnNum --
  bannerFrame.style.transform = `translateX(${-bnnW * (bnnNum+1)}px)`
  bannerFrame.style.transition = "800ms"
  
  if(bnnNum == -1){
    setTimeout(function(){
      bannerFrame.style.transition = "0ms"
      bannerFrame.style.transform = `translateX(${-bnnW * lastNum}px)`
    }, 800)
    bnnNum = lastNum-1;
  }
  rolling.forEach(item => {
    item.classList.remove("on");
  })
  rolling[bnnNum].classList.add("on");
})


// ❗ 오토배너
function autoBanner(){
  bnnNum++
  bannerFrame.style.transform = `translateX(${-bnnW * (bnnNum+1)}px)`
  bannerFrame.style.transition = "800ms"

  if(bnnNum == lastNum){
    setTimeout(function(){
      bannerFrame.style.transition = "0ms"
      bannerFrame.style.transform = `translateX(${-bnnW}px)`
    }, 800)
    bnnNum = 0;
  }
  autoBnn = setTimeout(autoBanner, 4000);
}
let autoBnn = setTimeout(autoBanner, 4000);

// ❗ play/pause
let btnP = true;

play.addEventListener("click", e=> {
  e.preventDefault();
  if(btnP){
    play.classList.add("pause");
    clearTimeout(autoBnn);
    btnP = false;
  } else {
    play.classList.remove("pause");
    autoBnn = setTimeout(autoBanner, 4000);
    btnP = true;
  }
})

// ❗ 페이지네이션 클릭이벤트
for(let i=0; i<rolling.length; i++){
  rolling[i].addEventListener("click", e => {
    e.preventDefault();
    bannerFrame.style.transform = `translateX(${-bnnW * (i+1)}px)`
    bannerFrame.style.transition = "800ms"
    rolling.forEach(item => {
      item.classList.remove("on");
    })
    e.currentTarget.classList.add("on");
    play.classList.add("pause")
    clearTimeout(autoBnn);
    btnP = false; 
  })
}



});
// window.onload