// Hide Show Toggle jQuery

$(function () {
  $("#hide").click(function () {
    $("p").hide();
  });
  $("#show").click(function () {
    $("p").show();
  });
  $("#toggle").click(function () {
    $("p").toggle();
  });
});

//   Fade jQuery

// FadeIn

$(function () {
  $(".fadein").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(2000);
  });
});

//   Fade Out

$(function () {
  $(".fadeout").click(function () {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(2000);
  });
});

//   Fade Toggle

$(function () {
  $(".fadetoggle").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(2000);
  });
});

//   Fade To

$(function () {
  $(".fadeto").click(function () {
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
});

// Slide jQuery

// SlideDown

$(function () {
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });
});

//   SlideUp

$(function () {
  $(".flip").click(function () {
    $(".panel").slideUp("slow");
  });
});

//   SlideToggle

$(function () {
  $(".toggleflip").click(function () {
    $(".togglepanel").slideToggle("slow");
  });
});

//  Animate jQuery

// Simple Animation

$(function () {
  $(".animate").click(function () {
    $(".simple").animate({ left: "250px" });
  });
});

//  Animation with Multiple Properties

$(function () {
  $(".multi").click(function () {
    $(".multiple").animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    });
  });
});

//  Animation with Multiple Properties

$(function () {
  $(".relative").click(function () {
    $(".value").animate({
      left: "250px",
      height: "+=150px",
      width: "+=150px",
    });
  });
});

//  Animation with Pre-defined Values

$(function () {
  $(".pre").click(function () {
    $(".defined").animate({
      height: "toggle",
    });
  });
});

//  Animation with Queue Functionality

$(function () {
  $(".queue").click(function () {
    var div = $(".function");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.8" }, "slow");
  });
});

$(function () {
  $(".hi").click(function () {
    var div = $(".hello");
    div.animate({ left: "100px" }, "slow");
    div.animate({ fontSize: "3em" }, "slow");
  });
});

//  jQuery Stop Animations

$(document).ready(function () {
  $(".start").click(function () {
    var div = $(".he");
    div.animate({ left: "100px" }, "slow");
    div.animate({ fontSize: "5em" }, "slow");
  });
  $(".stop").click(function () {
    $(".he").stop();
  });
});

//  jQuery Callback Functions


// With CallBack Function

$(function(){
  $(".with").click(function(){
    $(".callback").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});

//  Without CallBack Function

$(function(){
  $(".without").click(function(){
    $(".call").hide(1000);
    alert("The paragraph is now hidden");
  });
});

//  jQuery Method Chaining

$(function(){
  $(".chaining").click(function(){
    $("#p1").css("color", "orange").css("background-color" , "black").slideUp(2000).slideDown(2000);
  });
});

//  jQuery - Get Content and Attributes

//  Get Content - text(), html()

$(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});

//  Get Content - val() 

$(function(){
  $(".value").click(function(){
    alert("Value is: " + $("#val").val());
  });
});

//  Get Attributes - attr()

$(function(){
  $("attr").click(function(){
    alert($("#link").attr("href"));
  });
});

//  jQuery - Set Content and Attributes

//  Set Content - text() , html() , val()

$(function(){
  $("#setbtn1").click(function(){
    $("#settest1").text("Hello world!");
  });
  $("#setbtn2").click(function(){
    $("#settest2").html("<b>Hello world!</b>");
  });
  $("#setbtn3").click(function(){
    $("#settest3").val("Srivalli");
  });
});

//  A Callback Function for text(), html(), and val()

$(function(){
  $("#callbtn1").click(function(){
    $("#calltest1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#callbtn2").click(function(){
    $("#calltest2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
});

//  Set Attributes - attr()

$(function(){
  $("#setval").click(function(){
    $("#w3s").attr({"href": "https://twicemediahouse.com/", "title" : "twicemediahouse.com"});
    $("#w3s").text("twicemediahouse.com")
  });
});


//  jQuery - Add Elements

//  jQuery append() Method

$(function(){
  $("#append1").click(function(){
    $(".appendp").append(" <b>Appended text</b>.");
  });

  $("#append2").click(function(){
    $(".appendol").append("<li>Appended item</li>");
  });
});

//  jQuery prepend() Method

$(document).ready(function(){
  $("#prepend1").click(function(){
    $(".prependp").prepend("<b>Prepended text</b>. ");
  });
  $("#prepend2").click(function(){
    $(".prependol").prepend("<li>Prepended item</li>");
  });
});

//  jQuery after() and before() Methods

$(document).ready(function(){
  $("#before").click(function(){
    $("#img").before("<b>Before</b>");
  });

  $("#after").click(function(){
    $("#img").after("<b>After</b>");
  });
});

//  jQuery - Remove Elements

//  jQuery remove() Method

$(document).ready(function(){
  $(".remove").click(function(){
    $("#remove").remove();
  });
});

//  jQuery empty() Method

$(document).ready(function(){
  $(".empty").click(function(){
    $("#empty").empty();
  });
});