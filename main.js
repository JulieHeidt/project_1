var player 

$("#begin").click(function(){
	console.log("hello");
});

document.addEventListener("keydown", function(event){
	key = event.which;
	if(key===65 || key===83 || key===68 || key===74 || key===75 || key===76){
		// $left.offset() === div.offset();
	console.log("hit");	
	}
});

var Dot = function(){
	this.element="<div class='dot'></div>"
}
var dot = new Dot();
function fallingDots(){
	$(".floor").append(dot.element);
}
fallingDots();


document.getElementById("left").addEventListener("keyDown", goalPiece);
	function goalPiece(){
	console.log("kjf");
	}
document.getElementById("center").addEventListener("keyDown", goalPiece);
	function goalPiece(){
	console.log("kjf");
	}
document.getElementById("right").addEventListener("keyDown", goalPiece);
	function goalPiece(){
	console.log("kjf");
	}
// document.getElementById("one").addEventListener("keyDown", counter);
// 	function counter(){
// 	console.log("oneee");	
// 	}
// document.getElementById("two").addEventListener("keyDown", counter);
// 	function counter(){
// 	console.log("oneee");
// 	}
// document.getElementById("three").addEventListener("keyDown", counter);
// 	function counter(){
// 	console.log("oneee");
// 	}

// listen for animation start
// dot.addEventListener("animationstart",function(drop){
//     console.log("dot one animation is working");
// },false);

// two.addEventListener("animationstart",function(? event){
//     console.log("dot two animation is working");
// },false);

// three.addEventListener("animationstart",function(){
//     console.log("dot three animation is working");
// },false);



// function fallingDots(){

// 	for (var i = 0; i < ; ++i) {


// function isCollide (a, b) {
//     return (
//         b.y >= a.y && b.y <= a.y + a.height
//         add to b.y to make game "easier"---don't need to watch for x
//     );
// }



// full screen mode-->
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
//end full screen mode


function createLeftTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#left").addClass("left");
	console.log("sucks")
}
function createCenterTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#center").addClass("center");
}
function createRightTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#right").addClass("right");
}



// function restartgame(){
// 	createLeftTile();
// 	createCenterTile();
// 	createRightTile();
// 	window.location.reload();
// }

// document.querySelector("").addEventListener("click", );
// function (){
// 	for(var i = 0; i < ??.length; i++){
// 		??[i].innerHTML = "";
// 		console.log(i);
// 	}
// }

// $( "" ).keyDown(function( event ) {
//   console.log( "clicked: " + event.target );
// });


// var p1Click = new Audio("find sound");
// var p2Click = new Audio("findsound");

// $(window).on("keydown", function(event){
// 	console.log(event.which);
// 	if(event.which === "a" || "){
// 		console.log("p1");
// 		p1Click.play();

// 	}else if(event.which === ?){
// 		console.log("p2");
// 		p1Click.play();

// 	}// else if(event.which === )

// });


//While function, add new dot, fall...add position with jquery

// function checkForWinner(){
