$( document ).ready( function() {
  if($(window).width() > 1024) {
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

  }else {
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() >  volunteerOffset.top - 600){
        $('.volunteer').addClass('sectionUp')
      }else if ( $( document ).scrollTop() >  noticeSecOffset.top - 600){
        $('.noticeSec').addClass('sectionUp')
      }else if ( $( document ).scrollTop() > companyOffset.top - 600){
        $('.icoContainer').addClass('offset'),
        $('.compTxt').addClass('offsetT')
      }else if ( $( document ).scrollTop() >  productSecOffset.top - 600){
        $('.productSec').addClass('sectionUp')
      }
    })
  }
  var productSecOffset = $( '.productSec' ).offset();
  var companyOffset = $( '.company' ).offset();
  var noticeSecOffset = $( '.noticeSec' ).offset();
  var volunteerOffset = $( '.volunteer' ).offset();
       
 
} 
);