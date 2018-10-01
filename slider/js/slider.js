var animationSpeed = 1000;
/*speed auto*/
var speed = 5000;
window.onload = function(){
   var numberimage = $('img').length;
  for(var i = 1; i <= numberimage; i++){
    var source = document.getElementsByTagName('img')[i-1].src;
    $(".bullet").append("<div class='dots' onclick = currentimg("+i+")><i class='fa fa-circle' aria-hidden='true'></i></div>");
     $(".minies").append("<div class='mini' onclick='currentimg("+i+")'>"+"<img src="+source  +" "+"alt='slide'></div>");
  }
//form show
$("#formText").hide();
$("#getForm").click(function(){
  $("#formText").toggle(1000);
  $("#formText").css("display","flex");
});
$("#btndelete").click(function(){
  $(".parag").remove();
  $("#formText").slideUp(1000);
});
$("#formSpeed").hide();
$("#getSpeed").click(function(){
  $("#formSpeed").toggle(1000);
});
$("#autospeed").hide();
$("#getauto").click(function(){
  $("#autospeed").toggle(1000);
});
/*control the speed*/
$("#btnSpeed").click(function(){
   animationSpeed = parseInt($("#nSpeed").val());
   $("#formSpeed").slideUp(1000);
});
//text
$("#btn").click(function(){
  var text = document.getElementById("btn").value;
  var textContents = document.getElementById("phrase").value;
  var colortext = document.getElementById("color").value;
  var size = document.getElementById("size").value;
  var x = document.getElementById("numberx").value;
  var y = document.getElementById("numbery").value;
  if(textContents != null){
    if($(".parag") != null){
      $(".parag").remove();
    }
    $("#formText").slideUp(1000);
    $(".slide").append("<p class='parag'>"+textContents+"</p>");
    $(".parag").css("fontSize", size+"px");
    $(".parag").css("color" , colortext);
    $(".parag").css("top" , y+"px");
    $(".parag").css("left" , x+"px");
  }
});
function showimg() {
  var i;
  var numbrDImage = document.getElementsByClassName("slide");
  var numberDeBullet = document.getElementsByClassName("fa-circle");
  for (i = 0; i < numbrDImage.length; i++) {
    numbrDImage[i].style.display = "none";
  }
  numbrDImage[0].style.display = "block";
  for (var i = 0; i < numberDeBullet.length; i++) {
    numberDeBullet[i].style.color = "grey";
  }
  numberDeBullet[0].style.color = "red";
}
showimg();
/*style of arrows*/
var colorArrows = "white";
$(".fa-angle-right").css("color" , colorArrows);
$(".fa-angle-left").css("color" , colorArrows);
//auto
$("#btnspeedauto").click(function(){
  $("#autospeed").slideUp(1000);
  var auto = $("#auto").val();
  var speed = $("#nautoSpeed").val();
  if(speed == null){
    speed = 1000;
  }
  if(auto == "auto"){
     interval = setInterval(function(){ showingimg(slideIndex += 1); }, speed);
    }
  else{
    clearInterval(interval);
  }
  });
}
var slideIndex = 1;
function plusimg(numberSlide) {
  showingimg(slideIndex += numberSlide);
}
function currentimg(numberSlide){
  showingimg(slideIndex = numberSlide);
}
function showingimg(numberSlide) {
  var animation = $('#animation').val();
  var i;
  var numbrDImage = document.getElementsByClassName("slide");
  var numberDeBullet = document.getElementsByClassName("fa-circle");
  if (numberSlide > numbrDImage.length) {slideIndex = 1}
  if (numberSlide < 1) {slideIndex = numbrDImage.length}
  for (i = 0; i < numbrDImage.length; i++) {
    numbrDImage[i].style.display = "none";
  }
  if(animation == "fadein"){
  $(numbrDImage[slideIndex-1]).fadeIn(animationSpeed);
  }
  if(animation == "normal"){
  numbrDImage[slideIndex-1].style.display = "block";
  }
  if(animation == "show"){
  $(numbrDImage[slideIndex-1]).show(animationSpeed);
  }
  if(animation == "slidedown"){
  $(numbrDImage[slideIndex-1]).slideDown(animationSpeed);
  }
  for (var i = 0; i < numberDeBullet.length; i++) {
    numberDeBullet[i].style.color = "grey";
  }
  numberDeBullet[slideIndex-1].style.color = "red";
}
