

const responsive = {
    0: {
        items:1
    },
    320: {
        items:1
    },
    520: {
        items:2
    },
    960: {
        items:3
    },
    1200: {
        items:4
    }
    
}

$(document).ready(function () {
    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true, 
        autoplay:false,
        autoplayTimeout: 2000,
        dots:false, 
        nav:true,
        navText : [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    }) ;


    // back to top 
    $(".to-top span").click(function () {
        $("html, body").animate({
            scrollTop:0
        },1500)
    })

    // animate on scroll
    AOS.init();
});