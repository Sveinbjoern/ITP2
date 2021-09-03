function HelperFunctions() {
	

    self = this;
    let figure = drawManager.getFigure();
    // console.log("figure", figure);
    let currentDrawing = figure.drawings[figure.currentDrawing]
    let currentPart = currentDrawing.parts[currentDrawing.currentPart]
    // Buttons and checkboxes and field functions
    
    
    this.updateCurSliderNameInput = function(value){
        elem = document.getElementsByClassName("currentSlide");
    //   console.log("currentSlider elem", elem);
      elem.forEach((currentSlide) => {
        // console.log("current element", element.children[0].innerHTML);
        currentSlide.children[0].innerHTML = "CURRENT: " + value;
      });
    }

   
    
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
    

    this.updateSettingsCurSlide = function(part){
        
        if (part === undefined)
        {
            part = drawManager.getPart();
        }
        // console.log("part.vertexMode in updateCurslide", part.vertexMode)

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
        
        elem[i].children[11].value = part.strokeWeight;
        elem[i].children[12].value = part.strokeWeight; 
        // console.log(elem[i].children[11])

        if (part.endShape)
        {
            elem[i].children[13].innerText = "endShape(CLOSE)";    
        } else {elem[i].children[13].innerText = "endShape()";}
        
        // console.log(elem[i].children[14]);
        elem[i].children[14].value = part.vertexMode;
        
        elem[i].children[16].innerHTML = part.currentVertex + "/"+ part.vertexArray.length;

        }
        // if (elem[i].children[13].innerHTML)

    }

    this.updateNumberOfPartsText = (figureIndex,drawingIndex) =>{
        let partsLength = drawManager.getFigure(figureIndex).drawings[drawingIndex].parts.length


        let HTMLIndexDrawing =
      sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      


        let elem = document.getElementsByClassName("order");
    // console.log("order elem", elem);
        elem.forEach((orderSlide) => {
      // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked);
      // console.log(this.elt.value);
      // console.log(orderSlide.children[HTMLIndexDrawing].children[9].children[0].checked);
    //   console.log(orderSlide.children[HTMLIndexDrawing].children[7])
      orderSlide.children[HTMLIndexDrawing].children[7].innerHTML = partsLength;

    });
    }

    this.updateNumberOfDrawingsText = (figureIndex) =>{
        let drawingsLength = drawManager.getFigure(figureIndex).drawings.length;

        let elem = document.getElementsByClassName("order");
    // console.log("order elem", elem);
        elem.forEach((orderSlide) => {
     
      orderSlide.children[9].innerHTML = drawingsLength;
    //   console.log(orderSlide.children[9])

    });
    }


    this.updateDrawingDraw = (figureIndex, drawingIndex, truthValue) => {
      
    let HTMLIndexDrawing =
    sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
   


    let drawing = drawManager.getFigure(figureIndex).drawings[drawingIndex];
    drawing.draw =  truthValue;
     
    let elem = document.getElementsByClassName("order");
    // console.log("order elem", elem);
    elem.forEach((orderSlide) => {
      // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked);
      // console.log(this.elt.value);
      // console.log(orderSlide.children[HTMLIndexDrawing].children[9].children[0].checked);
      orderSlide.children[HTMLIndexDrawing].children[9].children[0].checked = truthValue;

    });

    }

    this.updateCurrentVertex = function(part){
        

        let elem = $( ".currentSlide" )
        let length = elem.length;
        
        let indicies = drawManager.getCurrentIndicies()

        let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + indicies[1];
        let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * indicies[2];
       
        for (i = 0; i < length; i ++)
        {
            // console.log(elem[i].children[16])
            elem[i].children[16].innerHTML = part.currentVertex + "/"+ part.vertexArray.length;
        }
        
        elem = $( ".order" )
        length = elem.length
        for(i = 0; i < length;i++){
            // console.log(elem[i].children[HTMLIndexDrawing].children[HTMLIndexPart].children[8]);
            elem[i].children[HTMLIndexDrawing].children[HTMLIndexPart].children[8].innerHTML =  part.vertexArray.length;
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

    this.insertHTMLElement = ( parentHTML, index, HTMLIndex, diff ,length) => {
        // console.log("sortHTMLElements", parentHTML.children[7], partIndex, HTMLIndex,  diff)
        let chosenElemnent;
        if (diff === 1)
        {
            chosenElemnent = HTMLIndex
        } else {
            chosenElemnent = HTMLIndex+1-diff
        }
        
       
            // length -= 1; 
            // HTMLIndex + (length-1)*diff
            // let x = 0;
            // console.log("HTMLIndex",HTMLIndex,"length",length, "index",index);
            for (let i = index+1; i < length; i++)
            {
                // console.log(x++)
                // console.log("move done")
                parentHTML.children[HTMLIndex].identity++;
                for (let j = 0; j < diff; j++)
                {
                    let element = parentHTML.removeChild(parentHTML.children[chosenElemnent]);
                    parentHTML.append(element);
                }
                // console.log(parentHTML.children[HTMLIndex]);
            }
        
        // console.log(parentHTML.identity)
    }


    this.moveHTMLUp = (parentHTML, index, HTMLIndex, diff, length)=>{
        
        // console.log("HTMLIndex-diff",HTMLIndex,HTMLIndex-diff)
        parentHTML.children[HTMLIndex].identity--;
        parentHTML.children[HTMLIndex-diff].identity++;

        for (let j = 0; j < diff; j++)
                    {
                        //move two elements up one element down
                        let element = parentHTML.removeChild(parentHTML.children[HTMLIndex+1-diff*2]);
                        parentHTML.append(element);
                    }

        let chosenElement = HTMLIndex-diff +1;
        // if (diff == 1)
        // {
        //     chosenElemnent = HTMLIndex+1
        // } else{
        //     chosenElemnent = HTMLIndex+diff+ 1-diff
        // }
                    // let x = 0;
        for (let i = index+1; i < length; i++)
        {
            // console.log(x++)
            // console.log("move done")
            // parentHTML.children[HTMLIndex].identity++;
            for (let j = 0; j < diff; j++)
            {
                let element = parentHTML.removeChild(parentHTML.children[chosenElement]);
                parentHTML.append(element);
            }
            // console.log(parentHTML.children[HTMLIndex]);
        }


    }
    this.moveHTMLDown = (parentHTML, index, HTMLIndex, diff, length)=>{
        parentHTML.children[HTMLIndex].identity++;
        parentHTML.children[HTMLIndex+diff].identity--;
        // console.log("first item to move", )

        
        for (let j = 0; j < diff; j++)
                    {
                        //move two elements up one element down
                        let element = parentHTML.removeChild(parentHTML.children[HTMLIndex-diff+1]);
                        parentHTML.append(element);
                    }

        let chosenElement = HTMLIndex +1;
        // console.log("chosen element", chosenElement)

        // if (diff == 1)
        // {
        //     chosenElemnent = HTMLIndex+1
        // } else{
        //     chosenElemnent = HTMLIndex+diff+ 1-diff
        // }
                    // let x = 0;
        for (let i = index+2; i < length; i++)
        {
            // console.log(x++)
            // console.log("move done")
            // parentHTML.children[HTMLIndex].identity++;
            for (let j = 0; j < diff; j++)
            {
                let element = parentHTML.removeChild(parentHTML.children[chosenElement]);
                parentHTML.append(element);
            }
            // console.log(parentHTML.children[HTMLIndex]);
        }
    }

    this.deleteHTMLElement = (parentHTML, index, HTMLIndex, diff, length) =>{
        
        for (let j = 0; j < diff; j++)
                    {
                        
                        parentHTML.children[HTMLIndex-diff+1].remove();
                        
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
		
        
        
        
        
        // delete drawManager.figures[
            window.localStorage.clear();
            location.reload();


		
		
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
        // let vertexArray =  part.vertexArray;

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
            // drawManager.saveFiguresToStorage();
            let indicies = drawManager.getCurrentIndicies()
            console.log(indicies)            // let elem = document.getElementsByClassName("order")
            
            // console.log("identities of first part")
            
            // let elem = document.getElementsByClassName("order");
            // let length = elem[0].children[12].children.length;
            // for (let i = 11; i < length; i += 2)
            // {
            //     console.log(elem[0].children[12].children[i].identity);
            // }
            let elem = document.getElementsByClassName("order");
            let length = elem[0].children.length;
            for (let i = 12; i < length; i ++)
            {
                console.log("drawing identities",elem[0].children[i].identity);
                lengthH = elem[0].children[i].children.length
                for (let j = 11; j < lengthH; j +=2)
                {
                    console.log("part identities",elem[0].children[i].children[j].identity);
                    // console.log(elem[0].children[i].identity);
                }
            }
            
            
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

    
    