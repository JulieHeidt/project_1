// var score = 
var playerOne = 0;
// var playerTwo = 0;

$("#begin").click(function(){
	console.log("hello");
});


document.addEventListener("keydown", function(event){
	key = event.which;
	if(key===65 || key===83 || key===68 || key===74 || key===75 || key===76){
	console.log("hit");	
	checkCollision();
	}
	gameOn(key);
	//calling this function inside allows me to access key variable in next function..
});

//if statement to check if position of dot within the position of "fixed" square
function checkCollision(){
	var dotPosition = document.getElementById("dotOne").getBoundingClientRect().top
	if(dotPosition >= 500 && dotPosition <= 600){
	console.log("add a point");
	playerOne++
	}
	else {
	playerOne--
	}
}


//Assigning keys in a switch statement
function gameOn(key){
	switch(key){
	case 65:  //if key equals (case) in this instance 65
		console.log("you have clicked A");
		break;
	case 83:
		console.log("you have clicked B");
		break;
	case 68:  
		console.log("you have clicked C");
		break;
	case 74:  
		console.log("you have clicked J");
		break;
	case 75:  
		console.log("you have clicked K");
		break;
	case 76:  
		console.log("you have clicked L");
		break;
	}
}

var Dot = function(){
	this.element="<div class='dot ball' id='dotOne'></div>"
	$(".dot").addClass("move");
}

var Dot = function(){
	this.element="<div class='dot ball' id='dotTwo'></div>"
	$(".dot").addClass("move");
}

var Dot = function(){
	this.element="<div class='dot ball' id='dotThree'></div>"
	$(".dot").addClass("move");
}

var dot = new Dot();
function fallingDots(){
	$(".floor").append(dot.element);
}
fallingDots();


$("#begin").on("click", function(){
	$(".dot").addClass("move"); //don't need to add (.)knows its already a class
});

var ballfall = document.getElementsByClassName("dot")[0];
console.log(ballfall.getBoundingClientRect())
console.log("hi")

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



// // full screen mode-->
// var game = $('.dance')[0];
// function launchIntoFullscreen(element) {
//   if(element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if(element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   } else if(element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//   }
// }
// $('#begin').click(function(){
//     $(game).show();
//     launchIntoFullscreen(game);
// }); 
// $(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
//     var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
//     var e = state ? 0 : 1 ;
//     if (e === 1){
//         $(game).hide();  
//     }
// });
// //end full screen mode

function createLeftTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#left").addClass("left");
	console.log("sucks")
}
createLeftTile();

function createCenterTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#center").addClass("center");
}
createCenterTile();

function createRightTile(){
	$(".floor").append("<div class='square start'></div>");
	$("#right").addClass("right");
}
createRightTile();


// write a function on keydown that checks the top of each object to see if they are the same





