$(document).ready(function () {
    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true, 
        autoplay:true,
        autoplayTimeout: 2000,
        dots:false, 
        nav:true,
        navText : [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    }) ;
});