$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $(".navbar").addClass("navbar-fixed-top");
    }else{
        $(".navbar").removeClass("navbar-fixed-top");
    }
});