// 헤더
// 검색창 placeholder 표시
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  const computedStyle = window.getComputedStyle(searchInputEl);
  if (computedStyle.display === 'none') {
    searchInputEl.style.display = 'block'; 
    searchInputEl.focus(); 
  }
});
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','Search');
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// item__content 부드럽게 생성
const itemEls = document.querySelectorAll('.item').forEach(item => {
  const itemContentEl = item.querySelector('.item__content');
  item.addEventListener('mouseenter', () => {
    gsap.to(itemContentEl, {
      duration: 0.2,
      opacity:1,
      display: 'block',
    });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(itemContentEl, {
      duration: 0.2,
      opacity:0,
      display: 'none',
    });
  });
});
 
// close-badge 클릭하면 badge 삭제
const badgeContainer = document.querySelector('.badges');
const closeBadgeBtn = document.querySelector('.close-badge')
closeBadgeBtn.addEventListener('click', function(){
  gsap.to(badgeContainer, {
    duration: 0.2,
    opacity:0,
    onComplete: function() {
      badgeContainer.remove(); // 애니메이션 완료 후 DOM에서 제거
    }
  });  
});

// 스크롤시 badge 표시
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(badgeContainer,{
      opacity:0,
      display:'none',
      duration:.4,
    });
  }else{
    gsap.to(badgeContainer,{
      opacity:1,
      display:'block',
      duration:.6,
    });
  }
},300));

// mobile__menu 표시
const mobileMenuBtn = document.querySelector('.narrow-width-menu .hamburger-icon');
const menubg = document.querySelector('.mobile__menu__back');
const menu = document.querySelector('.mobile__menu');
const closeBtn = document.querySelector('.close-mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  gsap.to(menubg,{
    opacity:1,
    display:'block',
    duration:.2,
  });
  menu.classList.remove('mobile__menu--hide');
  menu.classList.add('mobile__menu--show');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobile__menu--show');
  menu.classList.add('mobile__menu--hide');
  gsap.to(menubg,{
    opacity:0,
    display:'none',
    duration:.2,
  });
});

// mobile__menu 아코디언
const categories = document.querySelectorAll('.categories__m .category');
categories.forEach(category => {
  const title = category.querySelector('.title');
  title.addEventListener('click', () => {
    const lists = category.querySelectorAll('.list');
    lists.forEach(list => {
      if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block'; // 목록 보이기
      } else {
        list.style.display = 'none'; // 목록 숨기기
      }
    });
    const arrow = title.querySelector('.arrow');
    if(arrow.textContent==='arrow_drop_down'){
      arrow.textContent = 'arrow_drop_up';
    }else{
      arrow.textContent = 'arrow_drop_down';
    }
  });
});

// visual 페이드인
const fadelEls = document.querySelectorAll('.visual .fade-in').forEach((fadeEl,index) => {
  gsap.to(fadeEl,{
    opacity:1,
    delay:index * .5, //순차적으로 표시
  });
});
