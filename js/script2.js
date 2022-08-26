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
  function moveToSelected(element) {
    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  }
  
  // Eventos teclado
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected("prev");
        break;
  
      case 39: // right
        moveToSelected("next");
        break;
  
      default:
        return;
    }
    e.preventDefault();
  });

  // $("#carousel div.selected").mouseenter(
  //   function(){
  //       $("#carousel div.selected").css({transform :"scale3d(1.3, 1.3, 1.3)"})
  //   }
  // ).mouseleave(
  //   function(){
  //       $("#carousel div.selected").css({transform :"scale3d(1,1,1)"})
  //   })


  
  $("#carousel div").click(function () {
    moveToSelected($(this));
  });
  
  $("#prev").click(function () {
    moveToSelected("prev");
  });
  
  $("#next").click(function () {
    moveToSelected("next");
  });

 // JQUERY MUST BE LINKED AND ADDED TO THE TOP OF THE HTML SCRIPTS LINK


