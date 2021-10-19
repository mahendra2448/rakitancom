// For responsive
var mq767 = window.matchMedia("(max-width: 767px)");
var mq1199 = window.matchMedia("(max-width: 1199px)");

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
            $('.second-nav').removeClass('sticky-top');
            $('.second-nav').addClass('fixed-top');
            $('.img-brand').removeClass('img-brand');
            $('.navbar-brand img').addClass('img-shrink');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
            $('.second-nav').addClass('sticky-top');
            $('.second-nav').removeClass('fixed-top');
            $('.img-shrink').removeClass('img-shrink');
            $('.navbar-brand img').addClass('img-brand');
        }

        $(".navbar-brand").toggleClass("navbar-brand-shrink", $(this).scrollTop() > 50);
    });
});

$('.carousel').carousel()

//Scroll-section
$('body').scrollspy({ target: '#exp-nav' });

$('.sub-nav li a').on('click', function() {
    $('.sub-nav li a.active').removeClass('active');
    $(this).addClass('active');
});

$(function() {
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        maxWidth: 800,
        aspectRatio: true,
        helpers: {
            media: {},
            overlay: {
                closeClick: false
            }
        }
    });
})

//Mobile-menu
$('.mobile-menu .m-toggle').on('click', function() {
    $('.mobile-menu').toggleClass('opened');
});
$('.mobile-menu .overlay').on('click', function() {
    $('.mobile-menu.opened').removeClass('opened');
});

// Slick
$(document).ready(function() {
    $('.testi-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        autoplay: false,
        arrows: true,
        prevArrow: "<img class='slick-prev slick-arrow' src='../assets/img/iconified/ic-prev.png' alt='Prev' style='width:30px;height:30px;'>",
        nextArrow: "<img class='slick-next slick-arrow' src='../assets/img/iconified/ic-next.png' alt='Next' style='width:30px;height:30px;'>",
        focusOnSelect: false
    });
    $('.publication').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        swipe: true,
        autoplay: false,
        arrows: true,
        prevArrow: "<img class='slick-prev slick-arrow' src='../assets/img/iconified/ic-prev-2.png' alt='Prev' style='width:30px;height:30px;'>",
        nextArrow: "<img class='slick-next slick-arrow' src='../assets/img/iconified/ic-next-2.png' alt='Next' style='width:30px;height:30px;'>",
        focusOnSelect: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.articleSlide, .eduSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        swipe: true,
        autoplay: false,
        arrows: true,
        prevArrow: "<img class='slick-prev slick-arrow' src='../assets/img/iconified/ic-prev-2.png' alt='Prev' style='width:30px;height:30px;'>",
        nextArrow: "<img class='slick-next slick-arrow' src='../assets/img/iconified/ic-next-2.png' alt='Next' style='width:30px;height:30px;'>",
        focusOnSelect: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

})

$('.title a').on('click', function() {
    var fileTitle = $(this).data('title')
    $('input#filename').val(fileTitle)
})


// Carousel delay
$('.carousel').carousel({
    interval: 3000,
    cycle: true
})

// Wow JS
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();