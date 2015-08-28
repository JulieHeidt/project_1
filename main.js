var scores = {
	playerOne: 0,
	playerTwo: 0,
};

// var Blocks = //square
var currPlayer = "player 1";
var Dot = function(){
	this.element= $("<div class='dot'></div>");
	//var rand = Math.random();
	var dotArray = [65,83,68];
	var loc = dotArray[rando()];
	$(".dot").addClass("loc"+loc);
}

var arrayOfDots = [];
var $floor = $(".floor");

$("#begin").click(function(){
	setInterval(function(){
		var dot = new Dot();
		$floor.append( dot.element );
		console.log(dot.element)
		setTimeout( function () {
			(dot.element).addClass("move");
		}, 100 );
	},3000)

});

function rando() {
	return Math.floor( Math.random() * 3 );
}

function playerCheck(){
	if (player1 === true) {
		console.log("Player 1")
	}else {
		console.log("Player 1 is false")
		player1 = true;
		console.log("Player was set to " + playerOne);
	}
}

function keyDown(e){
	var Blocks = $(".block.loc" + e.which);
	for (var i = 0; i < block.length; i++) {
		if(blocks[i].offset().top>=500  && blocks[i].offset().top<=600){
		scores[currPlayer]++;
		}
		console.log("works");
	};
}

function createTile( loc ){
	//$(".floor").append("<div class='square start'></div>");
	//$("#"+loc).addClass(loc);
	console.log( loc + " tile");
	createTile("left");
	console.log("left")
	createTile("center");
	createTile("right");
}

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

function gameOn(key){
	switch(key){
	case 65:  //if key equals (case) in this instance 65
		console.log("you have clicked A");
		break;
	case 83:
		console.log("you have clicked S");
		break;
	case 68:  
		console.log("you have clicked D");
		break;
	}
}


$("body").on("keydown", function(event){
	key = event.which;
	if(key===65 || key===83 || key===68) {
		console.log("hit");	
		}
	});
// function kill (){



document.getElementById("center").addEventListener("keyDown", goalPiece);
document.getElementById("right").addEventListener("keyDown", goalPiece);

function goalPiece(){
	console.log("kjf");
}




createTile();















// 	gameOn(key);
// 	//calling this function inside allows me to access key variable in next function..
// });


// var dot = new Dot();
// function fallingDots(){
// 	$(".floor").append(dot.element);
// 	}


// // add event listener for elements to end animation (Ask andre for this one) to 'destroy' dots already off viewport
// $(".dot").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 	alert("this works!")
// });

// //if statement to check if position of dot within the position of "fixed" square

// function checkCollision (key){

// 	console.log('test');

// // }​
	
// 	// Look to see if ANY .dot is in 'dotPosition'[key]
// 	// 	//loop through all dots on screen
// 		//add point	if collision is detected


// 	// var dotPosition = document.getElementById("dotOne").getBoundingClientRect().top
// 	// if(dotPosition >= 500 && dotPosition <= 600){
// 	// 	console.log("add a point");

// 	// }
// 	// console.log(dotPosition);
// // };


// //Assigning keys in a switch statement
// function gameOn(key){
// 	switch(key){
// 	case 65:  //if key equals (case) in this instance 65
// 		console.log("you have clicked A");
// 		break;
// 	case 83:
// 		console.log("you have clicked B");
// 		break;
// 	case 68:  
// 		console.log("you have clicked C");
// 		break;
// 	case 74:  
// 		console.log("you have clicked J");
// 		break;
// 	case 75:  
// 		console.log("you have clicked K");
// 		break;
// 	case 76:  
// 		console.log("you have clicked L");
// 		break;
// 	}
// }




// write a function on keydown that checks the top of each object to see if they are the same



// <<<<<<< HEAD


// =======
// $("#begin").on("click", function(){
// 	$(".dot").addClass("move"); //don't need to add (.)knows its already a class
// });

// var ballfall = document.getElementsByClassName("dot")[0];
// console.log(ballfall.getBoundingClientRect())
// console.log("hi")
// >>>>>>> f99a807d28b8323893c08c56274b4e7523d63a7f















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