// Hide Show Toggle jQuery

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
    $("#toggle").click(function(){
        $("p").toggle();
      });
  });

//   Fade jQuery

// FadeIn

$(document).ready(function(){
    $(".fadein").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(2000);
    });
  });

//   Fade Out

$(document).ready(function(){
    $(".fadeout").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(2000);
    });
  });

//   Fade Toggle

$(document).ready(function(){
    $(".fadetoggle").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(2000);
    });
  });

// Slide jQuery

// SlideDown 

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

//   SlideUp

  $(document).ready(function(){
    $(".flip").click(function(){
      $(".panel").slideUp("slow");
    });
  });

//   SlideToggle

$(document).ready(function(){
    $(".toggleflip").click(function(){
      $(".togglepanel").slideToggle("slow");
    });
  });