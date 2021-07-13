function HelperFunctions() {
	

    self = this;
    
    // Buttons and checkboxes and field functions
    this.noStrokeButton = function(checked)
    {
        // console.log(checked);
        currentPart.noStroke = checked;
        drawManager.reset();
        
    }
    this.selectBox = function(value)
    {
        console.log("selectBox: value",value);
        if (value)
        {
            //display all the checkboxes
            console.log("selectbutton ON")
           
        } else{
            //remove checkboxes
            console.log("selectbutton OFF")
        }
        
        
    }
    this.isSelected = function (value){
        console.log("isSelected function: value", value)
        currentDrawing.parts[value.identity] = value.checked;
        
    }
    this.noFillButton = function(checked)
    {
        // console.log(checked);
        currentPart.noFill = checked;
        drawManager.reset();
        
    }
    this.endShapeButton = function(item)
    {
        // console.log(item);
        if (item.value === "EndShape(CLOSE)")
        {
            item.value ="EndShape()"
            currentPart.endShape = true;
        } else
        {
            item.value = "EndShape(CLOSE)"
            currentPart.endShape = false;
        }
        drawManager.reset();
        
    }

    this.strokeWeightSlider = function(value)
    {
        currentPart.strokeWeight = value; 
        drawManager.reset();
        // console.log("value", value);
        // console.log("strokeWeight", currentPart.strokeWeight);
        toolbox.selectedTool.drawn = false;
    }

    this.updateSettings = function(){
        let element = document.getElementById("strokeWeightInput");
        element.value = currentPart.strokeWeight;
        element = document.getElementById("noFillInput");
        element.checked = currentPart.noFill;
        element = document.getElementById("noStrokeInput");
        element.checked = currentPart.noStroke;
         
        element = document.getElementById("endShapeInput");
        console.log(element)
        if (currentPart.endShape === true)
        {
            element.value ="EndShape()"
        } else 
        {
            element.value = "EndShape(CLOSE)"
        }
    }
    
    
    let screenshotIteration = 0;
    
	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		
        
        
        
        currentDrawingIndex = 0;
        currentPartIndex = 0; 
        // delete drawManager.figures[0];
        
        currentFigure = null;
        currentDrawing = null;
        currentPart = null;
        drawManager.figures[currentFigureIndex] = null;

        
        
        drawManager.figures[currentFigureIndex] = new Figure("start");
        
        currentFigure = drawManager.figures[currentFigureIndex];
        currentDrawing = currentFigure.drawings[currentDrawingIndex];
        currentPart = currentDrawing.parts[currentPartIndex];	
        drawManager.reset();


		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		makeScreenshot();
		// console.log("screenshot?")
	});

	//////////////////////////////////////////////////////////////////
    // Screenshot Functions
    ////////////////////////////////////////////////////////////////////
    //ADAPTED FROM:
    //screenshot demo
    //by ChrisOrban
    //https://editor.p5js.org/ChrisOrban/sketches/ryXx1hjWZ 

    function formatNumberLength(num, length) 
    {
        let r = "" + num;
        while (r.length < length) 
        {
            r = "0" + r;
        }
        return r;
    };

    function makeScreenshot ()
    {
        let formatted_number = formatNumberLength(screenshotIteration,4);
        saveCanvas("screenshot"+formatted_number,"png");

        screenshotIteration ++;
    };

    

}

const keyCodes = {

    backSpace: 8,
    R: 82,
}


function keyPressed()
    {
        if (mouseX >= 0 && mouseX <= width &&
            mouseY >= 0 && mouseY <= height)
            {
                if (keyCode === keyCodes.backSpace)
                {
                    
                    currentPart.vertexArray.pop();
                    toolbox.selectedTool.drawn = false;
                    drawManager.reset();

                }
            }


        if(keyCode === keyCodes.R)
        {
            // removeElements();

            // currentPartIndex = keepIndexConsistent(currentPartIndex,  ,"remove");
            console.log("keypressed R");
        }
    }

    //Takes an array, 
    function removePart(index, partOf, action)
    {
        
            
            return --index;
    }

    // function 
    //     else if (action === "move")
    //     {

    //     }
    //     else if (action === "add")
    //     {

    //     }
    //     else
    //     {
    //         console.log("not a valid action for function 'keepIndexConsistent'")
    //     }

    // }


