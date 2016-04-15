jQuery(document).ready(function ($) {
    $('.flexslider').flexslider({
        animation: "slide"
    });

    $('.fancybox').fancybox({});

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});


function toggleMenu() {
    jQuery('.menu').slideToggle();
}
