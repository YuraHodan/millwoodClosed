$('.goode2-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.goode2-slider-nav'
});
$('.goode2-slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.goode2-slider-for',
 dots: true,
 infinite: true,
 speed: 500,
 fade: true,
 autoplay: true,
 autoplaySpeed: 5001,
 nextArrow: false,
 prevArrow: false,
 cssEase: 'linear',
 pauseOnHover:false
});




$('.goode-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 // arrows: true,
 // fade: true,
 asNavFor: '.goode-slider-nav'
});
$('.goode-slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 3,
 asNavFor: '.goode-slider-for',
 // dots: true,
 // infinite: true,
 // speed: 500,
 // fade: true,
 autoplay: true,
 autoplaySpeed: 5001,
 // nextArrow: false,
 // prevArrow: false,
 // cssEase: 'linear',
 // nextArrow: $('.mainlidet2').find('.next-btn'),
 // prevArrow: $('.mainlidet2').find('.prev-btn'),
 responsive:[
   {
   breakpoint: 376,
   settings:{
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: true,
     infinite: true,
     speed: 500,
     fade: true,
     autoplay: false,
     autoplaySpeed: 3000,
     nextArrow: false,
     prevArrow: false,
     cssEase: 'linear'
   }
 }]
});
