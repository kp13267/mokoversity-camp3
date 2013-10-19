var gameModule = (function(){
	function start(){
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

}

return{
	start: start
}

}) ();

gameModule.start();