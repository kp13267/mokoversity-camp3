var gameModule = (function(){

	var timeoutVar,
		counter = 0;

function touchEvent(evt){
	var x= evt.clientX,
	    y= evt.clientY;

	console.log("Clicked: " + x + " , " + y);
}

	function start(){
	document.getElementById("main").addEventListener("click",touchEvent,false);
	startGame();
	}

	function startGame(){
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
	var ballx = Math.floor(Math.random() * 300);// 0 - 300
	var bally = Math.floor(Math.random() * 500);// 0 - 500
	var ballz = Math.floor(Math.random() * 100);// 0 - 100

canvas.width = 480;
canvas.height = 320;

ctx.fillstyle = 'black';
ctx.beginPath();
ctx.arc(ballx, bally, ballz, 0, Math.PI * 2 , true);
ctx.fill();

if (counter >= 10){

} else {

	timeoutVar = setTimeout(start, 1000);
	counter = counter + 1;

	console.log("Counter: " + counter);
}

}

function gameOver(){
	console.log("Coucter: " + counter);
}

return{
	start: start
}

}) ();

gameModule.start();