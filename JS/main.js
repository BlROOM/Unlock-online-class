const searchEl =document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    //gsap.to(요소, 지속시간,옵션)
    gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7,
        opacity: 1
    });
});


// new Swiper(선택자, 옵션)
new Swiper('.dance-class .swiper-container', {
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween:30, //슬라이드 여백
    loop: true,
    centeredSlides:true, //1번 슬라이드가 가운데 보이기
    autoplay: {
        delay: 5000
    },
    
    navigation: {
        prevEl:'.dance-class .swiper-prev',
        nextEl:'.dance-class .swiper-next'
    }
});

new Swiper('.new-class .swiper-container', {
    slidesPerView:1,
    spaceBetween: 1,
    // pagination: {
    //     el:'.new-class .swiper-pagination',
    //     clickable:true
    // },
    navigaton: {
        prevEl:'.new-class .swiper-prev',
        nextEl:'.new-class .swiper-next'
    }
});

new Swiper('.recommend-class .swiper-container', {
    slidesPerView:1,
    // spaceBetween:30,
    loop:true,
    autoplay: {
        delay: 10000
    },
    navigation: {
        prevEl:'.recommend-class .swiper-prev',
        nextEl:'.recommend-class .swiper-next'
    }
});

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click' ,function() {
    gsap.to(window, .7, {
        scrollTo:0
    })
})
window.addEventListener('scroll',_.throttle(function () {
    if(window.scrollY> 500 ){
        gsap.to(toTopEl, .2, {
            x:0
        })
    }else {
        gsap.to(toTopEl, .2, {
            x:100
        })
    }
}))
