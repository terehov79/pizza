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

})(jQuery);
