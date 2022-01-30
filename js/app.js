! function($) {
    "use strict";
    // Loader
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });

    //Sticky
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    // Back to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });

    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    //Popover
    $(function () {
        $('[data-toggle="popover"]').popover()
    });
    //Feather icon
    feather.replace();
}(jQuery);

$(document).ready(function () {
    loadMenuHtml();
    loadFooterHtml();

    $('#sologan-text').text(`Sharing knowledge - Together we win.`);
});

const loadMenuHtml = function () {
    $('#topnav').load(`${HOST_URL}/fragment/menu.html`);
};

const loadFooterHtml = function () {
    $('#footer-page').load(`${HOST_URL}/fragment/footer.html`);
};

const HOST_URL = `${window.location.origin}/winzone-blog-github/phuongdp`;
