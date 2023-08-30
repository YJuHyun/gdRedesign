$( document ).ready( function() {

    var swiper2 = new Swiper(".proSwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
       breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,  
            spaceBetween: 50,
          },
          1025: {
            slidesPerView: 4,  
            spaceBetween: 50,
          },
        }
    });

  var prevBtn = $('.prevBtn');
  var nextBtn = $('.nextBtn');
  var swiper1 = new Swiper(".banSwiper", {});

  var swiper3 = new Swiper(".noticeSlide", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".noticePagination",
    },
    navigation: {
      nextEl: ".noticeSec .swiper-button-next",
      prevEl: ".noticeSec .swiper-button-prev",
    },
  });
  var swiper4 = new Swiper(".noticeList", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".noticeSec .swiper-button-next",
      prevEl: ".noticeSec .swiper-button-prev",
    },
   
  });

  swiper3.controller.control = swiper4;
  swiper4.controller.control = swiper3;
  
  var swiper5 = new Swiper(".brandSlide", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 6,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var productSecOffset = $( '.productSec' ).offset();
  var companyOffset = $( '.company' ).offset();
  var noticeSecOffset = $( '.noticeSec' ).offset();
  var volunteerOffset = $( '.volunteer' ).offset();
       
 
} 
);
