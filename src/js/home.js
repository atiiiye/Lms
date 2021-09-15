$(document).ready(function () {

    $('#image-gallery').owlCarousel({
        rtl: true,
        nav: true,
        items: 1,
        loop: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            577:
            {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
                spaceBetween: 30,
            },
            576:
            {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 0,
            },
            300:
            {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 0,
            }
        }
    });
});