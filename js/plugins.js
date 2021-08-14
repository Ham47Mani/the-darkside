/*
 * Template Name      : The-Darkside
 * Template Version   : V 1.0.0
 * Template Url       : .....................
 * Language           : HTML5 | CSS3 |JavaScript
 * Framework          : jQuery [JavaScript]
 * Preprocesseur      : SaSS [CSS]
 * Contact Me : Skaype   :- Boudraa.Hammani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com*/
/*global $, window*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    
    /*                       End Cashing Variables
    ========================================================================== */
    
    /*                       Start Header
    ========================================================================== */
    //--> Customize The DropDown Menu
    $("header nav .navbar .drop").click(function () {
        $("header nav .dropdown").slideToggle(1000);
    });
    
    $("header nav .navbar li:not(.drop)").click(function () {
        $("header nav .dropdown").slideUp(1000);
    });
    
    //--> Initialisation Of BxSlider
    $('.bxslider').bxSlider({
        auto : true,
        speed : 1000,
        pager : false
    });
    /*                       End Header
    ========================================================================== */
    
    /*                       Start Nice Scroll Library
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: 'var(--main-Color)',
        cursorborder: '1px solid var(--main-Color)'
    });
    /*                       End Nice Scroll Library
    ========================================================================== */
});

/* ------------------------------- Start Loading Screene ------------------------------- */
$(window).on("load", function () {
    "use strict";
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
});
/* ------------------------------- End Loading Screene ------------------------------- */