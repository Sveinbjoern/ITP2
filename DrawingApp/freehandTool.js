function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are undefined to start with because
	//we haven't started drawing yet.
	var previousMouseX;
	var previousMouseY;
	let drawing =false;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if we have started drawing, if not set previous to the current
			//mouse X and Y.
			if (!drawing){
				drawing = true ;
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from previous 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the drawing bool to false
		else{
			drawing = false;
		}
	};
}