
function SliderManager(){
    this.fillOrderBar = function(){
        // figuresLength = drawManager.figrues.length
        // for (let i = 0; i < figuresLength; i++)

        //     let figure = createDiv()

       

        
        let newPart = createDiv();
        newPart.parent("#orderBar");
        newPart.id("newPartButton")
      

        let button = createButton("create new part");
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
            part.elt.addEventListener('change', helpers.isSelected(checkBox));
            
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
            part.elt.addEventListener('change', helpers.isSelected(checkBox));
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



