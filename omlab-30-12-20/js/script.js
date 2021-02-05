$ = jQuery.noConflict();

jQuery(function ($) {
    "use strict";

    /* ===================================
   Nav Scroll
   ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 60}, 10);
    });

    /* ===================================
   Side Menu
   ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active")
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active")
        }), $(".side-menu .nav-item").on("click", function () {
            $(".side-menu").removeClass("side-menu-active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active")
        })
    }

    /* ===================================
       Owl Carousel
   ====================================== */

    /* Quotes Carousel */
    $('.quotes-carousel').owlCarousel({
        items: 1,
        margin: 30,
        dots: true,
        nav: false,
        loop:true,
        autoplay: 300,
        smartSpeed:1000,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

/* Our Team */
    $(".owl-team").owlCarousel({
        items: 1,
        margin: 30,
        dots: true,
        dotsContainer: ".owl-thumbs",
        nav: false,
        loop:true,
        animateOut: 'fadeIn',
        autoplay: false,
        smartSpeed:0,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    /* Partners Carousel */
    $(function(){
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        touchMove: true,
                        slidesToShow: 1,
                        swipe: true,
                    }
                }
            ]
        });

        // When the filter values are changed,
        // apply the filter to slick.
        $('.filter select').on('change', function() {
            var filterClass = getFilterValue();
            $('.filter-class').text(filterClass);
            $('.slick').slick('slickUnfilter');
            $('.slick').slick('slickFilter', filterClass);
        });


        /**
         * This just reads the inputs from the
         * selects and creates the filter.
         */
        function getFilterValue() {
            // Grab all the values from the filters.
            var values = $('.filter-group').map(function() {
                // For each group, get the select values.
                var groupVal = $(this).find('select').map(function() {
                    return $(this).val();
                }).get();
                // join the values together.
                return groupVal.join('');
            }).get();
            // Remove empty strings from the filter array.
            // and join together with a comma. this way you
            // can use multiple filters.
            return values.filter(function(n) {
                return n !== "";
            }).join(',');
        }
    });
});

