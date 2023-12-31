$(function() {
    var $header = $('#header');
    var $page_top_btn = $('#page_top_btn');
    var $price_contents = $('.price_contents');
    var $scroll_right = $('.scroll_right');
    var change_header_position = $("#header").outerHeight(true);
    var change_page_top_btn_position = 800;

    // Header Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    // Page Top Button Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_page_top_btn_position) {
            $page_top_btn.addClass('fixed');
        } else {
            $page_top_btn.removeClass('fixed');
        }

    });

    // Price Scroll Right
    $price_contents.scroll(function() {
        if ($price_contents.scrollLeft()) { 
            $scroll_right.addClass('fixed');
        } else {
            $scroll_right.removeClass('fixed');
        }
    });

});