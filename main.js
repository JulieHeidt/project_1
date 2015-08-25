// var elem = document.getElementById("ID")
// document.getElementById("floor").onkeydown = function(){
// 	if (e.addEventListener) e.addEventListener(eventName, handler, false);
// 	else e.attachEvent('on' + eventName, handler);
// el.addEventListener("click", function(){ 
// var el = document.querySelectorAll('#div-1')[0] 
// document.onkeydown = function() {
// function checkForWinner(){

var game = $('.dance')[0];

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

$('#begin').click(function(){
    $(game).show();
    launchIntoFullscreen(game);
}); 

$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var e = state ? 0 : 1 ;
    if (e === 1){
        $(game).hide();  
    }
});

var kickStart = document.getElementById("begin").addEventListener("click", function(){
	var left = document.getElementById("left");
	var center = document.getElementById("center");
	var right = document.getElementById("right");
	left.classList.add("left");
	center.classList.add("center");
	right.classList.add("right");
});
