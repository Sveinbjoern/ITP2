function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
	this.arrayLength = 0;
	this.currentVertex = [];
	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are undefined to start with because
	//we haven't started drawing yet.
	this.dragDistance = 5;
	self = this

	this.closeVertex = [];
	this.draw = function(){
		
// console.log("this in frehandtool", this)
		this.arrayLength =
      drawManager.figures[currentFigure].drawings[currentDrawing].parts[currentPart].vertexArray.length;
    this.currentVertex =
      drawManager.figures[currentFigure].drawings[currentDrawing].parts[
        currentPart
      ].vertexArray;
	//   console.log("currentVertex in draw", this.currentVertex )
	

	};


	this.setup = function(){
		
			mousePressed = function () {
			//   console.log("mousePressed freehandtool")
				//make mouse only work inside canvas
			  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
				// currentVertex.push([mouseX, mouseY]);
				
				// drawManager.reset();
				// drawn = false;
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
			//   console.log("mouseMoved");
			if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
			{
				// console.log("mouseMoved First if");
				// console.log("this", this);
				
				// console.log("closeVertex" , self.closeVertex)
				self.closeVertex = [];
				let possible = [];
				let lowX = mouseX - self.dragDistance;
				let highX = mouseX + self.dragDistance;
				let lowY = mouseY - self.dragDistance;
				let highY = mouseY + self.dragDistance;
				// console.log("arrayLength", self.arrayLength)
				for (let i = 0; i< self.arrayLength; i++)
				{
					if (lowX < self.currentVertex[i][0]  && lowY < self.currentVertex[i][1])
					{
						possible.push(i)
						console.log("possible forloop1 i",i)
					}
					
				}	

				console.log("self.currentVertex",self.currentVertex)
				// console.log("mouseMoved:after first removed")
				let possibleLength = possible.length
				for (let j = 0; j < possibleLength; j++)
				{	
					if (highX > currentVertex[possible[j]][0]  && highY > currentVertex[possible[j]][1])
					{
						self.closeVertex.push(self.currentVertex[possible[j]])
					}
					console.log("first for loop");
				}
				// console.log("mouseMoved:after all removed removed")
				let closeVertexLength = self.closeVertex.length
				let closest = [0,0];
				let temp = 0
				if (closeVertexLength > 0)
				{
					//  handpointer CSS
					for (let i = 0 ; i < closeVertexLength; i++ )
					{
						temp = dist(mouseX,mouseY, self.closeVertex[i][0], self.closeVertex[i][1]);
						if (temp >= closest[0])
						{
							closest[0] = temp;
							closest[1] = i;
						}
						console.log("temp", temp)
					}
					self.closeVertex = self.closeVertex.slice(closest[1],closest[1])
					console.log("closest Vertex in range is" ,self.closeVertex);
				} else 
				{
					//  arrowpointer
				}
			}

			 
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