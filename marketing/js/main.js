$(function () {

    $(".menu a, .go-top, .header__icon").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    $('.slider__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Стрелка влево"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
    
    var mixer = mixitup('.portfolio__content');

});