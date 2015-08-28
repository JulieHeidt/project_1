var scores = {
	playerOne: 0,
	playerTwo: 0,
};

//my function constructor for my dots (falling balls)
var Dot = function(){
	this.element = $( "<div class='dot'></div>" );
	var self = this.element;
};

Dot.prototype.addToGame = function(){
	$('.floor').append(this.element);
}

//created gloal variables for 3 columns of balls
var dotsLeft = new Dot();
var dotsRight = new Dot();
var dotsCenter = new Dot();


var move = function (el){
    el.addClass( 'move' );
}

var makeRight = function(el) {
	el.addClass("loc68");
}
var makeCenter = function(el){
	el.addClass("loc83");
}
var makeLeft = function(el) {
	el.addClass("loc65");
}

//random logic from rock paper scisors
function makeRandom(element) {
	var choice = Math.random() * 3;
	if ( choice <= .33 ) {
		return makeRight(element);
	} else if ( choice <= .66 ) {
		return makeCenter(element);
	} else {
		return makeLeft(element);
	}
}

//Starts the game calls for new, random balls to fall with timeout
$("#begin").click(function(){
	setInterval(function(){
		var ball = new Dot();
		ball.addToGame();
		setTimeout( function () {
			makeRandom(ball.element);
			move(ball.element);
		}, 100 );
	},1000)

});

//keydown function to watch for balls falling between 500-600 using offset
function keyDown(e){
	var blocks = $(".dot.loc" + e.which);
	for (var i = 0; i < blocks.length; i++) {
		var block = $(blocks[i]);
		if(block.offset().top>=500  && block.offset().top<=600){
			scores[currPlayer]++;
		}
	};
}

//Create dance floor tiles
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

$("body").on("keydown", keyDown);


