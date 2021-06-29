/*
	line tool: Draws lines on the canvas with the color selected. 
	Hold the mouse at the start of the line, press, hold and drag to where you want it to end
*/

function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//startMouse varibles for the starting point of the line. 
	var startMouseX;
	var startMouseY;
	
	//drawing turns true when we press the buttons and you will have a display of the line
	var drawing = false;
	
	//draws a line when mouse is pressed, keeps the one that is there when you release
	this.draw = function(){
		//check if mouse is pressed
		if(mouseIsPressed){
			// If you haven't started drawing the start drawing and set startMouse to the current mouse values
			if(!drawing){
				loadPixels(); // loadPixels is in this case used to save the screeen at this point
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				
			}

			else{
				updatePixels(); // updatePixels recovers the screen from the load, removing lines you do not want to draw
				line(startMouseX, startMouseY, mouseX, mouseY); //draws the line 
			}

		}
		// if the mouse is not pressed nothing new is drawn but if a line was made in the last frame it is kept
		else if(drawing){
			drawing = false; //reseting the program to be able to draw again with a new startMouse
		
		}
	};


}
