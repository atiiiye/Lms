$(document).ready(function () {

    console.log($('#courses-slider'))
    $('#courses-slider').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            }
        }
    })
})
