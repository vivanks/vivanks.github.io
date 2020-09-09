(function ($) {
    "use strict";

    $(window).on("load", function () {

        preLoader();
        wowAnimation();
        projectFilter();

    });

    /* =========================================================== */

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $('.scroll-top').addClass('show');
        } else {
            $('.scroll-top').removeClass('show');
        }
        if (scroll >= 80) {
            $('header').addClass('header-bg');
        } else {
            $('header').removeClass('header-bg');
        }

    });

    /* =========================================================== */

    $(document).ready(function () {

        smoothScroll();
        menuBtn();
        pageTransition();
        backgroundImage();
        popupGallery();
        youtubePopup();
        serviceSlider();
        testimonialSlider();
        blogImageSlider();
        tooltip();

    });

    // preLoader init
    function preLoader() {
        $('.preloader-dots').addClass('fadeOut');
        setTimeout(function () {
            $('.preloader').addClass('loaded');
            setTimeout(function () {
                $('.preloader').addClass('fadeOut');
                $('body').addClass('o-scroll');
                $('.main-wrapper').addClass('fadeIn');
            }, 220);
        }, 200);
    };

    // wowJS init
    function wowAnimation() {
        setTimeout(function () {
            new WOW().init();
        }, 400);
    };

    function projectFilter() {
        // isotope init
        var $grid = $('.filter-projects').isotope();
        // init Isotope -- work filter
        $grid.isotope();
        // filter items on button click
        $('.filter-buttons').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // addClass on active filter button
        $('.filter-buttons button').on('click', function () {
            $('.filter-buttons button').removeClass('active');
            $(this).addClass('active');
        });
    };

    // smooth-scroll init
    function smoothScroll() {
        $('.smooth-scroll').on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 70
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    };

    // menuBtn
    function menuBtn() {
        $('.menu-btn').on('click', function(){
            $('.full-screen-menu').addClass('show');
            $('.page-links').addClass('fadeIn');
            $('body').removeClass('o-scroll').addClass('body-no-scroll-fixed');
            $('header').addClass('header-no-scroll-fixed');
            $('.go-top').css('display', 'none');
        });
        $('.menu-close').on('click', function(){
            $('.full-screen-menu').removeClass('show');
            $('.page-links').removeClass('fadeIn');
            setTimeout( function() {
                $('body').addClass('o-scroll').removeClass('body-no-scroll-fixed');
                $('header').removeClass('header-no-scroll-fixed');
                $('.go-top').css('display', 'block');
            }, 300);
        });
    };

    // page transition init
    function pageTransition() {
        $('.page-links a').not('[href="#"]').not('[href="#0"]').on('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            $('.page-overlay').css('height', '100%');
            setTimeout(function() {
                window.location = href;
            },550);
        });
    };

    // background-image init
    function backgroundImage() {
        $('[data-background]').each(function () {
            $(this).addClass('has-bgImage');
            var src = $(this).attr('data-background');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    };

    // magnificPopup init
    function popupGallery() {
        $(".zoom-gallery").magnificPopup({
            delegate: "a.zoom-image",
            fixedContentPos: false,
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: { verticalFit: !0 },
            gallery: { enabled: !0 },
            zoom: {
                enabled: !0,
                duration: 400,
                opener: function (a) { return a.find("img"); }
            },
            callbacks: {
                open: function() {
                   jQuery('body').addClass('body-no-scroll-fixed').removeClass('o-scroll');
                },
                close: function() {
                   jQuery('body').addClass('o-scroll').removeClass('body-no-scroll-fixed');
                }
            }
        });
    };

    // background-image init
    function youtubePopup() {
        if ($('.popup-youtube').length > 0) {
            $('.popup-youtube').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        };
    };

    // service-slider init
    function serviceSlider() {
        $('.owl-carousel.service-slider').owlCarousel({
            nav:false,
            loop:true,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            margin:30,
            autoHeight:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    };

    // testimonial-slider init
    function testimonialSlider() {
        $('.owl-carousel.testimonial-slider').owlCarousel({
            nav:false,
            loop:true,
            dots:true,
            items:1,
            autoplay:true,
            autoplayHoverPause:true
        });
    };

    // blog-image-slider init
    function blogImageSlider() {
        $('.owl-carousel.blog-image-slider').owlCarousel({
            nav:true,
            navText: ['<span class="ion-ios-arrow-back"></span>','<span class="ion-ios-arrow-forward"></span>'],
            loop:true,
            dots:false,
            items:1,
            autoplay:true,
            autoplayHoverPause:true
        });
    };

    // tooltip init
    function tooltip() {
        $('[data-toggle="tooltip"]').tooltip()
    };


})(jQuery);