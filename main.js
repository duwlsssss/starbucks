// 헤더
// 검색창 placeholder 표시
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
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
    display: 'none',
  });  
});

// 스크롤시 badge 표시
const badgeEl = document.querySelector('.badges');
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(badgeEl,{
      opacity:0,
      display:'none',
      duration:.4,
    });
  }else{
    gsap.to(badgeEl,{
      opacity:1,
      display:'block',
      duration:.6,
    });
  }
},300));


// visual 페이드인
const fadelEls = document.querySelectorAll('.visual .fade-in').forEach((fadeEl,index) => {
  gsap.to(fadeEl,{
    opacity:1,
    delay:index * .5, //순차적으로 표시
  });
});

