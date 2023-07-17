$( document ).ready( function() {
  var swiper = new Swiper(".category", {
    slidesPerView: "auto",
    spaceBetween: 16,
  });
  
  function heightChage() {
    let productImg = document.querySelectorAll('.proImg');
    
    productImg.forEach(function(e) {
      e.style.height = e.offsetWidth + "px";
    });
  }
  heightChage()
  window.addEventListener('resize', function() {
    heightChage()
  })
})
