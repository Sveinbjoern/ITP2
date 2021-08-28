function HelperFunctions() {
	

    self = this;
    let figure = drawManager.getFigure();
    console.log("figure", figure);
    let currentDrawing = figure.drawings[figure.currentDrawing]
    let currentPart = currentDrawing.parts[currentDrawing.currentPart]
    // Buttons and checkboxes and field functions
    
    
    
    
    this.noStrokeButton = function(checked)
    {
        // console.log(checked);
        currentPart.noStroke = checked;
        drawManager.reDrawWithPoint();
        
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
        drawManager.reDrawWithPoint();
        
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
        drawManager.reDrawWithPoint();
        
    }

    this.strokeWeightSlider = function(value)
    {
        currentPart.strokeWeight = value; 
        drawManager.reDrawWithPoint();
        // console.log("value", value);
        // console.log("strokeWeight", currentPart.strokeWeight);
        toolbox.selectedTool.drawn = false;
    }
    

    this.updateSettingsCurrentS = function(part){
        

        let elem = $( ".currentSlide" )
        let length = elem.length;
        
        // console.log("#" + hex(part.fill.levels[0],2) + hex(part.fill.levels[1],2) + hex(part.fill.levels[2],2));
        for (i = 0; i < length; i ++)
        {
        elem[i].children[0].innerHTML = "CURRENT: " + part.name;
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

        elem[i].children[14].innerHTML = part.currentVertex + "/"+ part.vertexArray.length;

        }
        // if (elem[i].children[13].innerHTML)

    }

    this.updateCurrentVertex = function(part){
        

        let elem = $( ".currentSlide" )
        let length = elem.length;
        
        for (i = 0; i < length; i ++)
        {
            elem[i].children[14].innerHTML = part.currentVertex + "/"+ part.vertexArray.length;
        }
        
        // if (elem[i].children[13].innerHTML)

    }
    

    this.setVertexArrayToStart = (p) => {
        let part = p || drawManager.getPart(); 
        part.currentVertex = 0;
        helpers.updateCurrentVertex(part);
        // drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
    }

    this.setVertexArrayToEnd = (p) => {
        let part = p || drawManager.getPart(); 
        part.currentVertex = part.vertexArray.length;
        helpers.updateCurrentVertex(part);
        // drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
    }


    this.decreaseVertexArray = (p) => {
        let part = p || drawManager.getPart();  
        part.currentVertex --;
            if (part.currentVertex < 0)
            {
                part.currentVertex = part.vertexArray.length;

            }
        helpers.updateCurrentVertex(part);
        // drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
    }

    this.increaseVertexArray = (p) => {
        let part = p || drawManager.getPart();
        part.currentVertex ++;
            if (part.currentVertex > part.vertexArray.length)
            {
                part.currentVertex = 0;
            }
            helpers.updateCurrentVertex(part); 
            // drawManager.reDrawWithPoint();
            toolbox.selectedTool.drawn = false;
    }

    this.deleteVertex = (p) => {
        let part = p || drawManager.getPart();
        let vertexArray = part.vertexArray;
        // console.log(vertexArray.length, part.currentVertex);
                    // let currentDrawing = figure.drawings[figure.currentDrawing];
        if (vertexArray.length <= part.currentVertex)
        {
            vertexArray.splice(part.currentVertex-1,1);
        } else {
            vertexArray.splice(part.currentVertex,1);
        }
        // console.log(vertexArray.splice(part.currentVertex -1,1));
        part.currentVertex--;
        if (part.currentVertex < 0)
        {
            part.currentVertex = 0;
        }
        helpers.updateCurrentVertex(part);
        toolbox.selectedTool.drawn = false;
        drawManager.reDrawWithPoint();
        if (drawManager.settings.autoSave)
			{drawManager.saveFiguresToStorage()};
    }

    


    this.loadSettingsFromStorage = (settings) =>
    {
        let set = window.localStorage.getItem("settings")
        // console.log("settings from loadSettingsFromStorage", settings)
      if (set)
        {
          set = JSON.parse(set);
          updateAllSetings(set);
  
        } 
    }

    



    this.saveSettingsFromStorage = (storage) =>
    {
        console.log("storage to be saved in helpers.saveSettingsFromStorage()", storage)
        window.localStorage.getItem("stored", JSON.stringify(storage))
    }
    
    let updateAllSetings = (settings) => {
        console.log("settings in updateAllSetings", settings)
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
        drawManager.reDrawWithPoint();


		
		
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

    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    
    
    R: 82,
}


function keyPressed()
    {
        // console.log("keyPressed")
        let figure = drawManager.getFigure()
        let drawing = figure.drawings[figure.currentDrawing]
        let part = drawing.parts[drawing.currentPart]
        let vertexArray =  part.vertexArray;

        if (mouseX >= 0 && mouseX <= width &&
            mouseY >= 0 && mouseY <= height)
            {
                if (keyCode === keyCodes.backSpace)
                {
                    
                    helpers.deleteVertex(part);

                }
            }


        if(keyCode === keyCodes.R)
        {
            drawManager.saveFiguresToStorage();


            // removeElements();

            // currentPartIndex = keepIndexConsistent(currentPartIndex,  ,"remove");
            // console.log("keypressed R");



            // let elem = document.getElementById("sidebarRight");
            // elem.append(elem.children[0]);
            // // elem.prepend(elem.children[0]);
            // // elem.prepend(elem.children[0]);

            // console.log(elem.children);

        } else

        if (keyCode === keyCodes.leftArrow)
        {
            // console.log("rightArrow")
            helpers.decreaseVertexArray(part);
        } else if (keyCode === keyCodes.rightArrow)
        {
            // console.log("rightArrow")
            helpers.increaseVertexArray(part);
        } else if (keyCode === keyCodes.upArrow)
        {
            helpers.setVertexArrayToStart(part);
        } else if (keyCode === keyCodes.downArrow)
        {
            helpers.setVertexArrayToEnd(part);
        }

        // return false;


    }
    //invert the color. This is done to create high contrast, 
    // also changed to make the contrast visible also with all grey colors
    function invertColor(c)
    {
        
        
        let grey = (c.levels[0] + c.levels[1] + c.levels[2])/3 
        // console.log(grey)
        if (grey > 180 || grey < 90)
        {
            return color( 255 - c.levels[0],
                    255 - c.levels[1],
                    255 - c.levels[2],
                    255);

        } else {
            return color( grey + c.levels[0],
                grey + c.levels[1],
                grey + c.levels[2],
                255);

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


