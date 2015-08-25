
// Make the game full screen-->
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

var kickStart = document.getElementById("begin").addEventListener("click", function(){
	var left = document.getElementById("left");
	var center = document.getElementById("center");
	var right = document.getElementById("right");
	left.classList.add("left");
	center.classList.add("center");
	right.classList.add("right");
});

// function checkForWinner(){
