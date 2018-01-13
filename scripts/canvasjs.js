window.onload = function() {
	init();
}

var mousePos;
var lastx;
var lasty;

function init(){
	console.log('ready');
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	
	
	canvas.addEventListener("click",function(e) {
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		mousePos = false;
		console.log('x = ',x,' y = ',y,'mouseup');
	});
	
	canvas.addEventListener("mousedown",function(e) {
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		mousePos = true;
		lastx=x;
		lasty=y;
		console.log('x = ',x,' y = ',y,'mousedown');
	});

	canvas.addEventListener("mousemove",function(e) {
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		if (mousePos == true) {draw(x,y,true);}
		lastx=x;
		lasty=y;
		console.log('x = ',x,' y = ',y,'mousemove');
	});
	//if the user leaves the page they will have to click again to restart the line drawing
	canvas.addEventListener("mouseleave",function(e) {
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		mousePressed = false;
	});
	
	texture.addEventListener("change",function(e) {
		if ((document.getElementById("texture").checked) == false) {console.log('unchecked');}
		else console.log('checked');
	});
	
	//
	
	function draw (x,y,isdown) {
		console.log('its working!',x,y,lastx,lasty);
		ctx.beginPath();
		console.log('path began');
		ctx.strokeStyle = document.getElementById('line_color').value;
		ctx.lineWidth = (document.getElementById('line_size').value);
		ctx.moveTo(lastx,lasty);
		ctx.lineTo(x,y);
		ctx.closePath();
		ctx.stroke();
	}
}