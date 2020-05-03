$(document).ready(function() {

    var $buttons = $(".project-area .container .btn-group .btn");
    $buttons.on("click", (event) => {
        $buttons.removeClass("active");
        event.target.classList.add("active");
        let select = "" + event.target.dataset.filter;

        var $gridContainer = $(".project-area .container .grid");
        $gridContainer.isotope({
            filter: select
        });

    });

    $(".project-area .container .btn-group  #btn1").trigger("click");

    $(".project-area .container .grid .image .popup-link").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        lazyLoad: true,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:2
            },
            1600:{
                items:2
            },
            1800:{
                items:2
            }
        }
    });
    
    let header_offset = $(".header").height();

    $(window).on("scroll", (event) => {
        if (window.scrollY >= header_offset) {
            $(".header").addClass("navbar-header");
        } else {
            $(".header").removeClass("navbar-header");
        }
    });

});