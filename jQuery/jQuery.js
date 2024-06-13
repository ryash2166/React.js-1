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

$(function () {
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

$(function(){
  $("#prepend1").click(function(){
    $(".prependp").prepend("<b>Prepended text</b>. ");
  });
  $("#prepend2").click(function(){
    $(".prependol").prepend("<li>Prepended item</li>");
  });
});

//  jQuery after() and before() Methods

$(function(){
  $("#before").click(function(){
    $("#img").before("<b>Before</b>");
  });

  $("#after").click(function(){
    $("#img").after("<b>After</b>");
  });
});

//  jQuery - Remove Elements

//  jQuery remove() Method

$(function(){
  $(".remove").click(function(){
    $("#remove").remove();
  });
});

//  jQuery empty() Method

$(function(){
  $(".empty").click(function(){
    $("#empty").empty();
  });
});


//  jQuery Class() Method

//  jQuery addClass() Method

$(function(){
  $("#buttonAdd").click(function(){
    $("#blue").addClass("blue");
    $("#important").addClass("important");
  });
});

//  jQuery removeClass() Method

$(function(){
  $(".buttonRemove").click(function(){
    $("h1, h2, p").removeClass("blueRemove");
  });
});

//  jQuery toggleClass() Method


$(function(){
  $(".buttontoggle").click(function(){
    $("#bluetoggle ").toggleClass("bluetoggle");
  });
});

//  jQuery - Dimensions 

//  jQuery width() and height() Methods

$(function(){
  $(".dimensionsButton1").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#dimensions1").width() + "</br>";
    txt += "Height of div: " + $("#dimensions1").height();
    $("#dimensions1").html(txt);
  });
});


//  jQuery innerWidth() and innerHeight() Methods

$(function(){
  $(".dimensionsButton2").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#dimensions2").width() + "</br>";
    txt += "Height of div: " + $("#dimensions2").height() + "</br>";
    txt += "Inner width of div: " + $("#dimensions2").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#dimensions2").innerHeight();
    $("#dimensions2").html(txt);
  });
});

//  jQuery outerWidth() and outerHeight() Methods

$(function(){
  $(".dimensionsButton3").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#dimensions3").width() + "</br>";
    txt += "Height of div: " + $("#dimensions3").height() + "</br>";
    txt += "Outer width of div: " + $("#dimensions3").outerWidth() + "</br>";
    txt += "Outer height of div: " + $("#dimensions3").outerHeight();
    $("#dimensions3").html(txt);
  });
});

//  jQuery outerWidth(true) and outerHeight(true) Methods

$(function(){
  $(".dimensionsButton4").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#dimensions4").width() + "</br>";
    txt += "Height of div: " + $("#dimensions4").height() + "</br>";
    txt += "Outer width of div: " + $("#dimensions4").outerWidth(true) + "</br>";
    txt += "Outer height of div: " + $("#dimensions4").outerHeight(true);
    $("#dimensions4").html(txt);
  });
});


//  jQuery Traversing - Ancestors

//  jQuery parent() Method

$(function(){
  $(".parent").parent().css({"color": "red", "border": "2px solid red"});
});

//  jQuery parents() Method

// $(function(){
//   $(".parents").parents().css({"color": "red", "border": "2px solid red"});
// });

//  jQuery parentsUntil() Method

// $(function(){
//   $(".parentsutils").parentsUntil().css({"color": "red", "border": "2px solid red"});
// });

//  jQuery Traversing - Descendants

//  jQuery children() Method

$(function(){
  $(".descendants").children().css({"color": "red", "border": "2px solid red"});
});

//  jQuery children(first , second) Method

$(function(){
  $(".descendants1").children("p.first").css({"color": "red", "border": "2px solid red"});
});

//  jQuery find() Method


$(function(){
  $(".descendants2").find("span").css({"color": "red", "border": "2px solid red"});
});

//  jQuery find(first , second) Method

$(function(){
  $(".descendants3").find("*").css({"color": "red", "border": "2px solid red"});
});


//  jQuery Traversing - Siblings 

//  jQuery siblings() Metho

$(function(){
  $(".siblings1").siblings().css({"color": "red", "border": "2px solid red"});
});

$(function(){
  $(".siblings-2").siblings("p").css({"color": "red", "border": "2px solid red"});
});


//  jQuery next() Method

$(function(){
  $(".next1").next().css({"color": "red", "border": "2px solid red"});
});

//  jQuery nextAll() Method

$(function(){
  $(".next2").nextAll().css({"color": "red", "border": "2px solid red"});
});

//  jQuery nextUntil() Method

$(function(){
  $(".next3").nextUntil().css({"color": "red", "border": "2px solid red"});
});

//  jQuery prev() Method

$(function(){
  $(".prev1").prev().css({"color": "red", "border": "2px solid red"});
});

//  jQuery prevAll() Method

$(function(){
  $(".prev2").prevAll().css({"color": "red", "border": "2px solid red"});
});

//  jQuery prevUntil() Method

$(function(){
  $(".prev3").prevUntil().css({"color": "red", "border": "2px solid red"});
});

//  jQuery Traversing - Filtering

//  jQuery first() Method

$(document).ready(function(){
  $(".filterFirst").first().css("background-color", "yellow");
});

//  jQuery flast() Method

$(document).ready(function(){
  $(".filterLast").last().css("background-color", "yellow");
});


//  jQuery eq() method

$(document).ready(function(){
  $(".filterEq").eq(1).css("background-color", "yellow");
});

//  jQuery filter() method

$(document).ready(function(){
  $("p").filter(".intro").css("background-color", "yellow");
});

//  jQuery not() method

// $(function(){
//   $("p").not(".intro1").css("background-color", "yellow");
// });