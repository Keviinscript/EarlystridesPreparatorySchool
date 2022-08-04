(function ($) {
    "use strict";
  
    var fixed_top = $(".main-menu");
    var scroll_top_open = $(".scroll-top");
    var facility = $(".spin");
    var facility1 = $(".spin1");
    var facility2 = $(".spin2");
    
  // scroll-up button and navbar position on scroll
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        fixed_top.addClass(" fadeInDown menu-fixed headerbg");
      } else {
        fixed_top.removeClass("fadeInDown menu-fixed headerbg");
      }
  
      if ($(this).scrollTop() > 800) {
        scroll_top_open.addClass("open");
      } else {
        scroll_top_open.removeClass("open");
      }
    });
  
   
  })(jQuery);

 // JQUERY MUST BE LINKED AND ADDED TO THE TOP OF THE HTML SCRIPTS LINK


