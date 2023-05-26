$(document).ready(function(){
    $('.slide-items').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
    });
});