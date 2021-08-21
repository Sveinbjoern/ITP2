function HelperFunctions() {
	

    self = this;
    let figure = drawManager.getFigure();
    let currentDrawing = figure.drawings[figure.currentDrawing]
    let currentPart = currentDrawing.parts[currentDrawing.currentPart]
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
    this.isSelected = function (){
        // console.log("isSelected function: identity, checked", this.identity, this.checked)
        // console.log("currentDrawing", currentDrawing)

        currentDrawing.parts[this.identity].isSelected = this.checked;
        
        
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

    this.updateSettingsCurrentS = function(part){
        

        let elem = $( ".currentSlide" )
        let length = elem.length;
        
        console.log("#" + hex(part.fill.levels[0],2) + hex(part.fill.levels[1],2) + hex(part.fill.levels[2],2));
        for (i = 0; i < length; i ++)
        {
        elem[i].children[0].innerHTML = "CURRENT PART: " + part.name;
        let hexPart;
        hexPart = "#" + hex(part.fill.levels[0],2) + hex(part.fill.levels[1],2) + hex(part.fill.levels[2],2)
        elem[i].children[2].value = hexPart;

        elem[i].children[3].children[0].checked = part.noFill;   
        
        hexPart = "#" + hex(part.stroke.levels[0],2) + hex(part.stroke.levels[1],2) + hex(part.stroke.levels[2],2)
        elem[i].children[5].value = hexPart;

        elem[i].children[6].children[0].checked =  part.noStroke;
        
        elem[i].children[9].value = part.strokeWeight;
        elem[i].children[10].value = part.strokeWeight;    

        if (part.endShape)
        {
            elem[i].children[11].innerText = "endShape(CLOSE)";    
        } else {elem[i].children[11].innerText = "endShape()";}

        elem[i].children[12].value = part.vertexMode;

        }
        // if (elem[i].children[13].innerHTML)

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
        
        figure = null;
        currentDrawing = null;
        currentPart = null;
       

        
        
        figure = new Figure("start");
        
        currentFigure = drawManager.figures[currentFigureIndex];
        currentDrawing = currentFigure.drawings[currentDrawingIndex];
        currentPart = currentDrawing.parts[currentPartIndex];	
        drawManager.reset();


		
		
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
                    
                    let figure = drawManager.getFigure()
                    // let currentDrawing = figure.drawings[figure.currentDrawing];
                    figure.drawings[figure.currentDrawing].parts[figure.drawings[figure.currentDrawing].currentPart].vertexArray.pop();
                    
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


