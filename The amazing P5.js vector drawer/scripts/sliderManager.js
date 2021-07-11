
function SliderManager(){
    this.fillOrderBar = function(){
        // figuresLength = drawManager.figrues.length
        // for (let i = 0; i < figuresLength; i++)

        //     let figure = createDiv()

        let orderBar = select("#orderBar")

        let newPart = createDiv();
        newPart.parent(orderBar);
        newPart.id("newPartButton")

        let button = createButton("create new part");
        button.parent(newPart)
        button.mousePressed(makeNewPart);


        
        // inp.position(0, 0);
        // inp.size(100); 
        // console.log(inp.elt.value)
        // inp.input(partInputEvent);

        let partsLength = currentDrawing.parts.length;
        // console.log("partsLength", partsLength)
        for (let i = 0; i < partsLength; i++)
        {
            
            let part = createDiv();
            part.parent(orderBar);

            button = createButton("part"+(i+1)+": ");
            button.parent(part)
            button.identity = i
            button.mousePressed(choosePart);

            input_text = currentDrawing.parts[i].name
            let inp = createInput(input_text);
            inp.parent(part)
            inp.identity = i
            // inp.position(0, 0);
            // inp.size(100); 
            // console.log(inp.elt.value)
            inp.input(partInputEvent);
           
            
            
            // console.log("orderBar", orderBar);
            // console.log("part",part)
            
        }

        
        


        function partInputEvent(){
            console.log(this.elt.value)
            console.log(this.identity)
            
            currentDrawing.parts[this.identity].name = this.elt.value;
        }
        function makeNewPart(){
            // let part = createDiv("part"+(i+1)+": ");
            // part.parent(orderBar);
            
            let partsLength = currentDrawing.parts.length

            
            let part = createDiv();
            part.parent(orderBar);

            button = createButton("part"+(partsLength+1)+": ");
            button.parent(part)
            button.identity = partsLength
            button.mousePressed(choosePart);

           currentDrawing.parts.push(new Part("part"+ (partsLength+1) ));
           
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



