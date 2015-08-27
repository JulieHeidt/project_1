// var player2;
// var player1; 
// v
var square = $("square");
var Dot = function(){
	this.element= $("<div class='dot'></div>");
}

$("#begin").click(function(){
	setInterval(function(){
		var dot = new Dot();
		$(".floor").append( dot.element );
		setTimeout( function () {
			dot.element.addClass("move");
		}, 100 );
	},1000)
});

$("body").on("keydown", function(event){
	key = event.which;
	if(key===65 || key===83 || key===68 || key===74 || key===75 || key===76){
		console.log("hit");	
		checkCollision(key);
	}
	gameOn(key);
	//calling this function inside allows me to access key variable in next function..
});



// add event listener for elements to end animation (Ask andre for this one) to 'destroy' dots already off viewport
$(".dot").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	alert("this works!")
});

//if statement to check if position of dot within the position of "fixed" square
// function checkCollision( key ){


// }​
	
	// Look to see if ANY .dot is in 'dotPosition'[key]
	// 	//loop through all dots on screen
		//add point	if collision is detected


	// var dotPosition = document.getElementById("dotOne").getBoundingClientRect().top
	// if(dotPosition >= 500 && dotPosition <= 600){
	// 	console.log("add a point");

	// }
	// console.log(dotPosition);
// };


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




function createTile( loc ){
	$(".floor").append("<div class='square start'></div>");
	$("#"+loc).addClass(loc);
	console.log( loc + " tile")
}

createTile("left");
createTile("center");
createTile("right");



// write a function on keydown that checks the top of each object to see if they are the same
















// document.getElementById("center").addEventListener("keyDown", goalPiece);
// document.getElementById("right").addEventListener("keyDown", goalPiece);

// function goalPiece(){
// 	console.log("kjf");
// }




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