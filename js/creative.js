/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var $target = $($anchor.attr('href'))

        if ($target.hasClass('offer')) {
            $('.offer').hide()
            if ($target.hasClass('familiale')) $('#detail-des-offres-familiales').slideDown()
            if ($target.hasClass('engagement')) $('#detail-des-offres-engagement').slideDown()
            if ($target.hasClass('culturelle')) $('#detail-des-offres-culturelles').slideDown()
            $target.addClass('active').fadeIn(500, function(){
                $('html, body').stop().animate({
                    scrollTop: ($target.offset().top - 50)
                }, 1250, 'easeInOutExpo');
            })
        } else {
            $('html, body').stop().animate({
                scrollTop: ($target.offset().top - 50)
            }, 1250, 'easeInOutExpo');
        }

        $('.offer').removeClass('.active')


        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
