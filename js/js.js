$('.header__basket-icon').on('click', function() {
    $('.header__account .header__dropdown').removeClass('header__dropdown--is-active');
    $('.header__basket .header__dropdown').toggleClass('header__dropdown--is-active');
})
$('.header__account-icon').on('click', function() {
    $('.header__basket .header__dropdown').removeClass('header__dropdown--is-active');
    $('.header__account .header__dropdown').toggleClass('header__dropdown--is-active');
})

$(document).on('click', function(e) {
    // console.log(e.target);
    // console.log($(e.target).closest('.header__basket,.header__account'));
    // console.log($(e.target).closest('.header__basket,.header__account').length);
    if (!$(e.target).closest('.header__basket,.header__account').length) {
        $('.header__dropdown').removeClass('header__dropdown--is-active')
    }
    if (!$(e.target).closest('.navbar').length) {
        $('.header__menu').removeClass('header__menu--is-active')
        $('.navbar__items').removeClass('navbar__items--is-active')
        $('.overlay').removeClass('overlay--is-active')
    }
});
(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.scroll__top').fadeIn();
    } else {
        $('.scroll__top').fadeOut();
    }
})
$('.scroll__top').on('click', function() {
    $('html,body').animate({
        scrollTop: 0
    }, 900)
});

$('.header__menu').on('click', function() {
    $(this).toggleClass('header__menu--is-active');
    $('.navbar__items').toggleClass('navbar__items--is-active');
    $('.overlay').toggleClass('overlay--is-active');
});
$('.box__header').on('click', function() {
    var box_filter = $(this).parent().find('.box__filter');
    if ($(this).hasClass('box--togglable')) {
        $(this).removeClass('box--togglable');
        box_filter.slideDown();
    } else {
        $(this).addClass('box--togglable');
        box_filter.slideUp();
    }
});