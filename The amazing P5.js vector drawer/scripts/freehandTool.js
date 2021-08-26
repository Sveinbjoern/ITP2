function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
	


	this.drawn = false;
  	
	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are undefined to start with because
	//we haven't started drawing yet.
	this.dragDistanceBase = 4;
	this.dragDistance = this.dragDistanceBase + drawManager.getPart().strokeWeight/2;
	this.updateSettings = false;
	this.itemHeld = false;
	let self = this;

	this.itemInDistance = false;
	this.closeVertex;


	this.draw = function(){
		
	// console.log("this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart]", this.figure.drawings[this.figure.currentDrawing].parts[this.figure.drawings[this.figure.currentDrawing].currentPart])
		if (this.updateSettings)
		{
			this.dragDistance = this.dragDistanceBase + drawManager.getPart().strokeWeight/2;
			this.updateSettings = false;
			console.log("dragDistance",  this.dragDistance);
		}
		let part = drawManager.getPart();
		let arrayLength = part.vertexArray.length;
    
	//   console.log("currentVertex in draw", this.currentVertex )
	if (!this.drawn) {
		// drawManager.reDrawWithPoint();
		if (drawManager.settings.vertexPoints)
		{
		  
			drawManager.drawPoints();
		}

		loadPixels(); // loadPixels is in this case used to save the screeen at this point
		this.drawn = true;
    }
    if (arrayLength > 0 && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height && !this.itemInDistance && !this.itemHeld) {
		let vertexArray = drawManager.getVertexArray();
		if (drawManager.settings.lightMode)
		{
			
				// updatePixels();
				// if (part.currentVertex > 0)
				// line(	vertexArray[part.currentVertex][0],
				// 		vertexArray[part.currentVertex][1],
				// 		mouseX,mouseY);
		} else
		{
			// console.log("part.currentVertex", part.currentVertex)
			vertexArray.splice(part.currentVertex, 0,[mouseX,mouseY])
			
			drawManager.reDrawWithPoint();
			vertexArray.splice(part.currentVertex,1);
			// console.log(vertexArray.slice(part.currentVertex,part.currentVertex +1));
		
		}
	}
    	 else {updatePixels()}

    
  	};

	


	this.setup = function(){
		
			mousePressed = function () {
			//   console.log("mousePressed freehandtool")
				//make mouse only work inside canvas
			  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
			  {
				  let part = drawManager.getPart();
				  let vertexArray = part.vertexArray;
					if (self.itemInDistance) {
					// currentVertex.push([mouseX, mouseY]);
					vertexArray[self.closeVertex] = [mouseX,mouseY]

					self.itemHeld = true;
					self.drawn = false;

					
					// drawn = false;
					} else
					{
						// console.log("why not?",this.figure)   //[this.figure.currentDrawing].parts) //[this.figure.drawings[this.figure.currentDrawing].currentPart] );
						
						vertexArray.splice(part.currentVertex, 0, [mouseX,mouseY]);
						// This increases the part.currentVertex unless you are have choosen the first vertex
						if (part.currentVertex !== 0 || vertexArray.length === 1 )
						{part.currentVertex ++}
						helpers.updateCurrentVertex(part);
						self.drawn = false;
					}
					drawManager.reDraw();
					
			}	
			  // prevent default
			 
			};
	  
			mouseDragged = function () {
			  //empty in this drawingMode
				if (self.itemHeld)
			  {
				  let vertexArray = drawManager.getVertexArray();
				
				vertexArray[self.closeVertex] = [mouseX,mouseY]
				self.drawn = false;
			  }
			  drawManager.reDrawWithPoint();
			  // prevent default
			//   return false;
			};
			mouseMoved = function () {
			  //draws the line
			//   console.log("mouseMoved");
			if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
			{
				// console.log("mouseMoved First if");
				// console.log("this", this);
				
				// console.log("closeVertex" , self.closeVertex)
				
					self.closeVertex = [];
					let vertexArray = drawManager.getVertexArray();
					let arrayLength = vertexArray.length
					let possible = [];
					let lowX = mouseX - self.dragDistance;
					let highX = mouseX + self.dragDistance;
					let lowY = mouseY - self.dragDistance;
					let highY = mouseY + self.dragDistance;
					// console.log("mousX, dragDistance", mouseX ,self.dragDistance)
					for (let i = 0; i< arrayLength; i++)
					{
						if (lowX < vertexArray[i][0]  && lowY < vertexArray[i][1])
						{
							possible.push(i)
							// console.log("possible forloop1 i",i)
						}
						
					}	
					
					// console.log("self.currentVertex[0][0]",self.currentVertex[0][0],mouseX - self.dragDistance)
					// console.log("self.currentVertex[0][1]",self.currentVertex[0][1],mouseY - self.dragDistance)
					// console.log("mouseMoved:after first removed", possible)
					let possibleLength = possible.length
					let withinDragDistance = []; 
					
					for (let i = 0; i < possibleLength; i++)
					{	
						if (highX > vertexArray[possible[i]][0]  && highY > vertexArray[possible[i]][1])
						{
							withinDragDistance.push(possible[i])
						}
						// console.log("first for loop");
					}
					// console.log("mouseMoved:after all removed removed", withinDragDistance)
					let withinLength = withinDragDistance.length
					let closest = [self.dragDistance,0];
					let temp = 0;
					if (withinLength > 0)
					{
						
						for (let i = 0 ; i < withinLength; i++ )
						{
							
							temp = dist(mouseX,mouseY, vertexArray[ withinDragDistance[i]][0], vertexArray[ withinDragDistance[i]][1]);
							if (temp <= closest[0])
							{
								closest[0] = temp;
								closest[1] = withinDragDistance[i];
							}
							// console.log("temp", temp, "i", closest[1] )
						}
						if (closest[0] < self.dragDistance )
						{
							self.itemInDistance = true;
							document.getElementById("drawField").style.cursor = "pointer"; //  handpointer CSS
							self.closeVertex = closest[1];
							// console.log("closest Vertex in range is" ,self.closeVertex);
						} else
						{
							self.itemInDistance = false;
							document.getElementById("drawField").style.cursor = "default";
						}
						
					} else 
					{
						self.itemInDistance = false;
						document.getElementById("drawField").style.cursor = "default";
						
					}
				
			}

			 
			  // prevent default
			//   return false;
			};
			mouseReleased = function () {
			  //empty in this drawingMode
			  self.itemHeld = false; 
			  self.drawn = false;
			  // prevent default
			//   return false;
			};
		  
	}
}