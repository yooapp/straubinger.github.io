$(function () {
    "use strict";

    $(document).ready(function () {
        hamburger();
    });

    function hamburger() {

        $('.nav-bar-icon').click(function () {
            $(this).toggleClass('active');
            $('nav').toggleClass('active');
        });
    };
});