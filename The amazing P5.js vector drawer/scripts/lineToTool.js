/*
	line tool: Draws lines on the canvas with the color selected. 
	Hold the mouse at the start of the line, press, hold and drag to where you want it to end
*/

function LineToTool() {
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";
	self =this;
  this.lightMode = false;
  //drawing turns true when we press the buttons and you will have a display of the line
  let drawn = false;
  this.arrayLength = 0 ;
  this.currentVertex = [];

  //draws a line when mouse is pressed, keeps the one that is there when you release
  this.draw = function () {
    this.arrayLength =
      drawManager.figures[currentFigure].drawings[currentDrawing].parts[currentPart].vertexArray.length;
    this.currentVertex =
      drawManager.figures[currentFigure].drawings[currentDrawing].parts[
        currentPart
      ].vertexArray;

    if (!drawn) {
		
			loadPixels(); // loadPixels is in this case used to save the screeen at this point
		   
      drawn = true;
    }
    if (arrayLength > 0 && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
		if (this.lightMode)
		{
				updatePixels();
				line(	this.currentVertex[arrayLength-1][0],
						this.currentVertex[arrayLength-1][1],
						mouseX,mouseY);
		} else
		{
			this.currentVertex.push ([mouseX,mouseY])
			drawManager.reset();
			this.currentVertex.pop();
		}
		
    } else {updatePixels()}

    
  };

  this.setup = function(){
	
		mousePressed = function () {
			console.log("mousePressed in lineToTool")
		  //make mouse only work inside canvas
		  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
			self.currentVertex.push([mouseX, mouseY]);
			drawManager.reset();
			self.drawn = false;
		  }
		  // prevent default
		  return false;
		};
  
		mouseDragged = function () {
		  //empty in this drawingMode
  
		  // prevent default
		  return false;
		};
		mouseMoved = function () {
		  //draws the line
  
		  // prevent default
		  return false;
		};
		mouseReleased = function () {
		  //empty in this drawingMode
		  // prevent default
		  return false;
		};
	  
  } 

}
