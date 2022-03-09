(function ($) {

    "use strict";


        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets
        });



        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });



        function initParallax() {
          $('#home').parallax("50%", 50);
          $('#service').parallax("50%", 40);
          $('#about').parallax("50%", 20);
          $('#work').parallax("50%", 30);
          $('#contact').parallax("50%", 10);
          }
        initParallax();



        $(function() {
          $('#home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });



        new WOW({ mobile: false }).init();

})(jQuery);
