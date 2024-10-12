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

// 스크롤시 badge 표시 여부, to-top 표시 여부
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //badge 숨기기
    gsap.to(badgeContainer,{
      opacity:0,
      display:'none',
      duration:.6,
    });
    //to-up 보이기
    gsap.to(toTopEl,{
      opacity:1,
      display:'flex',
      duration:.2,
    });
  }else{
    //badge 보이기
    gsap.to(badgeContainer,{
      opacity:1,
      display:'block',
      duration:.6,
    });
    //to-up 숨기기
    gsap.to(toTopEl,{
      opacity:0,
      display:'none',
      duration:.2,
    });
  }
},300));

// to-top 클릭시 페이지 최상단으로 이동
toTopEl.addEventListener('click', () => {
  gsap.to(window,{
    duration:.7,
    scrollTo:0,
  });
});


// visual 페이드인
const fadelEls = document.querySelectorAll('.visual .fade-in').forEach((fadeEl,index) => {
  gsap.to(fadeEl,{
    opacity:1,
    delay:index * .5, //순차적으로 표시
  });
});

// notice 공지사항 swiper
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

// notice promition 토글 버튼
let isOpenPromotion = false;
const promotionEl = document.querySelector('.promotion');
const promotionBtn = document.querySelector('.toggle-promotion');
const promotionBtnIcon = promotionBtn.querySelector('.material-icons');
promotionBtn.addEventListener('click', function(){
  isOpenPromotion = !isOpenPromotion;
  if (isOpenPromotion) {
    // 보임
    promotionEl.classList.remove('hide');
    promotionBtnIcon.textContent = 'keyboard_arrow_up';
  } else {
    // 숨김
    promotionEl.classList.add('hide');
    promotionBtnIcon.textContent = 'keyboard_arrow_down';
  }
});

// motice promition swiper
new Swiper('.promotion .swiper',{
  slidesPerView: 3,  
  spaceBetween: 10,  
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
});

// awards swiper
new Swiper('.awards .swiper', {
  autoplay: true, 
  loop: true,
  navigation: { 
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next',
  },
  spaceBetween: 10, 
  slidesPerView: 2, 
  breakpoints: {
    600:{
      spaceBetween: 20, 
      slidesPerView: 3, 
    },
    900: {
      slidesPerView: 4,  
      spaceBetween: 30,
    },
    1200:{
      slidesPerView: 5,  
      spaceBetween: 40,
    }
  },
})

// 스크롤 위치에 따하 요소가 화면에 보여짐 여부 관리 
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl, 
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당
})
