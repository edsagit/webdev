var links = 3;
var deg = (links - 1) * - 45;
var current = ($(window).scrollTop() / $(window).innerHeight()) * deg;

$("body").css("height", $(window).innerHeight() * 2);

$(window).scroll(function (event) {
  var current = ($(window).scrollTop() / $(window).innerHeight()) * deg;
  $(".right-container").css("transform", "rotate(" + current + "deg)");
  var current = Math.floor(($(window).scrollTop() / $(window).innerHeight()) * deg);
});
