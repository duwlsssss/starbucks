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
  })
});

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

//signin 로그인 버튼 클릭시 페이지 이동 막아 놓음
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
});