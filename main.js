 var Dot = function(){
	this.element= $("<div class='dot'></div>");
	var rand = Math.floor( Math.random() * 3 );
	var dotArray = [65,83,68];
	var loc = dotArray[rand];
	$(".dot").addClass("loc"+loc);
	this.offset = loc;
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
gameOn();

function makeFive() {
	for (var i = 0; i < 5; i++) {
		var duh = new Dot;
	};
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