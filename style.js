$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar").slideToggle("slow");
    });
});


var swiper = new Swiper(".slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".tesslider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });
