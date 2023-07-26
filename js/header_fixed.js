$(function() {
    var $header = $('#header');
    var change_header_position = $("#header").outerHeight(true);
    // Header Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
});