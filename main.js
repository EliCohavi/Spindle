/* LICENSE:
license type: CC-BY-SA-4.0
requirements: Author must be credited. Commercial use is allowed.
title: Spindle
source: https://openprocessing.org/sketch/2176965
If you use this code in your project be sure to copy paste this credit wherever you share it:
This work is based on "Spindle" (https://openprocessing.org/sketch/2176965) by EliasC licensed under CC-BY-4.0 
*/

var colorHue = 200;
var colorSaturation = 100;
var colorBrightness = 100;
var squareSize = 0;
var colorMultiplier = 1;
var rotationAngle = 0;
var scaleAmount = 5;
var fromCenter;
let slowMode = false;
let clearCanvas;


function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	background(236, 100, 14);
	rectMode(CENTER);
	noFill();
	stroke(200, 100, 100);
	noCursor();
	frameRate(25);
}

function draw() {
	if (clearCanvas) {
		rectMode(CORNER);
		fill(236, 100, 14);
		rect(0, 0, windowWidth, windowHeight);
	}
	fromCenter = dist(width/2, height/2, mouseX, mouseY);
	rectMode(CENTER);
	noFill();
	push();
	
	
	
	if (mouseX < width/2 && mouseY < height/2) { //Randomness in upper left quadrant
		translate(random(0, width/2), random(0, height/2));
	}
	else if (mouseX < width/2 && mouseY > height/2) { //Randomness in lower left quadrant
		translate(random(0, width/2), random(height/2, height));
	}
	else if (mouseX > width/2 && mouseY < height/2) { //Randomness in upper right quadrant
		translate(random(width/2, width), random(0, height/2));
	}
	else if (mouseX > width/2 && mouseY > height/2) { //Randomness in lower right quadrant
		translate(random(width/2, width), random(height/2, height));
	}
	
	rotate(rotationAngle);
	stroke(colorHue, colorSaturation, colorBrightness);
	square(0, 0, squareSize);
	squareSize = fromCenter;
	rotationAngle+=0.1;
	
	colorHue = map(fromCenter, 0, windowHeight, 0, 360);

	if (slowMode==true) {
		frameRate(5);
	} 
	if (slowMode==false) {
		frameRate(25);
	}
	
	pop();
}

function keyReleased() {
	if (keyCode==SHIFT) { //Speed Change
		if (slowMode==true) {
			slowMode=false;
			//print("Slowmode is disabled.");
		} else {
			slowMode=true;	
			//print("Slowmode is enabled.");
		}
	}
	
	if (key=='c') {
		clearCanvas = false;
	}
}

function keyPressed() { 
	if (key=='c') { //clear canvas
		clearCanvas = true;
	 }
	
	if (key=='1') { //Press 1 for Saturation change
		colorSaturation-=50;
		if (colorSaturation < 0) {
			colorSaturation = 100;
		}
	}
	
	if (key=='2') { //Press 2 for Brightness change
		colorBrightness-=50;
		if (colorBrightness < 0) {
			colorBrightness = 100;
		}
		
	}
	
}

function mouseClicked() {
	if (mouseButton==LEFT) { //Mouse click save
		saveCanvas();
	}

}
	
