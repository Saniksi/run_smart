$(document).ready(function () {
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img  src="img/icons/arrow-left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img  src="img/icons/arrow-right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab--active)',
    function () {
      $(this)
        .addClass('catalog__tab--active')
        .siblings()
        .removeClass('catalog__tab--active')
        .closest('div.catalog__container')
        .find('div.catalog__content')
        .removeClass('catalog__content--active')
        .eq($(this).index())
        .addClass('catalog__content--active');
    }
  );

  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content--active');
        $('.catalog-item__list')
          .eq(i)
          .toggleClass('catalog-item__list--active');
      });
    });
  }

  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');

  // Modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  // $('.catalog-item__btn').on('click', function () {
  //   $('.overlay, #order').fadeIn('slow');
  // });

  $('.catalog-item__btn').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__subtitle').text(
        $('.catalog-item__subtitle').eq(i).text()
      );
      $('.overlay, #order').fadeIn('slow');
    });
  });
});
