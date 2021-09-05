$(function () {

    $(".menu a, .header__icon").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $('.menu__btn, .menu a').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });
    
    var mixer = mixitup('.gallery__content');

});