(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  new Swiper('.welcome__slider .swiper', {
    speed: 1000,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.welcome__slider .swiper-button-next',
      prevEl: '.welcome__slider .swiper-button-prev',
    },
  });

  $('.header__burger').on('click', function(){
    $('.header__menu').toggleClass('active');
    $('.welcome').toggleClass('shadow');
    $('.header__burger').toggleClass('active');
  });
  
  $('.welcome').on('click', function(){
    $('.header__menu').removeClass('active');
    $('.welcome').removeClass('shadow');
    $('.header__burger').removeClass('active');
  });

  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 10) {
      $('.header--wrap').addClass('active')
    } else {
      $('.header--wrap').removeClass('active')
    }
  });

})(jQuery);
