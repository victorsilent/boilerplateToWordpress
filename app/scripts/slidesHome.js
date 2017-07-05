$(document).ready(function(){
    $('#home-banner').slick({
        slidesToShow: 1,
        infinity: false,
        arrows: true,
        responsive: [
            {
            breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            },

        ]
    });
    $('#clients-slide').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        infinity: false,
        dots: true,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },

        ]
    });

    $('#partners-slide').slick({
        slidesToShow: 4,
        infinity: false,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },

        ]
    });
});