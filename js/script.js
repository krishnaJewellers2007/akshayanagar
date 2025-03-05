$(function ($) {
    "use strict";
    //scrollspy menu
	$('body').scrollspy({
		target: '.navbar',
		offset: 81
	});

    
    //animation scroll js
	$('a[href*="#"]:not([href="#').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				htmlBody.animate({
					scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
    }); 
    
    $('ul.navbar-nav > li > a').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    });

    //type js 
    if($.fn.animatedHeadline){
        $('.typed').animatedHeadline({
            animationType: 'clip'
        });
    }
    
    //counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //about skill part js 

    var skll = $('.skills');
    skll.addClass("active")
    $(".skills .skill .skill-bar span").each(function () {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function () {
    $(".skills .skill .skill-bar span b").animate({
            "opacity": "1"
        }, 1000);
    }, 2000);

    

    var htmlBody = $('html, body');
   
    var windo = $(window),
        wWidth = windo.width();
    
    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();
        //back to top button js
        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
    
    //Preloader js
    windo.on('load',function(){
       $('.preloader').delay(500).fadeOut(500); 
       $('.spinner').delay(500).fadeOut(500); 
    });
    
     // this is for back to top
    

    //light box js
    $('.venobox').venobox({
        spinner: 'double-bounce'
    });


    //Portfolio filter js 
    windo.on("load",function(){
        if($.fn.filterizr){
            $('.filtr-container').filterizr();
        }
    });
    //Simple filter controls
    var filMenu= $('.filter_menu li');
    filMenu.on('click',function() {
        filMenu.removeClass('active');
        $(this).addClass('active');
    });

    //banner slider js
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left banner_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right banner_right"></i>',
        speed: 1000
    });
    
    //tistimonial slider js
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        infinite: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left testarr_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right testarr_right"></i>',
        arrows: true,
        speed: 1000,
    });
    
    //client slider js
    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        infinite: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left testarr_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right testarr_right"></i>',
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4
                }
              },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    //wow js   
    new WOW().init();


    //parallax and particlesJS
    if($.fn.parallax){
      $('#parallax').parallax({
          invertX: true,
          invertY: true,
          scalarX: 10,
          frictionY: .1
      });
    }


});




(function () {
  "use strict";

  var $projects = $(".projects");

  $projects.isotope({
    itemSelector: ".item",
    layoutMode: "fitRows"
  });

  $("ul.filters > li").on("click", function (e) {
    e.preventDefault();

    var filter = $(this).attr("data-filter");

    $("ul.filters > li").removeClass("active");
    $(this).addClass("active");

    $projects.isotope({
      filter: filter
    });
  });

  $(".project")
    .mouseenter(function () {
      $(this)
        .find(".project-overlay")
        .css({
          top: "-100%"
        });
      $(this)
        .find(".project-hover")
        .css({
          top: "0"
        });
    })
    .mouseleave(function () {
      $(this)
        .find(".project-overlay")
        .css({
          top: "0"
        });
      $(this)
        .find(".project-hover")
        .css({
          top: "100%"
        });
    });
})(jQuery);
