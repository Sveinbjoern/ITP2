
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
    let temporary;
    let self = this;

   

    let slides = {
        leftSidebar: [],
        rightSidebar: [],
        bottomSidebar: [],
        topSideBar: [],
    }

    this.setup = function(){
       
        this.fillOrderBar();
        slideTemplates.createCurrentSlide("sidebarRight");
        slideTemplates.createDefaultSlide("sidebarRight");
        // slideTemplates.createDefaultSlide("sidebarRight");
        // slideTemplates.createDefaultSlide("sidebarRight");
        // slideTemplates.createColorSlide("sidebarRight");
        // slideTemplates.createColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        
        
        
        // console.log("slides",slides);

    }
    

    


 

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
        let figure = drawManager.getFigure();
        let currentDrawing = figure.drawings[figure.currentDrawing];
        
        
        // console.log(figure);
        // console.log("figure.drawings", figure.drawings)
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
            currentDrawing.currentPart = partsLength;

            
            
        }
        function removeHTMLPart(part, index){
            // TODO
            
        }

        function choosePart(){
            // console.log(this.identity);
            // console.log(self);
            
            // console.log(self.currentDrawing);
            currentDrawing.currentPart = this.identity;
            drawManager.reset();
            console.log(currentDrawing)
            helpers.updateSettingsCurrentS(currentDrawing.parts[currentDrawing.currentPart]);
            
        }


        

    }



    this.updateDefaultSlides = () => {
        let elem = document.getElementsByClassName("defaultSlide");
        console.log(elem);

        

    
    }
    this.updateSlides = () => {
        this.updateDefaultSlides();
    }




}



