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

    // Menu
    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-1).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });

    $(".navigation-menu a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent().addClass("active");
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().parent().parent().addClass("active");
        }
    });

    // Clickable Menu
    $(".has-submenu a").click(function() {
        if(window.innerWidth < 992){
            if($(this).parent().hasClass('open')){
                $(this).siblings('.submenu').removeClass('open');
                $(this).parent().removeClass('open');
            } else {
                $(this).siblings('.submenu').addClass('open');
                $(this).parent().addClass('open');
            }
        }
    });

    $('.mouse-down').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 72
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
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
    feather.replace()
}(jQuery);

$(document).ready(function () {
    // Draw menu
    drawMenu(menuItem);

    $('#sologan-text').text(`Sharing knowledge - Together we win.`);
    // Add text sologan to footer
    $('#sologan-footer').html(`Winzone.vn nơi lưu giữ và chia sẻ những kiến thức và trải nghiệm trong quá trình làm việc của tác giả.
                                    <br> Hi vọng rằng có thể giúp ích cho bạn đọc và chính tác giả.`);

});
const drawMenu = function (menuItem) {
    $(`#navigation .navigation-menu`).html(``);
    $.each(menuItem, function (index, item) {
        if (item.child) {
            $(`#navigation .navigation-menu`).append(`
                <li class="has-submenu">
                            <a href="javascript:void(0)">${item.name}</a><span class="menu-arrow"></span>
                            <ul class="submenu">
                                ${drawChildItem(item.child)}
                            </ul>
                </li>
            `);
        } else {
            $(`#navigation .navigation-menu`).append(`<li><a href="${item.href}">${item.name}</a></li>`);
        }
    });
};
const drawChildItem = function (childItems) {
    let itemHtml = '';
    for (const item of childItems) {
        itemHtml += `<li><a href="${item.href}">${item.name}</a></li>`
    }
    return itemHtml;
};


const menuItem = [
    {name: 'Home', href: 'index.html'},
    {name: 'Java', href: 'java.html'},
    {name: 'Spring', href: '', child: [
            {name: 'Spring Security', href: 'spring-security.html'},
            {name: 'Spring Data JPA', href: 'spring-data-jpa.html'},
            {name: 'Spring Restful', href: 'spring-restful.html'},
    ]},
];
