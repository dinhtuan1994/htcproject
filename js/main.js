(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Feature
    $( document ).ready(function() {
        $("#error-card").hide();
        $("#notfound-card").hide();
    });

    $('#feature-button').click(function () {
        let inverterBrand = $("#inverter-brand").val();
        let errorCode = $("#error-code").val().toUpperCase().trim();

        // Validate input
        if (!inverterBrand || !errorCode) {
            alert('Vui lòng chọn hãng và nhập mã lỗi');
            return false;
        }
        
        const errorInfo = errorInforDatabase[inverterBrand][errorCode];

        if (!errorInfo) {
            showNotfoundCard(errorCode);
        } else {
            showErrorCard(inverterBrand, errorCode, errorInfo);
        }
 
        return false;
    });

    function showNotfoundCard(errorCode) {
         $("#error-card").hide();
         $("#formSearch").hide();
         $("#notfound-card").show();

         $("#notfound-desc").html(`Mã lỗi <b>${errorCode}</b> chưa có trong cơ sở dữ liệu của chúng tôi.`)

    }

     $('#backFeature').on( "click", function() {
        showInitFeature();
     });

     $(document).on('click', '#backFeature', function() {
        showInitFeature();
     });

    function showInitFeature() {
        $("#error-card").hide();
        $("#notfound-card").hide();
        $("#formSearch").show();
    }

    function showErrorCard(inverterBrand, errorCode, errorInfo) {
        $("#formSearch").hide();
        $("#notfound-card").hide();
        $("#error-card").show();

        $("#error-title").html(errorInfo.name);
        const severityClasses = {
            "Cao": "bg-danger text-white",
            "Trung Bình": "bg-warning text-dark",
            "Thấp": "bg-orange text-white"
        };

        $('#error-level')
            .text("Mức độ: " + errorInfo.severity)
            .addClass(severityClasses[errorInfo.severity])
            .addClass("p-2 rounded d-inline-block");

        //$("#error-level").html(`Mức độ ${errorInfo.severity}`);
        $("#error-code-display").html(inverterBrand.toUpperCase() + " "+ errorCode);
        $("#error-description").html(errorInfo.description);

        const $errorCause = $('#error-cause');
        // Clear any existing content
        $errorCause.empty();
        
        // Add each cause with icon
        errorInfo.causes.forEach(function(cause) {
            $errorCause.append(
            $('<li class="p-b-3">').html(
                '<i class="bi bi-x-circle-fill text-danger fs-6 me-2"></i>' + cause
            )
            );
        });

        // Get the OL element
        const $errorSolution = $('#error-solution');
  
        // Clear any existing content
        $errorSolution.empty();
        
        // Add each solution with check icon
        errorInfo.solutions.forEach(function(solution) {
            $errorSolution.append(
            $('<li>').addClass('active-step').html( solution));
        });
    }
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });




    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

