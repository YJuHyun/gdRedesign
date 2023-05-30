$( document ).ready( function() {
  if($(window).width() > 1024) {
    // menu
    $( '.mainMenuList' ).mouseenter( function() {
      $( this ).children('.menuInner').stop().slideDown(500);
    } );
    $( '.mainMenuList' ).mouseleave( function() {
      $( this ).children('.menuInner').stop().slideUp(500);
    } );
   
    $( '.familyList' ).mouseenter( function() {
      $('.familyList ul').stop().slideDown(500);
    } );
    $( '.familyList' ).mouseleave( function() {
      $('.familyList ul').stop().slideUp(500);
    } );

  }else if($(window).width() <= 1024) {
    // menu
    $( '.mainMenuList' ).click( function() {
      $( this ).children('.menuInner').stop().slideToggle(500);
    } );
    $( '.familyList' ).click( function() {
      $('.familyList ul').stop().slideToggle(500);
    } );
  }
    var swiper2 = new Swiper(".proSwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
       breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 40,
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
    navigation: {
      nextEl: ".noticeSec .swiper-button-next",
      prevEl: ".noticeSec .swiper-button-prev",
    },
    breakpoints: {
      320: {
        pagination: true
      }, 768: {
        pagination: false
      },
    }
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
  $('.hambuger').click(function(){
    $(".mMenuWrapper").addClass('slideOn')
  })
  $('.close').click(function(){
    $(".mMenuWrapper").removeClass('slideOn')
  })
  var productSecOffset = $( '.productSec' ).offset();
  var companyOffset = $( '.company' ).offset();
  var noticeSecOffset = $( '.noticeSec' ).offset();
  var volunteerOffset = $( '.volunteer' ).offset();
       
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() >  volunteerOffset.top - 400){
      $('.volunteer').addClass('sectionUp')
    }else if ( $( document ).scrollTop() >  noticeSecOffset.top - 400){
      $('.noticeSec').addClass('sectionUp')
    }else if ( $( document ).scrollTop() > companyOffset.top - 400){
      $('.icoContainer').addClass('offset'),
      $('.compTxt').addClass('offsetT')
    }else if ( $( document ).scrollTop() >  productSecOffset.top - 400){
      $('.productSec').addClass('sectionUp')
    }
  })
} 
);

