$(function () {
  $('.slick').slick({

  });

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();

  var typed = new Typed('.header__desc--change', {
    strings: [
      "Frontend Developer",
      "Schoolboy",
      "DeadInside"
    ],
    typeSpeed: 150,
    loop: true,
    backspeed: 150,
    startDelay: 200,
  });

  $(".menu a, .header__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.header__btn, .menu__link, .header__logo').on('click', function () {
    $('.menu').toggleClass('menu__active');
    $('.header__btn').toggleClass('header__btn--active');
  });

  $('.about__tab').on('click', function (e) {
    e.preventDefault();
    $('.about__tab').removeClass('about__tab--active');
    $(this).addClass('about__tab--active');

    $('.about__item').removeClass('about__item--active');
    $($(this).attr('href')).addClass('about__item--active');
  });

});