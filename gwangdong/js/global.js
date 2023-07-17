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
  }else {
    // menu
    $( '.familyList' ).click( function() {
      $('.familyList ul').stop().slideToggle(500);
    } );
  }
  $('.hambuger').click(function(){
    $(".mMenuWrapper").addClass('slideOn')
  })
  $('.close').click(function(){
    $(".mMenuWrapper").removeClass('slideOn')
  })
})