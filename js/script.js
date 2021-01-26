$(document).ready(function () {
    const menu = $('nav');
    const menuButton = $('.menu-head button');
    const menuLinks = $('.menu-links');
    const links = $('.menu-links a');

    $(menuButton).click(function () {
        $(menuLinks).toggleClass('menu-open');
    });

    $(links).click(function (e) {
        e.preventDefault();
        $(menu).fadeOut(2000, function () {
            window.location.href = $(e.target).attr('href');
        });
    });
});