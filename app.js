$(document).ready(function () {
    // scroll top 
    let topArrow = $('.footer-sec ul li:last-child img');
    topArrow.click(function () {
        $('body, html').animate({
            scrollTop: parseInt($('.banner-sec').offset().top)
        }, 600);
    });
    // Testmonial slider
    let testimonialSlider = $('.testimonial-sec .slider-outer-layer');
    testimonialSlider.slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        nextArrow: '<img class="next-arrow" src="./assets/images/Next-arrow.png">',
        prevArrow: '<img class="previous-arrow" src="./assets/images/Prev-arrow.png">',
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]

    });

    //   Accordion

    var $accordion = $('.accordion');
    // Initially hide all accordion content
    $accordion.find('.accordion-content').hide();
    // Initially display the accordion content with .expanded class
    $accordion.find('.accordion-group.expanded .accordion-content').show();
    $accordion.find('.accordion-header').click(function () {
        // Hide the displayed sibling accordion content so only one appears at a time
        $accordion.find(".accordion-header").not(this).parent(".accordion-group.expanded").removeClass('expanded').children('.accordion-content').stop(true, true).slideUp();
        if (!$(this).parent('.accordion-group').hasClass('expanded')) {
            // Display the accordion content if it is not displayed
            $(this).parent(".accordion-group").addClass('expanded').children('.accordion-content').stop(true, true).slideDown();
        }
        else {
            // Hide the accordion content if it is displayed
            $(this).parent(".accordion-group").removeClass('expanded').children('.accordion-content').stop(true, true).slideUp();
        }
    });

});

// Recaptcha responsive part
$(function () {
    function rescaleCaptcha() {
        var width = $('.g-recaptcha').parent().width();
        var scale;
        if (width < 302) {
            scale = width / 302;
        } else {
            scale = 1.0;
        }

        $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('transform-origin', '0 0');
        $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }

    rescaleCaptcha();
    $(window).resize(function () { rescaleCaptcha(); });

});