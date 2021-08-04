/*
	line tool: Draws lines on the canvas with the color selected. 
	Hold the mouse at the start of the line, press, hold and drag to where you want it to end
*/

function LineToTool() {
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";
	self =this;
  
  //drawing turns true when we press the buttons and you will have a display of the line
  this.drawn = false;
  this.lightMode = false;
  this.arrayLength = 0 ;
  
	this.figure = drawManager.getFigure();
  //draws a line when mouse is pressed, keeps the one that is there when you release
  this.draw = function () {
	//   console.log("draw linetotool this",this)
    this.arrayLength = this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart].vertexArray.length
    

    if (!this.drawn) {
		
		loadPixels(); // loadPixels is in this case used to save the screeen at this point
		   
      this.drawn = true;
    }
    if (this.arrayLength > 0 && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
		if (this.lightMode)
		{
				updatePixels();
				line(	this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart].vertexArray[arrayLength-1][0],
						this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart].vertexArray[arrayLength-1][1],
						mouseX,mouseY);
		} else
		{
			this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart].vertexArray.push ([mouseX,mouseY])
			
			drawManager.reset();
			this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart].vertexArray.pop();
		}
		
    } else {updatePixels()}

    
  };

  this.setup = function(){
	
		mousePressed = function () {
			// console.log("mousePressed in lineToTool")
			// console.log("self in lineToTool", self.currentVertex)
			// console.log("self in lineToTool", self.arrayLength)
		  //make mouse only work inside canvas
		  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
			self.figure.drawings[self.figure.currentDrawing].parts[self.figure.drawings[self.figure.currentDrawing].currentPart].vertexArray.push([mouseX, mouseY]);
			drawManager.reset();
			// console.log("self in mousePressed", self)
			self.drawn = false;
		  }
		  // prevent default
		//   return false;
		};
  
		mouseDragged = function () {
		  //empty in this drawingMode
			
		  // prevent default
		//   return false;
		};
		mouseMoved = function () {
		  //draws the line
  
		  // prevent default
		//   return false;
		};
		mouseReleased = function () {
		  //empty in this drawingMode
		  // prevent default
		//   return false;
		};
	  
  } 

}
