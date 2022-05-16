;(function($){
    "use strict";

    $(document).ready(function(){

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });


        /**-----------------------------
         * Signin Signup PopUp 
         * ---------------------------*/
        $(document).on('click','.nav-right-content .user',function(e){
            e.preventDefault();
            $('.signin-signup-popup').addClass('active');
            $('.body-overlay').addClass('active');
        });

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            $('.signin-signup-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
        });

        $(document).on('click','.when-click-change-signup',function(e){
            e.preventDefault();
            $('.signup-part').addClass('part-active');
            $('.signin-part').addClass('part-hide');
        });
        
        $(document).on('click','.when-click-change-signin',function(e){
            e.preventDefault();
            $('.signup-part').removeClass('part-active');
            $('.signin-part').removeClass('part-hide');
        });


        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/ 
        $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
            e.preventDefault();
        })  

        /**-----------------------------
         *  Home 01 Slider
         * ---------------------------*/
        $('.home-01-slider').slick({
            dots: true,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left">',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right">',
        });

        /**-----------------------------
         *  Home 02 Slider
         * ---------------------------*/
        $('.home-02-slider').slick({
            dots: true,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            responsive: [{
                    breakpoint: 575.98,
                    settings: {
                        dots: false,
                    }
                }
            ]
        });

        /**-----------------------------
         *  Home 03 Slider
         * ---------------------------*/
        $('.home-03-sliderr').slick({
            dots: false,
            infinite: true,
            speed: 1200,
            autoplay: false,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left">',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right">',
        });

        /*---------------------------
            Home 02 Video PopUp
        ---------------------------*/
        $('.video-play-button').magnificPopup({
            type: 'iframe'
        });  

        /**-----------------------------
         *  Explore Button ScrollDown
         * ---------------------------*/
        $('.explore-button a').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".activity-area").offset().top
            }, 2000, 'easeInOutExpo');
        });

        
        /**-----------------------------
         *  Gallery Tab
         * ---------------------------*/ 
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows',
		});
		// Filter Items on Click
		$('.gallery-tab li').on( 'click', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// Active Link Switching 
		$('.gallery-tab li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
		
		
		/**-----------------------------
         *  Gallery Image PopUp
         * ---------------------------*/
		$('.gallery-single-item .hover-state a').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
            }
        });

        
        /**-----------------------------
         *  Babysitter Slider
         * ---------------------------*/
        $('.child-care-babysitter-slider').slick({
            dots: true,
            infinite: true,
            speed: 1500,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                    }
                }, {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });

        /**-----------------------------
         *  Babysitter Single Slider
         * ---------------------------*/
        $('.babysitter-single-slider').slick({
            dots: false,
            infinite: true,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left">',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right">',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });


        /*--------------------
            Counter Up
        ---------------------*/
        $('.single-counter-number').counterUp({
            delay: 20,
            time: 1000,
        });
          
        
        /*-----------------------------
            item-box-style-01 Initial Active
        ------------------------------*/
        var singleBox1 = $('.item-box-style-01')
        singleBox1.mouseover(function() {
            singleBox1.removeClass('active');
            $(this).addClass('active');
        });
        
        /*-----------------------------
            item-box-style-02 Initial Active
        ------------------------------*/
        var singleBox2 = $('.item-box-style-02')
        singleBox2.mouseover(function() {
            singleBox2.removeClass('active');
            $(this).addClass('active');
        });
        
        /*-----------------------------
            item-box-style-03 Initial Active
        ------------------------------*/
        var singleBox3 = $('.item-box-style-03')
        singleBox3.mouseover(function() {
            singleBox3.removeClass('active');
            $(this).addClass('active');
        });
        
        /*-----------------------------
            item-box-style-04 Initial Active
        ------------------------------*/
        var singleBox4 = $('.item-box-style-04')
        singleBox4.mouseover(function() {
            singleBox4.removeClass('active');
            $(this).addClass('active');
        });
        
        /*-----------------------------
            single-price-box Initial Active
        ------------------------------*/
        var singleBox5 = $('.single-price-box')
        singleBox5.mouseover(function() {
            singleBox5.removeClass('active');
            $(this).addClass('active');
        });
        
        /*-----------------------------
            social-link-rotate-style Active
        ------------------------------*/
        var singleBox6 = $('.social-link-rotate-style li')
        singleBox6.mouseover(function() {
            singleBox6.removeClass('active');
            $(this).addClass('active');
        });
        


        /*---------------------------
            Nice Select
        ---------------------------*/
        $('select').niceSelect();
        

        /*---------------------------
            Date Picker
        ---------------------------*/
        // jQuery('#datepicker').datetimepicker({
        //     timepicker:false,
        //     format:'d.m.Y',
        // });
        

        /*---------------------------
            Time Picker
        ---------------------------*/
        // jQuery('#datepicker').datetimepicker({
        //     datepicker:false,
        //     format:'H:i'
        // });


        
        /*---------------------------
            CountDown
        ---------------------------*/
        // $('.countdown').downCount({
        //     date: '07/09/2020 12:00:00',
        //     offset: +6
        // }, function () {
        //     alert('Countdown done!');
        // });

        
    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }

       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;
       
    });
           

    $(window).on('load',function(){

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);


        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(0);
        });


        /*---------------------
            Back To Top
        ----------------------*/
        $(".back-to-top").on('click', function() {
            $("html").animate({
                "scrollTop": "0"
            }, 2000);
        });

    });


})(jQuery);