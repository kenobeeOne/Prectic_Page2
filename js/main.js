$(function(){
$('.slider ').slick({
  nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
  prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prew.svg" alt="prew arrow"></button>',
  fade: true,
  responsive: [
    {
      breakpoint: 441,
      settings: {
        arrows: false
      }
    }
  ]
});
});