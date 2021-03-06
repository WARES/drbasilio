// This is the custom javascript file

jQuery(document).ready(function($) {
    "use strict";

    // === Header Menu Button ===
    $('#menu-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#main-nav').toggleClass('fade');
    });
    $('#main-nav').on('click',function(){
        $('#menu-button').removeClass('close-icon');
        $('#main-nav').removeClass('fade');
    });

    // === LightGallery Home ===
    if ($('#gallery').length>0) {
        $("#gallery").lightGallery({
        showThumbByDefault:true,
        addClass:'showThumbByDefault'
      });
    }

    // === Footer Instagram Photos ===
    var feedFooter = new Instafeed({
        //get: 'tagged',
        //tagName: 'NichifyPerspectives', // place your tage here
        get: 'user',
        userId: '6359921340',
        sortBy: 'most-liked',
        clientId: '0b15f9f9630546edb41aee333dc5cb28', // place the client id here
        accessToken: '6359921340.0b15f9f.ceb0041f1fe543188a1d62a2f343a7cb',
        template: '<li><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
        target: 'instragram-footer',
        limit: 6,
        resolution: 'low_resolution',
    });
    if ($('#instragram-footer').length>0) {
        feedFooter.run();
    }

    // === Sidebar Instagram Widget ===
    var feedSidebar = new Instafeed({
        //get: 'tagged',
        //tagName: 'NichifyPerspectives', // place your tage here
        get: 'user',
        userId: '6359921340',
        sortBy: 'most-liked',
          clientId: '0b15f9f9630546edb41aee333dc5cb28', // place the client id here
        accessToken: '6359921340.0b15f9f.ceb0041f1fe543188a1d62a2f343a7cb',
        template: '<li><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
        target: 'instagram-sidebar-widget',
        limit: 8,
        resolution: 'low_resolution',
    });
    if ($('#instagram-sidebar-widget').length>0) {
        feedSidebar.run();
    }

    // === Countdown index.html config ===
    if ($('#countdown-home-1').length>0) {
       $("#countdown-home-1").countdown({
            date: "30 march 2016 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }

    // === Countdown track.html config ===
    if ($('#countdown-1').length>0) {
        $("#countdown-1").countdown({
            date: "30 march 2016 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }
    if ($('#countdown-2').length>0) {
        $("#countdown-2").countdown({
            date: "12 march 2016 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }

    // === Form Validation ===
    // Contact Page Form
     if ($('#contact-form').length>0) {
        $('#contact-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            }, //end rules
            messages: {
                email: {
                    required: "Please type a e-mail address.",
                    email: "This is not a valid email address."
                }
            }
        });// end validate
    }
    //
    // === Revolution Slider config ===
    if ($('.slider').length>0) {
        jQuery('.slider').revolution({
            delay:9000,
            startwidth:1920,
            startheight:950,
            //
            fullScreenAlignForce:"off",
            autoHeight:"off",
            minHeight:"off",
            //
            fullWidth:"off",
            forceFullWidth:"off",
            fullScreen:"off",
            fullScreenOffset:"0px",
            //
            onHoverStop:"on",
            //
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:3,
            //
            hideThumbsOnMobile:"on",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"on",
            hideArrowsOnMobile:"on",
            hideThumbsUnderResoluition:0,
            //
            hideThumbs:1,
            hideTimerBar:"on",
            //
            keyboardNavigation:"on",
            //
            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"round",
            //
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:30,
            navigationVOffset:105,
        });
    }

    // === Responsive Videos ===
    if ($('.embed-video').length>0) {
        $('.embed-video').fitVids();
    }

    // === ScrollTo annimation ===
    $('.scrollTo').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        if ($(target).length>0) {
            $('body, html').stop().animate({
                'scrollTop': $(target).offset().top-0
            }, 1000, 'swing',
            function() {
                window.location.hash = target;
            });
        }
    }); // End Click

    // === Go to top ===
    $('.go-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

    // === Header Nav BG ===
    $(window).scroll(function(){
        if($(document).scrollTop() > 150)
        {
            $('.navigation-bar').addClass('scroll-BG');
        }
        else
        {
           $('.navigation-bar').removeClass('scroll-BG');
        }
    });

    // === Header Parallax Image Style ===
    $(window).on('scroll', function(){
        var curPos = $(window).scrollTop();
        $('.header-parallax-image').css('background-position', 'right bottom -' + curPos * .8 + 'px');
        $('.navigation-bar').addClass('scroll-BG');
        //fadePanels(curPos);
    }).scroll();

});// END READY
