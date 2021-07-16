
function SliderManager(){
 
    let colorsInUse = []; // scan all colors in use and store here
    let previousColors = []; // every color chosen but that is currently no choosen, is stored here

    let slideOuterHeight;
    let slideInnerHeight;
    let slideOuterWidth;
    let slideInnerWidth;

    let leftSidebarLenght = 0;
    let rightSidebarLenght = 0;
    let bottomLenght = 0;
    let topLenght = 0;
    let slideTemplates = new SlideTemplates();
    // console.log(slideTemplates)
    let slides = {
        leftSidebar: [],
        rightSidebar: [],
        bottomSidebar: [],
        topSideBar: [],
    }

    this.setup = function(){
       
        this.fillOrderBar();
        slideTemplates.createColorSlide("sidebarRight");
        slideTemplates.createColorSlide("sidebarRight");
        slideTemplates.createColorSlide("sidebarRight");
        slideTemplates.createColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        
        
        
        // console.log("slides",slides);

    }
    




    // this.fillColorSlide = function(pos){
    //     let newSlide = createDiv();
    //     newSlide.parent("#"+ pos);
    //     rightSidebarLenght++;  
    //     newSlide.addClass("colorSlide");
    //     newSlide.elt.setAttribute("style" , 
    //         `
    //         position: relative;
    //         width: 300px;
    //         height: 160px;
            
    //         margin:  0px;
    //         padding: 0px`);//  box-sizing: border-box;     overflow: hidden;
    //     // console.log(newSlide.elt.style);
    //     // newSlide.style("display", "flex")
    //     // newSlide.style("margin", "0px")
    //     // newSlide.style("padding", "0px")
    //     // newSlide.style("flex-direction", "row")

    //     slides.rightSidebar.push(newSlide);

    //     let mainTextElem = createP("COLORS");
    //     mainTextElem.parent(newSlide);
    //     mainTextElem.style("position", "absolute");
    //     mainTextElem.style("left", "0px")
    //     mainTextElem.style("top", "-25px")
    //     console.log("mainTextElem", mainTextElem)

    //     let fillText = createP("Fill:");
    //     fillText.style("font-size", "20px")
    //     fillText.style("position", "absolute")
    //     fillText.style("left", "0px")
    //     fillText.style("top", "5px")
    //     fillText.parent(newSlide);

    //     let inpColorFill = createColorPicker("Fill:");
        
    //     inpColorFill.style("left", "70px")
    //     inpColorFill.style("top", "25px")
    //     inpColorFill.style("position", "absolute")
    //     inpColorFill.style("height", "20px")
    //     inpColorFill.parent(newSlide);
    //     // console.log("inpColorFill", inpColorFill)
    //     let noFillText = createP("noFill:");
    //     noFillText.style("font-size", "20px")
    //     noFillText.style("position", "absolute")
    //     noFillText.style("left", "120px")
    //     noFillText.style("top", "5px")
    //     noFillText.parent(newSlide);
    //     let noFillBox = createCheckbox();
    //     noFillBox.style("position", "absolute");
    //     noFillBox.style("left", "195px")
    //     noFillBox.style("top", "22px")
    //     noFillBox.parent(newSlide);


    //     let strokeText = createP("Stroke:");
    //     strokeText.style("font-size", "20px")
    //     strokeText.style("left", "0px")
    //     strokeText.style("top", "30px")
    //     strokeText.style("position", "absolute")
    //     strokeText.parent(newSlide);

    //     let inpColorStroke = createColorPicker("Stroke:");
    //     inpColorStroke.style("position", "absolute");
    //     inpColorStroke.style("left", "70px")
    //     inpColorStroke.style("top", "50px")
    //     inpColorStroke.style("height", "20px")
    //     inpColorStroke.parent(newSlide);

    //     let noStrokeText = createP("noStroke:");
    //     noStrokeText.style("font-size", "20px");
    //     noStrokeText.style("position", "absolute")
    //     noStrokeText.style("left", "120px")
    //     noStrokeText.style("top", "30px")
    //     noStrokeText.parent(newSlide);
    //     let noStrokeBox = createCheckbox();
    //     noStrokeBox.style("position", "absolute");
    //     noStrokeBox.style("left", "195px")
    //     noStrokeBox.style("top", "45px")
    //     noStrokeBox.parent(newSlide);
            
    //     let xText = createP("X");
    //     xText.style("position", "absolute")
    //     xText.style("right", "17px")
    //     xText.style("top", "-25px")
    //     xText.parent(newSlide);
    //     // xText.style("float", "top")
        
        
    //     let sWText = createP("strokeWeight");
    //     sWText.style("position", "absolute");
    //     sWText.style("font-size", "15px");
    //     sWText.style("left", "0px")
    //     sWText.style("top", "60px")
    //     sWText.parent(newSlide);

    //     let sWslider = createSlider(1, 100, 2);
    //     sWslider.style("position", "absolute");
    //     sWslider.style("left", "80px")
    //     sWslider.style("top", "75px")
    //     sWslider.parent(newSlide);


    //     let sWInput = createInput();
    //     sWInput.style("position", "absolute");
    //     sWInput.style("right", "20px")
    //     sWInput.style("width", "60px")
    //     sWInput.style("top", "75px")
    //     sWInput.parent(newSlide);
    //     // let numberInput = 

    //     let button = createButton("endShape()");
    //     button.style("position", "absolute");
    //     button.style("right", "20px")
    //     button.style("width", "175px")
    //     button.style("top", "100px")
    //     button.parent(newSlide);
        
       
        
       

    // }

    this.fillOrderBar = function(){
        // figuresLength = drawManager.figrues.length
        // for (let i = 0; i < figuresLength; i++)

        //     let figure = createDiv()


        
        leftSidebarLenght ++;

        
        let newPart = createDiv();
        newPart.parent("#orderBar");
        
        
        slides.leftSidebar.push($('#orderBar')[0])
        
        let button = createButton("create new part");
        button.id("newPartButton");
        button.parent(newPart)
        button.mousePressed(makeNewHTMLPart);

        

        
        // inp.position(0, 0);
        // inp.size(100); 
        // console.log(inp.elt.value)
        // inp.input(partInputEvent);

        let partsLength = currentDrawing.parts.length;
        // console.log("partsLength", partsLength)
        for (let i = 0; i < partsLength; i++)
        {
            
            let part = createDiv();
            part.parent("#orderBar");
            
            //checkbox for isSelected: this is done with the standard javaScipt and jQuery
            // because the p5 code creates an unecessary div container
            let checkBox = document.createElement("INPUT");
            checkBox.setAttribute("type", "checkbox");
            
            part.elt.appendChild(checkBox);
            $(checkBox).addClass( 'selectedBox');
            checkBox.identity = i
            // console.log("checkBox", checkBox)
            // $(checkBox).change(helpers.isSelected(this));
            checkBox.addEventListener('change', helpers.isSelected);
            
            // console.log("part", part.elt)
            
            // checkBox.parent(part);
            // checkBox.addClass("selectedBox");
            // checkBox.changed(helpers.isSelected);

            //button for choosing currenfigure
            button = createButton("part"+(i+1)+": ");
            button.parent(part)
            button.identity = i
            // console.log("button", button)
            button.mousePressed(choosePart);

            // textField for naming the part
            input_text = currentDrawing.parts[i].name
            // console.log(i, input_text,currentDrawing)

            let inp = createInput(input_text);
            inp.parent(part)
            inp.identity = i
            // inp.position(0, 0);
            // inp.size(100); 
            inp.input(partInputEvent);
           
            
            
            // console.log("orderBar", orderBar);
            // console.log("part",part)
            
        }

        
        


        function partInputEvent(){
            console.log(this.elt.value)
            console.log(this.identity)
            
            currentDrawing.parts[this.identity].name = this.elt.value;
        }
        function makeNewHTMLPart(){
            // let part = createDiv("part"+(i+1)+": ");
            // part.parent(orderBar);
            
            let partsLength = currentDrawing.parts.length
            currentDrawing.parts.push(new Part("part"+ (partsLength+1) ));
            
            let part = createDiv();
            part.parent("#orderBar");

            let checkBox = document.createElement("INPUT");
            checkBox.setAttribute("type", "checkbox");
            
            part.elt.appendChild(checkBox);
            $(checkBox).addClass( 'selectedBox');
            checkBox.identity = partsLength
            // $(checkBox).change(helpers.isSelected(this));
            checkBox.addEventListener('change', helpers.isSelected);
            console.log("checkBox", checkBox)

            button = createButton("part"+(partsLength+1)+": ");
            button.parent(part)
            button.identity = partsLength
            button.mousePressed(choosePart);

           
           
            input_text = currentDrawing.parts[partsLength].name
            let inp = createInput(input_text);
            inp.parent(part)
            inp.identity = partsLength
            // inp.position(0, 0);
            // inp.size(100); 
            // console.log(inp.elt.value)
            inp.input(partInputEvent);
            currentPartIndex = partsLength;
            currentPart = currentDrawing.parts[currentPartIndex];
            
        }

        function choosePart(){
            console.log(this.identity);
            currentPartIndex = this.identity;
            currentPart = currentDrawing.parts[currentPartIndex]
            drawManager.reset();
            helpers.updateSettings();
        }


        

    }




}



