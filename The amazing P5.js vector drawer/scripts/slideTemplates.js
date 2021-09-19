// Every configuration and option will be in a slide
//by default the slides are in the sidebarLeft or slidebarRight

function SlideTemplates() {
  this.createDrawModeSlide = function (pos) {
    let newSlide = createDiv();
    // console.log(newSlide);

    // console.log(newSlide);
    newSlide.addClass("drawMode");
    newSlide.parent(pos);
    newSlide.elt.setAttribute(
      "style",
      `         
            display: inline-block;
            position: relative;
            min-width: 300px;
            max-width:300px;
            height: content;
            overflow-y: hidden;
            margin:  0px;
            padding: 0px;
            text-align: left;
            
            `
    ); // display: flex;// // ;flex-wrap: wrap;justify-content: flex-start;// background-color: rgb(50, 50, 200);

    let mainTextElem = createP("Draw Mode: ");
    mainTextElem.parent(newSlide);
    // mainTextElem.style("position", "absolute");
    // mainTextElem.style("left", "0px")
    // mainTextElem.style("top", "-12px")
    mainTextElem.style("margin", "0px");
    mainTextElem.style("width", "61px");
    mainTextElem.style("text-align", "left");
    mainTextElem.style("display", "inline");
    mainTextElem.elt.title = sliderManager.titleText.drawMode;

   

    if (toolbox.selectedTool.name == "PointDrawing") {
      let modeTextElem = createP(toolbox.selectedTool.name);
      modeTextElem.parent(newSlide);
      // modeTextElem.style("position", "absolute");
      // modeTextElem.style("left", "0px")
      // modeTextElem.style("top", "-12px")
      modeTextElem.style("margin", "0px");
      modeTextElem.style("max-width", "200px");
      modeTextElem.style("text-align", "left");
      modeTextElem.style("display", "inline");
      modeTextElem.elt.title = sliderManager.titleText.drawMode;

 
      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      button.style("float", "right");
      button.style("margin-right", "30px");
      // button.style("width", "auto");
      button.style("display", "inline");
      // button.style("text-align", "right")
      button.parent(newSlide);
      // button.style("visibility", "hidden");
      button.mousePressed(moveSlideUp);
      button.elt.title = sliderManager.titleText.generalUp;

      button = createButton("&#x2193;");
      // button.style("text-align", "right")
      // button.style("position", "absolute");
      // button.style("margin-right", "31px")
      button.style("float", "right");
      // button.style("width", "auto");
      button.style("display", "inline");
      // button.style("visibility", "hidden");
      // button.style("top", "123px")
      button.mousePressed(moveSlideDown);
      button.elt.title = sliderManager.titleText.generalDown;
      button.parent(newSlide);

      let xText = createP("X");
      // button.style("text-align", "right")
      xText.style("position", "absolute");
      xText.style("right", "17px");
      // xText.style("top", "-15px");
      // xText.style("top", "-12px")
      button.style("float", "right");
      xText.style("margin", "0px");
      xText.style("display", "inline");
      xText.style("cursor", "pointer");
      xText.style("color", "#993030");
      xText.elt.title = sliderManager.titleText.generalX;
      xText.elt.onmouseover = function () {
        $(this).css({ color: "orange" });
      };
      xText.elt.onmouseout = function () {
        $(this).css({ color: "#993030" });
      };
      xText.mousePressed(function () {
        newSlide.remove();
      });
      xText.parent(newSlide);

    let linebreak = document.createElement("br");
    if (newSlide.elt) {
      newSlide.elt.appendChild(linebreak);
    } else {
      newSlide.appendChild(linebreak);
    }
     

      let sWText = createP("DragNdraw distance: ");
      // sWText.style("position", "absolute");
      sWText.style("font-size", "15px");
      // sWText.style("left", "0px");
      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.parent(newSlide);
      sWText.elt.title = sliderManager.titleText.drawModeDragNDraw;

      sWText = createP(toolbox.selectedTool.dragNDrawDistanceBase);
      // sWText.style("position", "absolute");
      sWText.style("font-size", "15px");
      sWText.style("max-width", "100px");
      sWText.style("overflow", "hidden");
      sWText.addClass("dragNDrawDistanceText");
      sWText.elt.title = sliderManager.titleText.drawModeDragNDraw;
      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.parent(newSlide);

      // console.log(drawManager.drawModeSettings)
      let selBox = createCheckbox("Enable dragNdraw", drawManager.drawModeSettings.enableDragNDraw);
      // noFillBox.style("position", "absolute"); 
      selBox.style("float", "right"); // noFillBox.style("left", "120px");
      selBox.style("margin-right", "30px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
      // selBox.style("visibility", "hidden");
      selBox.changed(dragNDrawCheckBoxEvent)
      selBox.parent(newSlide);
      selBox.elt.title = sliderManager.titleText.drawModeDragNDraw;
      

      linebreak = document.createElement("br");
      if (newSlide.elt) {
        newSlide.elt.appendChild(linebreak);
      } else {
        newSlide.appendChild(linebreak);
      }

      //   helpers.decreaseVertexArray();
      // });
      let sWslider = createSlider(
        drawManager.drawModeSettings.dragNDrawDistanceMin,
        drawManager.drawModeSettings.dragNDrawDistanceMax,
        drawManager.drawModeSettings.dragNDrawDistanceBase
      );
      // sWslider.style("position", "absolute");
      sWslider.style("width", "90%");
      // sWslider.style("line-hight", "23px");
      sWslider.style("display", "inline");
      sWslider.elt.onchange = dragNDrawDistanceUpdate;
      sWslider.parent(newSlide);
      sWslider.elt.title = sliderManager.titleText.drawModeDragNDraw;

      linebreak = document.createElement("br");
      if (newSlide.elt) {
        newSlide.elt.appendChild(linebreak);
      } else {
        newSlide.appendChild(linebreak);
      }

      sWText = createP("Dragging distance:");
      // sWText.style("position", "absolute");
      sWText.style("font-size", "15px");
      // sWText.style("left", "0px");
      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.elt.title = sliderManager.titleText.drawModeDragging;
      sWText.parent(newSlide);




      sWText = createP(toolbox.selectedTool.dragDistanceBase);
      // sWText.style("position", "absolute");
      sWText.style("font-size", "15px");
      sWText.addClass("dragDistanceText");
      sWText.style("max-width", "30px");
      sWText.style("overflow", "hidden");
      sWText.elt.title = sliderManager.titleText.drawModeDragging;

      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.parent(newSlide);


      selBox = createCheckbox("Enable dragging", drawManager.drawModeSettings.enableDragging);
      // noFillBox.style("position", "absolute");
      selBox.style("float", "right"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
      selBox.style("margin-right", "45px");
      selBox.elt.title = sliderManager.titleText.drawModeDragging;
      // selBox.style("visibility", "hidden");
      selBox.changed(draggingCheckBoxEvent)
      selBox.parent(newSlide);
      
        

      linebreak = document.createElement("br");
      if (newSlide.elt) {
        newSlide.elt.appendChild(linebreak);
      } else {
        newSlide.appendChild(linebreak);
      }

      //   helpers.decreaseVertexArray();
      // });
      sWslider = createSlider(
        drawManager.drawModeSettings.dragDistanceMin,
        drawManager.drawModeSettings.dragDistanceMax,
        drawManager.drawModeSettings.dragDistanceBase
      );
      // sWslider.style("position", "absolute");
      // sWslider.style("left", "80px");
      sWslider.style("width", "90%");
      // sWslider.style("line-hight", "23px");
      sWslider.style("display", "inline");
      sWslider.elt.onchange = dragDistanceUpdate;
      sWslider.elt.title = sliderManager.titleText.drawModeDragging;
      sWslider.parent(newSlide);

     
      function dragNDrawDistanceUpdate() {
        // console.log(this.value)
        toolbox.selectedTool.dragNDrawDistanceBase = parseFloat(this.value);
        
        document.getElementsByClassName("dragNDrawDistanceText").forEach( (text) =>{
          text.innerHTML = this.value;
          // console.log("text",text)
        })
        toolbox.selectedTool.updateSettings = true;
        // console.log(toolbox.selectedTool.dragNDrawDistance)
      }
      function dragDistanceUpdate() {
              // console.log(this.value)
              toolbox.selectedTool.dragDistanceBase = parseFloat(this.value);
              // document.getElementById("dragDistanceText").innerHTML = this.value;
              
              let elem = document.getElementsByClassName("dragDistanceText")
              elem.forEach((text)=>{
                text.innerHTML = this.value;
              })

              toolbox.selectedTool.updateSettings = true;
            }
      function draggingCheckBoxEvent (){
        drawManager.drawModeSettings.enableDragging = !drawManager.drawModeSettings.enableDragging;
        // console.log(drawManager.drawModeSettings.enableDragging)
      }
      function dragNDrawCheckBoxEvent (){
        drawManager.drawModeSettings.enableDragNDraw = !drawManager.drawModeSettings.enableDragNDraw;
        // console.log(drawManager.drawModeSettings.enableDragNDraw)
      }


    }
  };

  this.createOrderSlide = function (pos) {
    // figuresLength = drawManager.figrues.length
    // for (let i = 0; i < figuresLength; i++)

    // let myStorage = drawManager.getMyStorage();
    let figuresLength = drawManager.getLengthOfFigures();

    for (let i = 0; i < figuresLength; i++) {
      //For loop for all figure if display all figures

      let figure = drawManager.getFigure(i);

      // console.log(figure);

      let newSlide = createDiv();
      // console.log(newSlide);
      newSlide.elt.identity = i;
      // console.log(newSlide);
      newSlide.addClass("order");
      newSlide.parent(pos);
      newSlide.elt.setAttribute(
        "style",
        `         
                display: inline-block;
                position: relative;
                min-width: 300px;
                height: content;
                background-color: rgb(50, 50, 200);
                overflow-y:auto;
                overflow-x:hidden;
                margin:  0px;
                padding: 0px;
                text-align: left;
                
                `
      ); // display: flex;// // ;flex-wrap: wrap;justify-content: flex-start;

      let mainTextElem = createP("FIGURE:");
      mainTextElem.parent(newSlide);
      // mainTextElem.style("position", "absolute");
      // mainTextElem.style("left", "0px")
      // mainTextElem.style("top", "-12px")
      mainTextElem.style("margin", "0px");
      mainTextElem.style("width", "61px");
      mainTextElem.style("text-align", "left");
      mainTextElem.style("display", "inline");
      mainTextElem.elt.title = sliderManager.titleText.orderFigure;

      let inp = createInput(figure.name);
      inp.style("margin", "0px 2px");
      inp.style("width", "106px");
      inp.style("display", "inline");
      inp.parent(newSlide);
      inp.elt.title = sliderManager.titleText.orderFigure;
      // // inp.position(0, 0);
      // // inp.size(100);
      inp.input(figureNameInputEvent);

      button = createButton("N");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      button.style("display", "inline");
      button.style("visibility", "hidden");

      // button.style("top", "123px")
      button.parent(newSlide);
      // button.mousePressed();

      button = createButton("D");
      button.elt.onmouseover = function () {
        $(this).css({ color: "orange" });
      };
      button.elt.onmouseout = function () {
        $(this).css({ color: "#993030" });
      };
      button.style("color", "#993030");
      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.style("visibility", "hidden");
      // button.mousePressed(() => {
      //   console.log(button, this);

      //   helpers.deleteVertex();
      // });

      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      // button.style("visibility", "hidden");
      button.mousePressed(moveSlideUp);
      button.elt.title = sliderManager.titleText.generalUp;

      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("visibility", "hidden");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.mousePressed(moveSlideDown);
      button.elt.title = sliderManager.titleText.generalDown;
      // button.mousePressed(() => {
      //   console.log(button, this);

      //   helpers.decreaseVertexArray();
      // });

      let xText = createP("X");
      // xText.style("position", "absolute")
      // xText.style("right", "17px")
      // xText.style("top", "-12px")
      xText.style("margin", "0px");
      xText.style("display", "inline");
      xText.style("cursor", "pointer");
      xText.style("color", "#993030");
      xText.elt.title = sliderManager.titleText.generalX;
      xText.elt.onmouseover = function () {
        $(this).css({ color: "orange" });
      };
      xText.elt.onmouseout = function () {
        $(this).css({ color: "#993030" });
      };
      xText.mousePressed(function () {
        newSlide.remove();
      });
      xText.parent(newSlide);

      let linebreak = document.createElement("br");
      if (newSlide.elt) {
        newSlide.elt.appendChild(linebreak);
      } else {
        newSlide.appendChild(linebreak);
      }
      // console.log("mainTextElem", mainTextElem)

      let vText = createP("Drawings:");
      // vText.style("position", "absolute");
      // vText.style("left", "0px");
      // vText.style("top", "110px");
      vText.style("display", "inline");
      vText.parent(newSlide);

      // console.log("part", part)
      let vNumText = createP(figure.drawings.length);
      // vNumText.style("position", "absolute");
      // vNumText.style("left", "65px");
      vNumText.style("max-width", "50px");
      vNumText.style("display", "inline");
      vNumText.parent(newSlide);

      buttonDis = createButton("Not Functional");
      // button.style("position", "absolute");
      // button.style("right", "30px");
      // if (!part.showDetails)
      // {
      //   buttonDis.style("color", "red");
      // }
      buttonDis.style("display", "inline");
      buttonDis.style("width", "auto");
      buttonDis.style("margin-left", "5px");
      buttonDis.style("visibility", "hidden");
      // button.style("display", "inline");
      // button.style("top", "123px")
      buttonDis.parent(newSlide);
      // buttonDis.elt.onclick = (e) => {

      let selBox = createCheckbox("SELECT All", false);
      // noFillBox.style("position", "absolute");
      selBox.style("margin-left", "0px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
      selBox.style("visibility", "hidden");
      selBox.changed(() => {
        // console.log(noFillBox.checked())

        let elem = document.getElementsByClassName("currentSlide");
        let length = elem.length;

        // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
        if (length > 1) {
          for (let i = 0; i < length; i++) {
            elem[i].children[3].children[0].checked = noFillBox.checked();
          }
        }

        drawManager.getPart().noFill = noFillBox.checked();
        toolbox.selectedTool.drawn = false;
      });
      selBox.parent(newSlide);
      //   if (part.showDetails)
      //   {
      //     buttonDis.style("color", "red");
      //     newPartInfo.elt.style.display = "none";
      //     part.showDetails = false;

      //   } else
      //   {
      //     buttonDis.style("color", "black");
      //     newPartInfo.elt.style.display = "inline-block";
      //     part.showDetails = true;

      //   }

      // };

      // for loop every drawing
      for (let j = 0; j < figure.drawings.length; j++) {
        let drawing = figure.drawings[j];
        createHTMLDrawing(drawing, newSlide, j);
      }

      drawManager.setCurrentPartR();
    }

    function createHTMLDrawing(drawing, newSlide, j) {
      let newDrawing = createDiv();
      // console.log(newDrawing);
      newDrawing.elt.identity = j;
      // newdrawing.addClass("order");
      newDrawing.parent(newSlide);
      // console.log(newDrawing.elt.parentElement);
      newDrawing.elt.setAttribute(
        "style",
        `     display: block;    
                font-size: 13px;
                position: relative;
                width: 285px;
                height: auto;
                background-color: rgb(19, 180, 192);
                margin-left:  10px;
                margin-bottom: 5px;
                padding-bottom: 5px;
                margin-top: 5px;
                padding-top: 5px;
                
                text-align: left;
                padding-bottom: 10px;
                
                `
      ); // display: flex;// // ;// justify-content: flex-start; // display: inline;flex-wrap: wrap;
      // linebreak = document.createElement("br");
      // newSlide.elt.appendChild(linebreak);

      let drawingTextElem = createP("DRAWING:");
      drawingTextElem.parent(newDrawing);
      // mainTextElem.style("position", "absolute");
      // mainTextElem.style("left", "0px")
      // mainTextElem.style("top", "-12px")
      drawingTextElem.style("margin", "0px");
      drawingTextElem.style("width", "80px");
      // drawingTextElem.style("text-align", "left");
      drawingTextElem.style("display", "inline");

      inp = createInput(drawing.name);
      inp.style("margin", "0px 2px");
      inp.style("width", "103px");
      // inp.style("text-align", "left");
      inp.style("display", "inline");
      inp.parent(newDrawing);

      // // inp.position(0, 0);
      // // inp.size(100);
      inp.input(drawingNameInputEvent);

      button = createButton("N");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newDrawing);
      button.elt.title = sliderManager.titleText.orderNewDrawing;
      button.mousePressed(
        // console.log(button, this);

        createNewDrawing
      );

      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newDrawing);
      button.elt.title = sliderManager.titleText.orderMoveUpDrawing;

      button.mousePressed(moveUpDrawing);

      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newDrawing);
      button.mousePressed(moveDownDrawing);
      button.elt.title = sliderManager.titleText.orderMoveDownDrawing;

      button = createButton("D");
      button.elt.onmouseover = function () {
        $(this).css({ color: "orange" });
      };
      button.elt.onmouseout = function () {
        $(this).css({ color: "#993030" });
      };
      button.style("color", "#993030");
      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newDrawing);
      button.elt.title = sliderManager.titleText.orderDeleteDrawing;
      button.mousePressed(deleteDrawing);

      let vText = createP("Parts:");
      // vText.style("position", "absolute");
      // vText.style("left", "0px");
      // vText.style("top", "110px");
      vText.style("display", "inline");
      vText.parent(newDrawing);

      // console.log("part", part)
      let vNumText = createP(drawing.parts.length);
      // vNumText.style("position", "absolute");
      // vNumText.style("left", "65px");
      vNumText.style("max-width", "50px");
      vNumText.style("display", "inline");
      vNumText.parent(newDrawing);

      buttonDis = createButton("Show Details");
      // button.style("position", "absolute");
      // button.style("right", "30px");
      // if (!part.showDetails)
      // {
      //   buttonDis.style("color", "red");
      // }
      buttonDis.style("display", "inline");
      buttonDis.style("width", "auto");
      buttonDis.style("margin-left", "35px");
      buttonDis.mousePressed(displayDrawInput);
      if (!drawing.draw) {
        buttonDis.style("color", "red");
      }
      buttonDis.parent(newDrawing);

      // buttonDis.elt.onclick = (e) => {
      // console.log(drawing.draw)
      let selBox = createCheckbox("Draw This", drawing.draw);
      // noFillBox.style("position", "absolute");
      selBox.style("margin-left", "0px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
      selBox.elt.title =  sliderManager.titleText.orderDrawThisDrawing;
      selBox.changed(inputDrawDrawing);
      selBox.parent(newDrawing);

      for (let k = 0; k < drawing.parts.length; k++) {
        let part = drawing.parts[k];
        // newdrawing.addClass("order");

        createHTMLPart(part, newDrawing, k, drawing.draw);
        //createNewPart()
      }
    }

    function createHTMLPart(part, newDrawing, k, drawingDraw) {
      // console.log("createHTMLPart, part", part)
      let linebreak = document.createElement("br");
      if (newDrawing.elt) {
        newDrawing.elt.appendChild(linebreak);
      } else {
        newDrawing.appendChild(linebreak);
      }

      // let linebreak = document.createElement("br");
      let newPart = createDiv();
      newPart.elt.identity = k;
      newPart.parent(newDrawing);
      newPart.elt.setAttribute(
        "style",
        `     display: block;    
                  font-size: 13px;
                  position: relative;
                  width: 272px;
                  height: auto;
                  background-color: rgb(119, 80, 192);
                  margin-left:  10px;
                  
                  
                  
                  text-align: left;
                  
                  `
      );
      if (!drawingDraw) {
        newPart.style("display", "none");
      }
      // display: flex;// // ;// justify-content: flex-start; // display: inline;flex-wrap: wrap;
      // linebreak = document.createElement("br");
      // newSlide.elt.appendChild(linebreak);

      let partTextElem = createP("PART:");
      partTextElem.parent(newPart);
      // mainTextElem.style("position", "absolute");
      // mainTextElem.style("left", "0px")
      // mainTextElem.style("top", "-12px")
      partTextElem.style("margin", "0px");
      partTextElem.style("width", "80px");
      // drawingTextElem.style("text-align", "left");
      partTextElem.style("display", "inline");

      // console.log(part);

      inp = createInput(part.name);
      inp.style("margin", "0px 2px");
      inp.style("width", "99px");
      // inp.style("text-align", "left");
      inp.style("display", "inline");
      inp.parent(newPart);

      // // inp.position(0, 0);
      // // inp.size(100);
      inp.input(partNameInputEvent);

      let button = createButton("C");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);
      button.mousePressed(choosePart);
      button.elt.title = sliderManager.titleText.orderSetCurrent;

      button = createButton("N");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);      
      button.elt.title = sliderManager.titleText.orderNewPart;
      button.elt.onclick = createNewPart;
      // button.mousePressed(createNewPart);

      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);
      button.mousePressed(moveUpPart);
      button.elt.title = sliderManager.titleText.orderUp;
      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newPart);
      button.elt.title = sliderManager.titleText.orderDown;
      button.mousePressed(moveDownPart);

      button = createButton("D");
      button.elt.onmouseover = function () {
        $(this).css({ color: "orange" });
      };
      button.elt.onmouseout = function () {
        $(this).css({ color: "#993030" });
      };
      button.style("color", "#993030");
      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newPart);
      button.elt.title = sliderManager.titleText.orderDeletePart;
      button.mousePressed(deletePart);

      let vText = createP("Verticies:");
      // vText.style("position", "absolute");
      // vText.style("left", "0px");
      // vText.style("top", "110px");
      vText.style("display", "inline");
      vText.parent(newPart);

      // console.log("part", part)
      let vNumText = createP(part.vertexArray.length);
      // vNumText.style("position", "absolute");
      // vNumText.style("left", "65px");
      vNumText.style("max-width", "50px");
      vNumText.style("display", "inline");
      vNumText.parent(newPart);

      let drawBox = createCheckbox("Draw this", part.draw);
      // noFillBox.style("position", "absolute");
      // drawBox.style("float", "right" );// noFillBox.style("left", "120px");
      drawBox.style("margin-left", "30px");
      drawBox.style("display", "inline");
      drawBox.changed(inputDrawPart);
      drawBox.elt.title = sliderManager.titleText.orderDrawThis;
      
      drawBox.parent(newPart);

      buttonDis = createButton("Show Details");
      // button.style("position", "absolute");
      // button.style("right", "30px");
      if (!part.showDetails) {
        buttonDis.style("color", "red");
      }
      buttonDis.style("display", "inline");
      buttonDis.style("width", "auto");
      buttonDis.style("margin-left", "4px");
      // button.style("display", "inline");
      // button.style("top", "123px")
      buttonDis.parent(newPart);
      buttonDis.mousePressed(displayPartInput);

      // let showText = createP(part.vertexArray.length);
      // // vNumText.style("position", "absolute");
      // // vNumText.style("left", "65px");
      // // vNumText.style("top", "110px");
      // showText.style("display", "inline");
      // showText.parent(newPart);

      let newPartInfo = createDiv();
      newPartInfo.parent(newPart);
      newPartInfo.elt.setAttribute(
        "style",
        `
                display: inline-block;
                position: relative;
                min-width: 267px;
                text-align: left;
                
                margin:  5px;
                padding: 0px`
      );
      if (!part.showDetails) {
        newPartInfo.elt.style.display = "none";
      }

      //  box-sizing: border-box;     overflow: hidden;
      // console.log(newSlide.elt.style);
      // newSlide.style("display", "flex")
      // newSlide.style("margin", "0px")
      // newSlide.style("padding", "0px")
      // newSlide.style("flex-direction", "row")

      // let part = drawManager.getFigure(i);
      // part = part.drawings[j];
      // part = part.parts[k];

      let fillText = createP("Fill:");
      fillText.style("display", "inline");
      fillText.style("margin-right", "15px");
      // fillText.style("top", "5px");
      fillText.parent(newPartInfo);
      fillText.elt.title = sliderManager.titleText.orderFill; 

      let inpColorFill = createColorPicker(part.fill);
      inpColorFill.style("display", "inline");
      // inpColorFill.style("left", "70px");
      // inpColorFill.style("top", "25px");
      // inpColorFill.style("position", "absolute");
      // inpColorFill.style("height", "20px");
      inpColorFill.input(colorFillInput);
      inpColorFill.parent(newPartInfo);
      inpColorFill.elt.title = sliderManager.titleText.orderFill; 
      // console.log("inpColorFill", inpColorFill)

      // let noFillText = createP("noFill:");
      // // noFillText.style("font-size", "20px");
      // // noFillText.style("position", "absolute");
      // // noFillText.style("left", "120px");
      // // noFillText.style("top", "5px");
      // noFillText.style("display", "inline");
      // noFillText.parent(newSlide);

      let noFillBox = createCheckbox("noFill", part.noFill);
      // noFillBox.style("position", "absolute");
      // noFillBox.style("left", "120px");
      noFillBox.style("display", "inline");
      noFillBox.changed(noFillInput);
      noFillBox.parent(newPartInfo);

      noFillBox.elt.title = sliderManager.titleText.orderNoFill;

      linebreak = document.createElement("br");
      newPartInfo.elt.appendChild(linebreak);

      let strokeText = createP("Stroke:");
      // strokeText.style("font-size", "20px");
      // strokeText.style("left", "0px");
      // strokeText.style("top", "30px");
      // strokeText.style("position", "absolute");
      strokeText.style("display", "inline");
      strokeText.parent(newPartInfo);

      strokeText.elt.title = sliderManager.titleText.orderStroke;

      let inpColorStroke = createColorPicker(part.stroke);
      inpColorStroke.style("display", "inline");
      // inpColorStroke.style("position", "absolute");
      // inpColorStroke.style("left", "70px");
      // inpColorStroke.style("top", "50px");
      // inpColorStroke.style("height", "20px");
      inpColorStroke.input(colorStrokeInput);
      inpColorStroke.parent(newPartInfo);
      inpColorStroke.elt.title = sliderManager.titleText.orderStroke;
      // let noStrokeText = createP("noStroke:");
      // noStrokeText.style("font-size", "20px");
      // noStrokeText.style("position", "absolute");
      // noStrokeText.style("left", "120px");
      // noStrokeText.style("top", "30px");
      // noStrokeText.parent(newSlide);
      let noStrokeBox = createCheckbox("noStroke", part.noStroke);
      // noStrokeBox.style("position", "absolute");
      // noStrokeBox.style("left", "120px");
      // noStrokeBox.style("top", "45px");
      noStrokeBox.style("display", "inline");
      noStrokeBox.changed(noStrokeInput);
      noStrokeBox.parent(newPartInfo);
      noStrokeBox.elt.title = sliderManager.titleText.orderNoStroke;
      linebreak = document.createElement("br");
      newPartInfo.elt.appendChild(linebreak);

      let sWText = createP("strokeWeight");
      // sWText.style("position", "absolute");
      // sWText.style("font-size", "15px");
      // sWText.style("left", "0px");
      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.elt.title = sliderManager.titleText.orderStrokeWeight;
      
      sWText.parent(newPartInfo);

      //   helpers.decreaseVertexArray();
      // });
      let sWslider = createSlider(
        drawManager.settings.minStrokeWeight,
        drawManager.settings.maxStrokeWeight,
        part.strokeWeight
      );
      // sWslider.style("position", "absolute");
      // sWslider.style("left", "80px");
      // sWslider.style("line-hight", "23px");
      sWslider.style("display", "inline");
      sWslider.elt.onchange = strokeweightInput;
      sWslider.elt.title = sliderManager.titleText.orderStrokeWeight;
      sWslider.parent(newPartInfo);

      let sWInput = createInput(part.strokeWeight.toString(), "number");
      // sWInput.style("position", "absolute");
      // sWInput.style("right", "20px");
      sWInput.style("width", "53px");
      sWInput.style("display", "inline");
      // sWInput.style("top", "75px");
      sWInput.elt.onchange = strokeweightInput;
      sWInput.elt.title = sliderManager.titleText.orderStrokeWeight;
      sWInput.parent(newPartInfo);

      linebreak = document.createElement("br");
      newPartInfo.elt.appendChild(linebreak);
      // let numberInput =
      // console.log("drawManager.settings",drawManager.settings);

      let sel = createSelect();
      // sel.style("position", "absolute");
      // sel.style("left", "0px");
      sel.style("width", "100px");
      sel.style("display", "inline");

      // sel.style("top", "100px");
      sel.option('""');
      sel.option("LINES");
      sel.option("POINTS");
      sel.option("TRIANGLES");
      sel.option("TRIANGLE_STRIP");
      sel.option("TRIANGLE_FAN");
      sel.option("QUADS");
      sel.option("TESS");
      sel.selected(part.vertexMode);
      sel.changed(selectMenuInput);
      sel.parent(newPartInfo);

      sel.elt.options[0].title = sliderManager.titleText.generalSelDefault;
      sel.elt.options[1].title = sliderManager.titleText.generalSelLines;
      sel.elt.options[2].title = sliderManager.titleText.generalSelPoints;
      sel.elt.options[3].title = sliderManager.titleText.generalSelTriangles;
      sel.elt.options[4].title = sliderManager.titleText.generalSelTriangleStrip;
      sel.elt.options[5].title = sliderManager.titleText.generalSelTriangleFan;
      sel.elt.options[6].title = sliderManager.titleText.generalSelQuad;
      sel.elt.options[7].title = sliderManager.titleText.generalSelTess;
      
      sel.elt.title =   sliderManager.titleText.generalSelIntro+ "\n"+
                        sliderManager.titleText.generalSelLines+ "\n"+
                        sliderManager.titleText.generalSelPoints+ "\n"+
                        sliderManager.titleText.generalSelTriangles+ "\n"+
                        sliderManager.titleText.generalSelTriangleStrip+ "\n"+
                        sliderManager.titleText.generalSelTriangleFan+ "\n"+
                        sliderManager.titleText.generalSelQuad+ "\n"+
                        sliderManager.titleText.generalSelTess+ "\n"+
                        sliderManager.titleText.generalSelOutro;
                        
      let buttonText;

      if (drawManager.defaultPart.endShape) {
        buttonText = "endShape(CLOSE)";
      } else {
        buttonText = "endShape()";
      }
      button = createButton(buttonText);
      // button.style("position", "absolute");
      // button.style("right", "20px");
      button.style("width", "155px");
      // button.style("top", "100px");
      button.style("display", "inline");
      button.mousePressed(endShapeInput);
      button.elt.title = sliderManager.titleText.generalEndShape;

      button.parent(newPartInfo);

      // linebreak = document.createElement("br");
      // newPartInfo.elt.appendChild(linebreak);
    }

    //functions for buttons bellow, orderSlide

    function endShapeInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;

      // console.log(this.elt.value)
      // console.log(this.elt.parentElement.parentElement.identity)
      // console.log(figureIndex,drawingIndex,partIndex)

      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.endShape = !part.endShape;

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let elem = document.getElementsByClassName("order");

      // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[13]);
      if (part.endShape) {
        elem.forEach((orderSlide) => {
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[
            sliderManager.HTMLIndecies.divInPart
          ].children[13].innerHTML = "endShape(CLOSE)";
        });
      } else {
        elem.forEach((orderSlide) => {
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[
            sliderManager.HTMLIndecies.divInPart
          ].children[13].innerHTML = "endShape()";
        });
      }

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide();
      }
      toolbox.selectedTool.drawn = false;
      // console.log(button)
    }

    function selectMenuInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;

      // console.log(this.elt.value);
      // console.log(this.elt.parentElement.parentElement.identity)
      // console.log(figureIndex,drawingIndex,partIndex)

      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.vertexMode = this.elt.value;

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let elem = document.getElementsByClassName("order");

      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[12]);
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[12].value = this.elt.value;

        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[10].style.color = "red";
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[13]);
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[11].style.display = "none";
        // console.log(part.showDetails);

        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked = this.elt.children[0].checked;
        // console.log("order elemement", element);
      });

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide();
      }
      toolbox.selectedTool.drawn = false;
    }

    function displayDrawInput() {
      figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.parentElement.identity;

      // console.log("displayDrawInput Indicies:", figureIndex, drawingIndex);
      let drawing = drawManager.getFigure(figureIndex).drawings[drawingIndex];
      let partsLength = drawing.parts.length;
      drawing.showDetails = !drawing.showDetails;

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart;

      let elem = document.getElementsByClassName("order");
      if (drawing.showDetails) {
        elem.forEach((orderSlide) => {
          // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[10].style.color = "black";
          // console.log(orderSlide.children[HTMLIndexDrawing].children[8]);
          orderSlide.children[HTMLIndexDrawing].children[8].style.color =
            "black";

          for (let i = 0; i < partsLength; i++) {
            // console.log(
            //   orderSlide.children[HTMLIndexDrawing].children[
            //     HTMLIndexPart + i * 2
            //   ]
            // );
            orderSlide.children[HTMLIndexDrawing].children[
              HTMLIndexPart + i * 2
            ].style.display = "block";
          }
          // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[11].style.display = "inline-block";
        });
      } else {
        elem.forEach((orderSlide) => {
          // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[10].style.color = "red";
          // console.log(orderSlide.children[HTMLIndexDrawing].children[8]);
          orderSlide.children[HTMLIndexDrawing].children[8].style.color = "red";

          for (let i = 0; i < partsLength; i++) {
            // console.log(
            //   orderSlide.children[HTMLIndexDrawing].children[
            //     HTMLIndexPart + i * 2
            //   ]
            // );
            orderSlide.children[HTMLIndexDrawing].children[
              HTMLIndexPart + i * 2
            ].style.display = "none";
          }
          // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[11].style.display = "none";
        });
      }
    }

    function displayPartInput() {
      figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.identity;

      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.showDetails = !part.showDetails;

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let elem = document.getElementsByClassName("order");
      if (part.showDetails) {
        elem.forEach((orderSlide) => {
          // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[10].style.color);
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[10].style.color = "black";
          // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[11].style.display);
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[11].style.display = "inline-block";
        });
      } else {
        elem.forEach((orderSlide) => {
          // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[10].style.color);
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[10].style.color = "red";
          // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[11].style.display);
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart
          ].children[11].style.display = "none";
          // console.log(part.showDetails);

          // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked = this.elt.children[0].checked;
          // console.log("order elemement", element);
        });
      }
    }

    function strokeweightInput() {
      // console.log(sWslider)
      // console.log(this.parentElement.parentElement.identity);
      // console.log(this.value);
      figureIndex =
        this.parentElement.parentElement.parentElement.parentElement.identity;
      drawingIndex = this.parentElement.parentElement.parentElement.identity;
      partIndex = this.parentElement.parentElement.identity;

      let valueAsNumber = parseInt(this.value);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      if (valueAsNumber > drawManager.settings.maxStrokeWeight) {
        valueAsNumber = drawManager.settings.maxStrokeWeight;
      } else if (valueAsNumber < drawManager.settings.minStrokeWeight) {
        valueAsNumber = drawManager.settings.minStrokeWeight;
      }

      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.strokeWeight = valueAsNumber;

      // let elem = document.getElementsByClassName("currentSlide");
      // let length = elem.length;
      // if (length > 0) {
      //   for (let i = 0; i < length; i++) {
      //     elem[i].children[9].value = parseInt(sWslider.elt.value);
      //     elem[i].children[10].value = parseInt(sWslider.elt.value);
      //   }
      // }

      let elem = document.getElementsByClassName("order");
      // let length = elem.length;
      elem.forEach((orderSlide) => {
        // console.log("running");
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart])
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[9].value)
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[9].value = valueAsNumber;
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[10].value = valueAsNumber;
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[6].children[0].checked = this.elt.children[0].checked;
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[1].value = this.elt.value;
      });

      // console.log(elem[0].children[9].value);
      // console.log(elem[0].children[10].value);

      if (toolbox.selectedTool.hasOwnProperty("updateSettings")) {
        toolbox.selectedTool.updateSettings = true;
      }
      // console.log("isCurrentPArt",drawManager.isCurrentPart(figureIndex, drawingIndex,partIndex))
      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide();
      }
      toolbox.selectedTool.drawn = false;
      // console.log("sWslider.elt.value", sWslider.elt.value);
      // sWInput.elt.value = drawManager.defaultPart.strokeWeight;
      // console.log(drawManager.defaultPart.strokeWeight);
    }

    function noStrokeInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;
      // console.log(this.elt.children[0].checked);

      // console.log(inpColorFill.elt.value);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.noStroke = this.elt.children[0].checked;

      let elem = document.getElementsByClassName("order");
      // let length = elem.length;
      elem.forEach((orderSlide) => {
        // console.log("running");
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[6].children[0])
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[6].children[0].checked = this.elt.children[0].checked;
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[1].value = this.elt.value;
      });
      // if (length > 1) {
      //   for (let i = 0; i < length; i++) {
      //     elem[i].children[2].value = inpColorFill.elt.value;
      //   }
      // }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      // drawManager.getPart().fill = color(this.elt.value);

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide(drawManager.getPart());
      }

      toolbox.selectedTool.drawn = false;
    }

    function noFillInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;
      // console.log(this.elt.children[0].checked);

      // console.log(inpColorFill.elt.value);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.noFill = this.elt.children[0].checked;

      let elem = document.getElementsByClassName("order");
      // let length = elem.length;
      elem.forEach((orderSlide) => {
        // console.log("running");
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[2].children[0])
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[2].children[0].checked = this.elt.children[0].checked;
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[1].value = this.elt.value;
      });
      // if (length > 1) {
      //   for (let i = 0; i < length; i++) {
      //     elem[i].children[2].value = inpColorFill.elt.value;
      //   }
      // }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      // drawManager.getPart().fill = color(this.elt.value);

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide(drawManager.getPart());
      }

      toolbox.selectedTool.drawn = false;
    }

    function colorFillInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;
      // console.log(this.elt.value);

      // console.log(inpColorFill.elt.value);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.fill = color(this.elt.value);

      let elem = document.getElementsByClassName("order");
      // let length = elem.length;
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children);
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[1])
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[1].value = this.elt.value;
      });
      // if (length > 1) {
      //   for (let i = 0; i < length; i++) {
      //     elem[i].children[2].value = inpColorFill.elt.value;
      //   }
      // }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      // drawManager.getPart().fill = color(this.elt.value);

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide(part);
      }

      toolbox.selectedTool.drawn = false;
    }
    function colorStrokeInput() {
      figureIndex =
        this.elt.parentElement.parentElement.parentElement.parentElement
          .identity;
      drawingIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.parentElement.identity;
      // console.log(this.elt.value);

      // console.log(inpColorFill.elt.value);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.stroke = color(this.elt.value);

      let elem = document.getElementsByClassName("order");
      // let length = elem.length;
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children);
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[sliderManager.HTMLIndecies.divInPart].children[5])
        orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[
          sliderManager.HTMLIndecies.divInPart
        ].children[5].value = this.elt.value;
      });
      // if (length > 1) {
      //   for (let i = 0; i < length; i++) {
      //     elem[i].children[2].value = inpColorFill.elt.value;
      //   }
      // }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      // drawManager.getPart().fill = color(this.elt.value);

      if (drawManager.isCurrentPart(figureIndex, drawingIndex, partIndex));
      {
        helpers.updateSettingsCurSlide(part);
      }

      toolbox.selectedTool.drawn = false;
    }

    function inputDrawDrawing() {
      figureIndex = this.elt.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.identity;
      // console.log("inputDrawDrawing", figureIndex, drawingIndex);

      // let indicies = drawManager.getCurrentIndicies();
      // console.log(this.elt.children[0].checked);
      // console.log(this.elt.parentElement.identity);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart;

      let drawing = drawManager.getFigure(figureIndex).drawings[drawingIndex];
      drawing.draw = this.elt.children[0].checked;
      let partsLength = drawing.parts.length;

      let elem = document.getElementsByClassName("order");
      // console.log("order elem", elem);
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked);
        // console.log(this.elt.value);
        // console.log(orderSlide.children[HTMLIndexDrawing].children[9].children[0].checked);
        orderSlide.children[HTMLIndexDrawing].children[9].children[0].checked =
          this.elt.children[0].checked;

        for (let i = 0; i < partsLength; i++) {
          orderSlide.children[HTMLIndexDrawing].children[
            HTMLIndexPart + i * 2
          ].children[9].children[0].checked = this.elt.children[0].checked;
          drawing.parts[i].draw = this.elt.children[0].checked;
        }
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked = this.elt.children[0].checked;
        // console.log("order elemement", element);
      });
      // if (indicies[0] == figureIndex && indicies[1] == drawingIndex && indicies[2] == partIndex)
      // {
      //   helpers.updateCurSliderNameInput(this.elt.value);
      // }
    }

    function inputDrawPart() {
      figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.identity;

      // let indicies = drawManager.getCurrentIndicies();
      // console.log(this.elt.children[0].checked);
      // console.log(this.elt.parentElement.identity);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let drawing = drawManager.getFigure(figureIndex).drawings[drawingIndex];
      let partsLength = drawing.parts.length;
      let part = drawing.parts[partIndex];
      part.draw = this.elt.children[0].checked;

      let setDrawingDrawToFalse;
      let setDrawingDrawToTrue;
      if (this.elt.children[0].checked) {
        setDrawingDrawToTrue = true;
        setDrawingDrawToFalse = false;
        drawing.draw = true;
      } else {
        setDrawingDrawToTrue = false;
        let allPartsFalse = true;
        for (let i = 0; i < partsLength; i++) {
          if (drawing.parts[i].draw) {
            allPartsFalse = false;
            break;
          }
        }
        if (allPartsFalse) {
          setDrawingDrawToFalse = true;
          drawing.draw = false;
        }
      }

      let elem = document.getElementsByClassName("order");
      // console.log("order elem", elem);
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[9].children[0].checked);
        // console.log(this.elt.value);
        orderSlide.children[HTMLIndexDrawing].children[
          HTMLIndexPart
        ].children[9].children[0].checked = this.elt.children[0].checked;
        if (setDrawingDrawToTrue) {
          orderSlide.children[
            HTMLIndexDrawing
          ].children[9].children[0].checked = this.elt.children[0].checked;
        } else if (setDrawingDrawToFalse) {
          orderSlide.children[
            HTMLIndexDrawing
          ].children[9].children[0].checked = this.elt.children[0].checked;
        }
        // console.log("order elemement", element);
      });
      // if (indicies[0] == figureIndex && indicies[1] == drawingIndex && indicies[2] == partIndex)
      // {
      //   helpers.updateCurSliderNameInput(this.elt.value);
      // }
    }

    function moveUpPart() {
      let figureIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;
      // exchange underlying part
      let partsLength = drawManager.getLengthOfParts(figureIndex, drawingIndex);
      if (partIndex <= 0) {
        return;
      }
      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
        helpers.moveHTMLUp(
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          HTMLIndexPart,
          2,
          partsLength
        );
      });
      // parentHTML, index, HTMLIndex, diff, length
      drawManager.exchangeParts(
        figureIndex,
        drawingIndex,
        partIndex,
        partIndex - 1
      );
      //move HTML

      toolbox.selectedTool.drawn = false;
    }

    function moveUpDrawing() {
      let figureIndex = this.elt.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.identity;
      // console.log("runnign", drawingIndex, figureIndex);

      if (drawingIndex <= 0) {
        return;
      }

      // exchange underlying part
      let drawingsLength = drawManager.getFigure(figureIndex).drawings.length;

      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;

      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
        helpers.moveHTMLUp(
          orderSlide,
          drawingIndex,
          HTMLIndexDrawing,
          1,
          drawingsLength
        );
      });
      // parentHTML, index, HTMLIndex, diff, length
      drawManager.exchangeDrawings(figureIndex, drawingIndex, drawingIndex - 1);
      //move HTML

      toolbox.selectedTool.drawn = false;
    }

    function moveDownDrawing() {
      let figureIndex = this.elt.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.identity;

      // exchange underlying part
      let drawingsLength = drawManager.getFigure(figureIndex).drawings.length;

      if (drawingIndex + 1 >= drawingsLength) {
        return;
      }
      // let indicies =
      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;

      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
        helpers.moveHTMLDown(
          orderSlide,
          drawingIndex,
          HTMLIndexDrawing,
          1,
          drawingsLength
        );
      });
      // parentHTML, index, HTMLIndex, diff, length
      drawManager.exchangeDrawings(figureIndex, drawingIndex, drawingIndex + 1);

      toolbox.selectedTool.drawn = false;
    }
    function moveDownPart() {
      let figureIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;
      // exchange underlying part
      let partsLength = drawManager.getLengthOfParts(figureIndex, drawingIndex);

      if (partIndex + 1 >= partsLength) {
        return;
      }
      // let indicies =
      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
        helpers.moveHTMLDown(
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          HTMLIndexPart,
          2,
          partsLength
        );
      });
      // parentHTML, index, HTMLIndex, diff, length
      drawManager.exchangeParts(
        figureIndex,
        drawingIndex,
        partIndex,
        partIndex + 1
      );

      toolbox.selectedTool.drawn = false;
    }

    function deletePart() {
      //Get correct part to remove!
      let figureIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;

      //If there is only one part, make one new in the slot after this one!
      let partsLength = drawManager.getLengthOfParts(figureIndex, drawingIndex);
      // console.log("deletePart() +length", figureIndex, drawingIndex, partIndex, length)
      if (partsLength <= 1) {
        // console.log("partIndex for createNewPart in deltePart", partIndex)
        createNewPart(figureIndex, drawingIndex, 1);
        partsLength++;
      }

      //find the HTML positions for later
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      let indicies = drawManager.getCurrentIndicies();
      let updateCurrent = false;
      if (
        indicies[0] === figureIndex &&
        indicies[1] === drawingIndex &&
        partIndex <= indicies[2]
      ) {
        drawManager.removeCurrentPartMarking();
        updateCurrent = true;
      }
      //Remove the actual Part from storrage
      drawManager.removePartFromStorage(figureIndex, drawingIndex, partIndex);
      partsLength--;
      // also remove the HTMLpart from Order

      let elem = document.getElementsByClassName("order");
      elem.forEach((orderSlide) => {
        helpers.deleteHTMLElement(
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          HTMLIndexPart,
          2,
          partsLength
        );
        //reset the identity property of all parts
        let HTMLlength = orderSlide.children[HTMLIndexDrawing].children.length;

        for (
          let i = sliderManager.HTMLIndecies.firstPart, j = 0;
          i < HTMLlength;
          i += 2, j++
        ) {
          // console.log("setting identites j i",j,i);

          orderSlide.children[HTMLIndexDrawing].children[i].identity = j;
        }
      });

      // console.log("ning");
      // drawManager.setCurrentPart(partIndex);
      if (updateCurrent) {
        drawManager.manageCurrentPartsAfterDelete(
          figureIndex,
          drawingIndex,
          indicies
        );
      }

      helpers.updateNumberOfPartsText(figureIndex, drawingIndex);

      toolbox.selectedTool.drawn = false;
    }

    function deleteDrawing() {
      //Get correct drawing to remove!
      let figureIndex = this.elt.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.identity;
      let partIndex = this.elt.identity;

      // console.log(
      //   "deleteDrawing indicies:",
      //   figureIndex,
      //   drawingIndex,
      //   partIndex
      // );

      //If there is only one part, make one new in the slot after this one!
      let figure = drawManager.getFigure(figureIndex);
      let drawingsLength = figure.drawings.length;
      // console.log("deletePart() +length", figureIndex, drawingIndex, partIndex, length)

      if (drawingsLength <= 1) {
        // console.log(
        //   "partIndex for createNewDrawing in delteDrawing",
        //   figureIndex,
        //   1
        // );
        createNewDrawing(figureIndex, 1);
        drawingsLength++;
      }

      //find the HTML positions for later
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;

      let indicies = drawManager.getCurrentIndicies();
      let updateCurrent = false;
      if (indicies[0] === figureIndex && drawingIndex <= indicies[1]) {
        drawManager.removeCurrentPartMarking();
        updateCurrent = true;
      }
      //Remove the actual Part from storrage
      drawManager.removeDrawingFromStorage(figureIndex, drawingIndex);
      drawingsLength--;

      // also remove the HTMLpart from Order

      let elem = document.getElementsByClassName("order");
      elem.forEach((orderSlide) => {
        helpers.deleteHTMLElement(
          orderSlide,
          drawingIndex,
          HTMLIndexDrawing,
          1,
          drawingsLength
        );
        //reset the identity property of all parts
        let HTMLlength = orderSlide.children.length;

        for (
          let i = sliderManager.HTMLIndecies.firstDrawing, j = 0;
          i < HTMLlength;
          i++, j++
        ) {
          orderSlide.children[i].identity = j;
          //  console.log(orderSlide.children[i].identity);
        }
      });

      // console.log("ning");
      // drawManager.setCurrentPart(partIndex);
      if (updateCurrent) {
        drawManager.manageCurrentDrawingsAfterDelete(figureIndex, indicies);
      }

      helpers.updateNumberOfDrawingsText(figureIndex, drawingIndex);
      helpers.updateSettingsCurSlide(drawManager.getPart());

      toolbox.selectedTool.drawn = false;
    }

    function createNewDrawing(figureIndex, drawingIndex) {
      if (figureIndex === undefined) {
        figureIndex = this.elt.parentElement.parentElement.identity;
      }

      if (drawingIndex === undefined) {
        drawingIndex = this.elt.parentElement.identity + 1;
      }

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      drawManager.removeCurrentPartMarking();

      let figure = drawManager.addDrawing(figureIndex, drawingIndex);

      let elem = document.getElementsByClassName("order");
      elem.forEach((OrderSlide) => {
        // console.log("going once",
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart]);
        // console.log(slide.children[HTMLIndexDrawing].identity);

        createHTMLDrawing(
          figure.drawings[drawingIndex],
          OrderSlide,
          drawingIndex
        );
        helpers.insertHTMLElement(
          OrderSlide,
          drawingIndex,
          HTMLIndexDrawing,
          1,
          figure.drawings.length
        );
      });
      // console.log("values given to SetCurretP in newdrawing",drawingIndex,figureIndex)
      drawManager.setCurrentPartR(figureIndex, drawingIndex, figureIndex);
      helpers.updateSettingsCurSlide(drawManager.getPart());

      helpers.updateNumberOfDrawingsText(figureIndex, drawingIndex);
    }

    function createNewPart(PointerEvent,figureIndex, drawingIndex, partIndex) {
      // figureI++; drawingI++,partI++
      // console.log(this)
      console.log("createNewPart Indicies:", figureIndex ,drawingIndex, partIndex)
      if (figureIndex === undefined) {
        figureIndex =
          this.parentElement.parentElement.parentElement.identity;
      }
      if (drawingIndex === undefined) {
        drawingIndex = this.parentElement.parentElement.identity;
      }
      if (partIndex === undefined) {
        partIndex = this.parentElement.identity + 1;
      }
      // console.log("createNewPart Indicies, after:", figureIndex ,drawingIndex, partIndex)
      // console.log(figureIndex, drawingIndex, partIndex)
      // figureIndex++;drawingIndex++;partIndex++;
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let indicies = drawManager.getCurrentIndicies();
      // console.log(indicies);

      let HTMLIndexDrawingOriginal =
        sliderManager.HTMLIndecies.firstDrawing + indicies[1];
      let HTMLIndexPartOriginal =
        sliderManager.HTMLIndecies.firstPart + 2 * indicies[2];
      // console.log("stuff form createNewPart", figureIndex,drawingIndex,partIndex)
      let drawing = drawManager.addPart(figureIndex, drawingIndex, partIndex);

      // console.log("part after creation", drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[partIndex].name)
      drawManager.removeCurrentPartMarking();
      let elem = document.getElementsByClassName("order");
      elem.forEach((orderSlide) => {
        // console.log("going once",
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart]);
        // console.log(orderSlide.children[HTMLIndexDrawing].identity);
        // console.log(orderSlide.children[HTMLIndexDrawing])
        if (
          orderSlide.children[HTMLIndexDrawingOriginal].children[
            HTMLIndexPartOriginal
          ].style.backgroundColor
        ) {
          orderSlide.children[HTMLIndexDrawingOriginal].children[
            HTMLIndexPartOriginal
          ].style.backgroundColor = sliderManager.col.partDefault;
        }

        createHTMLPart(
          drawing.parts[partIndex],
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          drawing.draw
        );

        helpers.insertHTMLElement(
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          HTMLIndexPart,
          2,
          drawing.parts.length
        );
        orderSlide.children[HTMLIndexDrawing].children[
          HTMLIndexPart
        ].style.backgroundColor = sliderManager.col.currentColorPart;

        // );
      });

      drawManager.setCurrentPartR(partIndex, drawingIndex, figureIndex);
      helpers.updateSettingsCurSlide(drawManager.getPart());
      helpers.updateDrawingDraw(figureIndex, drawingIndex, true);
      helpers.updateNumberOfPartsText(figureIndex, drawingIndex);
      // console.log(this.elt.parentElement);
      // element to add to: this.elt.parentElement.parentElement
    }

    function partNameInputEvent() {
      figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.parentElement.identity;
      partIndex = this.elt.parentElement.identity;

      let indicies = drawManager.getCurrentIndicies();
      // console.log(this.elt.value);
      // console.log(this.elt.parentElement.identity);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let part =
        drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[
          partIndex
        ];
      part.name = this.elt.value;

      let elem = document.getElementsByClassName("order");
      // console.log("order elem", elem);
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[1].value);
        orderSlide.children[HTMLIndexDrawing].children[
          HTMLIndexPart
        ].children[1].value = this.elt.value;
        // console.log("order elemement", element);
      });
      if (
        indicies[0] == figureIndex &&
        indicies[1] == drawingIndex &&
        indicies[2] == partIndex
      ) {
        helpers.updateCurSliderNameInput(this.elt.value);
      }
      // elem = document.getElementsByClassName("currentSlide");
      // console.log("currentSlider elem", elem);
      // elem.forEach((element) => {
      //   console.log("current element", element.children[0].innerHTML);
      //   element.children[0].innerHTML = "CURRENT: " + this.elt.value;
      // });
    }

    function drawingNameInputEvent() {
      figureIndex = this.elt.parentElement.parentElement.identity;
      drawingIndex = this.elt.parentElement.identity;

      // console.log("drawingIndex", this.elt.parentElement.identity,
      // "figureIndex",this.elt.parentElement.parentElement.identity)
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;

      let drawing = drawManager.getFigure(figureIndex).drawings[drawingIndex];
      drawing.name = this.elt.value;

      let elem = document.getElementsByClassName("order");
      // console.log("order elem", elem);
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[1].value);
        // console.log("order elemement", element);

        // console.log(orderSlide.children[HTMLIndexDrawing].children[1]);
        orderSlide.children[HTMLIndexDrawing].children[1].value =
          this.elt.value;
      });
    }
    function figureNameInputEvent() {
      figureIndex = this.elt.parentElement.identity;

      // console.log("drawingIndex", this.elt.parentElement.identity,
      // "figureIndex",this.elt.parentElement.parentElement.identity)

      let figure = drawManager.getFigure(figureIndex);
      figure.name = this.elt.value;

      let elem = document.getElementsByClassName("order");
      // console.log("order elem", elem);
      elem.forEach((orderSlide) => {
        // console.log(orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart].children[1].value);
        // console.log("order elemement", element);

        // console.log(orderSlide.children[1]);
        orderSlide.children[1].value = this.elt.value;
      });
    }

    function choosePart() {
      let figureIndex =
        this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let indicies = drawManager.getCurrentIndicies();
      // console.log(indicies);
      let HTMLIndexDrawingOriginal =
        sliderManager.HTMLIndecies.firstDrawing + indicies[1];
      let HTMLIndexPartOriginal =
        sliderManager.HTMLIndecies.firstPart + 2 * indicies[2];
      // console.log("stuff form createNewPart", figureIndex,drawingIndex,partIndex)
      drawManager.setCurrentPartR(partIndex, drawingIndex, figureIndex);

      let elem = document.getElementsByClassName("order");
      elem.forEach((orderSlide) => {
        orderSlide.children[HTMLIndexDrawingOriginal].children[
          HTMLIndexPartOriginal
        ].style.backgroundColor = sliderManager.col.partDefault;

        orderSlide.children[HTMLIndexDrawing].children[
          HTMLIndexPart
        ].style.backgroundColor = sliderManager.col.currentColorPart;
      });

      
      // console.log(currentDrawing);
      helpers.updateSettingsCurSlide(drawManager.getPart());
      toolbox.selectedTool.drawn = false;
    }
  };

  this.createDefaultSlide = function (pos) {
    // console.log("are you created")

    let newSlide = createDiv();
    newSlide.parent("#" + pos);
    newSlide.addClass("defaultSlide");
    newSlide.elt.setAttribute(
      "style",
      `
                position: relative;
                min-width: 300px;
                height: 160px;
                overflow-y: hidden;
                margin:  0px;
                padding: 0px`
    );

    let mainTextElem = createP("SETTINGS FOR NEW PARTS");
    mainTextElem.parent(newSlide);
    mainTextElem.style("position", "absolute");
    mainTextElem.style("left", "0px");
    mainTextElem.style("top", "-12px");
      mainTextElem.elt.title = sliderManager.titleText.default;
    // console.log("mainTextElem", mainTextElem)

    let fillText = createP("Fill:");
    fillText.style("font-size", "20px");
    fillText.style("position", "absolute");
    fillText.style("left", "0px");
    fillText.style("top", "5px");
    fillText.parent(newSlide);
    fillText.elt.title = sliderManager.titleText.defaultFill;
    let inpColorFill = createColorPicker(drawManager.defaultPart.fill);
    // console.log();
    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
    inpColorFill.parent(newSlide);
    inpColorFill.elt.title = sliderManager.titleText.defaultFill;
    inpColorFill.input(() => {
      // console.log(inpColorFill.elt.value);
      // console.log(inpColorFill.elt.value);
      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;

      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[2].value = inpColorFill.elt.value;
        }
      }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      drawManager.defaultPart.fill = color(inpColorFill.elt.value);
    });
    // console.log(inpColorFill.elt.value);
    // console.log("inpColorFill", inpColorFill)

    // let noFillText = createP("noFill:");
    // noFillText.style("font-size", "20px")
    // noFillText.style("position", "absolute")
    // noFillText.style("left", "120px")
    // noFillText.style("top", "5px")
    // noFillText.parent(newSlide);
    let noFillBox = createCheckbox("noFill", drawManager.defaultPart.noFill);
    noFillBox.style("position", "absolute");
    noFillBox.style("left", "120px");
    noFillBox.style("top", "22px");
    noFillBox.parent(newSlide);
    noFillBox.elt.title =  sliderManager.titleText.defaultNoFill;
    noFillBox.changed(() => {
      // console.log(noFillBox.checked())

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;

      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[3].children[0].checked = noFillBox.checked();
        }
      }

      drawManager.defaultPart.noFill = noFillBox.checked();
    });

    let strokeText = createP("Stroke:");
    strokeText.style("font-size", "20px");
    strokeText.style("left", "0px");
    strokeText.style("top", "30px");
    strokeText.style("position", "absolute");
    strokeText.parent(newSlide);
    strokeText.elt.title = sliderManager.titleText.defaultStroke;

    let inpColorStroke = createColorPicker(drawManager.defaultPart.stroke);
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px");
    inpColorStroke.style("top", "50px");
    inpColorStroke.style("height", "20px");
    inpColorStroke.parent(newSlide);
    inpColorStroke.elt.title = sliderManager.titleText.defaultStroke;
    inpColorStroke.input(() => {
      // console.log(inpColorStroke.elt.value);
      // console.log(color(inpColorStroke.elt.value).levels);

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;

      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[5].value = inpColorStroke.elt.value;
        }
      }
      // console.log(elem[0].children[5], inpColorStroke.elt.value);

      drawManager.defaultPart.stroke = color(inpColorStroke.elt.value);
    });

    // let noStrokeText = createP("noStroke:");
    // noStrokeText.style("font-size", "20px");
    // noStrokeText.style("position", "absolute")
    // noStrokeText.style("left", "120px")
    // noStrokeText.style("top", "30px")
    // noStrokeText.parent(newSlide);
    let noStrokeBox = createCheckbox(
      "noStroke",
      drawManager.defaultPart.noStroke
    );
    noStrokeBox.style("position", "absolute");
    noStrokeBox.style("left", "120px");
    noStrokeBox.style("top", "45px");
    noStrokeBox.parent(newSlide);
    noStrokeBox.elt.title = sliderManager.titleText.defaultNoStroke;
    noStrokeBox.changed(() => {
      // console.log(noStrokeBox.checked());

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;

      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[6].children[0].checked = noStrokeBox.checked();
        }
      }

      drawManager.defaultPart.noStroke = noStrokeBox.checked();
    });

    let xText = createP("X");
    xText.style("position", "absolute");
    xText.style("right", "17px");
    xText.style("top", "-15px");
    xText.style("cursor", "pointer");
    xText.style("color", "#993030");
    xText.elt.title = sliderManager.titleText.generalX;
    xText.elt.onmouseover = function () {
      $(this).css({ color: "orange" });
    };
    xText.elt.onmouseout = function () {
      $(this).css({ color: "#993030" });
    };
    xText.mousePressed(function () {
      newSlide.remove();
    });
    xText.parent(newSlide);

    let buttonUp = createButton("&#x2191;");

    buttonUp.style("position", "absolute");
    buttonUp.style("right", "30px");
    buttonUp.style("top", "0px");

    buttonUp.style("width", "auto");
    buttonUp.elt.title = sliderManager.titleText.generalUp;
    // button.style("display", "inline");
    // button.style("top", "123px")
    buttonUp.parent(newSlide);
    buttonUp.mousePressed(moveSlideUp);

    // function moveSlideUp (){
    //   console.log("button and this",buttonUp,this);
    //   parent = buttonUp.elt.parentElement.parentElement;
    //   lenght = parent.children.length;
    //   console.log(parent, length)
    // }

    let button = createButton("&#x2193;");

    button.style("position", "absolute");
    button.style("right", "52px");
    button.style("top", "0px");

    button.style("width", "auto");
    button.elt.title = sliderManager.titleText.generalDown;
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.decreaseVertexArray();
    });

    // xText.style("float", "top")

    let sWText = createP("strokeWeight");
    sWText.style("position", "absolute");
    sWText.style("font-size", "15px");
    sWText.style("left", "0px");
    sWText.style("top", "60px");
    sWText.parent(newSlide);
    // console.log(drawManager.settings.maxStrokeWeight);
    let sWslider = createSlider(
      drawManager.settings.minStrokeWeight,
      drawManager.settings.maxStrokeWeight,
      drawManager.defaultPart.strokeWeight
    );
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px");
    sWslider.style("top", "75px");
    // console.log(sWslider.elt);
    sWslider.elt.onchange = () => {
      // console.log(sWslider)
      // console.log(sWslider.value());

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          elem[i].children[9].value = sWslider.elt.value;
          elem[i].children[10].value = sWslider.elt.value;
        }
      }
      // console.log(elem[0].children[9].value);
      // console.log(elem[0].children[10].value);

      drawManager.defaultPart.strokeWeight = parseInt(sWslider.elt.value);
      // sWInput.elt.value = drawManager.defaultPart.strokeWeight;
      // console.log(drawManager.defaultPart.strokeWeight);
    };

    sWslider.parent(newSlide);

    // console.log(drawManager.defaultPart.strokeWeight);
    let sWInput = createInput(
      drawManager.defaultPart.strokeWeight.toString(),
      "number"
    );
    sWInput.style("position", "absolute");
    sWInput.style("right", "20px");
    sWInput.style("width", "60px");
    sWInput.style("top", "75px");
    sWInput.parent(newSlide);
    sWInput.elt.onchange = () => {
      // console.log(sWslider.value());
      if (sWInput.elt.value > drawManager.settings.maxStrokeWeight) {
        sWInput.elt.value = drawManager.settings.maxStrokeWeight;
      } else if (sWInput.elt.value < drawManager.settings.minStrokeWeight) {
        sWInput.elt.value = drawManager.settings.minStrokeWeight;
      }

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          elem[i].children[10].value = sWInput.elt.value;
          elem[i].children[9].value = sWInput.elt.value;
        }
      }

      drawManager.defaultPart.strokeWeight = sWInput.elt.value;
      // console.log(sWInput.elt.value);
    };
    // console.log(sWInput);

    button;
    if (drawManager.defaultPart.endShape) {
      button = createButton("endShape(CLOSE)");
    } else {
      button = createButton("endShape()");
    }
    button.style("position", "absolute");
    button.style("right", "20px");
    button.style("width", "175px");
    button.style("top", "100px");
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button);
      drawManager.defaultPart.endShape = !drawManager.defaultPart.endShape;

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 0) {
        if (drawManager.defaultPart.endShape) {
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape(CLOSE)";
          }
        } else {
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape()";
          }
        }
      }
    });

    let sel = createSelect();
    sel.style("position", "absolute");
    sel.style("left", "0px");
    sel.style("width", "100px");
    sel.style("top", "100px");
    sel.option('""');
    sel.option("LINES");
    sel.option("POINTS");
    sel.option("TRIANGLES");
    sel.option("TRIANGLE_STRIP");
    sel.option("TRIANGLE_FAN");
    sel.option("QUADS");
    sel.option("TESS");
    sel.selected(drawManager.defaultPart.vertexMode);
    sel.changed(() => {
      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          // console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.defaultPart.vertexMode = sel.value();
    });
    
    sel.elt.options[0].title = sliderManager.titleText.generalSelDefault;
      sel.elt.options[1].title = sliderManager.titleText.generalSelLines;
      sel.elt.options[2].title = sliderManager.titleText.generalSelPoints;
      sel.elt.options[3].title = sliderManager.titleText.generalSelTriangles;
      sel.elt.options[4].title = sliderManager.titleText.generalSelTriangleStrip;
      sel.elt.options[5].title = sliderManager.titleText.generalSelTriangleFan;
      sel.elt.options[6].title = sliderManager.titleText.generalSelQuad;
      sel.elt.options[7].title = sliderManager.titleText.generalSelTess;
      
      sel.elt.title =   sliderManager.titleText.generalSelIntro+ "\n"+
                        sliderManager.titleText.generalSelLines+ "\n"+
                        sliderManager.titleText.generalSelPoints+ "\n"+
                        sliderManager.titleText.generalSelTriangles+ "\n"+
                        sliderManager.titleText.generalSelTriangleStrip+ "\n"+
                        sliderManager.titleText.generalSelTriangleFan+ "\n"+
                        sliderManager.titleText.generalSelQuad+ "\n"+
                        sliderManager.titleText.generalSelTess+ "\n"+
                        sliderManager.titleText.generalSelOutro;
    sel.parent(newSlide);

    // xText.style("float", "top")
  };

  this.createCurrentSlide = function (pos) {
    // console.log("are you created")

    let newSlide = createDiv();
    newSlide.parent("#" + pos);
    newSlide.addClass("currentSlide");
    newSlide.elt.setAttribute(
      "style",
      `
            position: relative;
            min-width: 300px;
            height: 160px;
            overflow-y: hidden;
            
            margin:  0px;
            padding: 0px`
    ); //  box-sizing: border-box;     overflow: hidden;
    // console.log(newSlide.elt.style);
    // newSlide.style("display", "flex")
    // newSlide.style("margin", "0px")
    // newSlide.style("padding", "0px")
    // newSlide.style("flex-direction", "row")
    let part = drawManager.getPart();
    let mainTextElem = createSpan("CURRENT: " + part.name);
    mainTextElem.parent(newSlide);
    mainTextElem.style("position", "absolute");
    mainTextElem.style("left", "0px");
    mainTextElem.style("top", "0px");
    mainTextElem.style("width", "270px");
    mainTextElem.style("overflow-x", "hidden");
    mainTextElem.elt.title = sliderManager.titleText.current;
    // mainTextElem.style("overflow-y", "auto");
    // mainTextElem.style("display", "inline");
    // mainTextElem.style("height", "22px");
    mainTextElem.style("text-align", "left");
    mainTextElem.style("white-space", "nowrap");

    // console.log("mainTextElem", mainTextElem)

    let fillText = createP("Fill:");
    fillText.style("font-size", "20px");
    fillText.style("position", "absolute");
    fillText.style("left", "0px");
    fillText.style("top", "5px");
    fillText.parent(newSlide);
    fillText.elt.title = sliderManager.titleText.currentFill;

    let inpColorFill = createColorPicker(part.fill);

    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
    inpColorFill.elt.title = sliderManager.titleText.currentFill;
    inpColorFill.input(() => {
      // console.log(inpColorFill.elt.value);
      // console.log(inpColorFill.elt.value);
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;

      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[2].value = inpColorFill.elt.value;
        }
      }
      // console.log(elem[0].children[2].value, inpColorFill.elt.value);
      drawManager.getPart().fill = color(inpColorFill.elt.value);
      
      toolbox.selectedTool.drawn = false;
    });
    inpColorFill.parent(newSlide);

    // console.log("inpColorFill", inpColorFill)
    // let noFillText = createP("noFill:");
    // noFillText.style("font-size", "20px");
    // noFillText.style("position", "absolute");
    // noFillText.style("left", "120px");
    // noFillText.style("top", "5px");
    // noFillText.parent(newSlide);
    let noFillBox = createCheckbox("noFill", part.noFill);
    noFillBox.style("position", "absolute");
    noFillBox.style("left", "120px");
    noFillBox.style("top", "22px");
    noFillBox.elt.title = sliderManager.titleText.currentNoFill;
    noFillBox.changed(() => {
      // console.log(noFillBox.checked())

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;

      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[3].children[0].checked = noFillBox.checked();
        }
      }

      drawManager.getPart().noFill = noFillBox.checked();
      toolbox.selectedTool.drawn = false;
    });
    noFillBox.parent(newSlide);

    let strokeText = createP("Stroke:");
    strokeText.style("font-size", "20px");
    strokeText.style("left", "0px");
    strokeText.style("top", "30px");
    strokeText.style("position", "absolute");
    strokeText.elt.title = sliderManager.titleText.currentStroke;
    strokeText.parent(newSlide);

    let inpColorStroke = createColorPicker(part.stroke);
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px");
    inpColorStroke.style("top", "50px");
    inpColorStroke.style("height", "20px");
    inpColorStroke.elt.title = sliderManager.titleText.currentStroke;
    inpColorStroke.input(() => {
      // console.log(inpColorStroke.elt.value);
      // console.log(color(inpColorStroke.elt.value).levels);

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;

      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[5].value = inpColorStroke.elt.value;
        }
      }
      // console.log(elem[0].children[5], inpColorStroke.elt.value);

      drawManager.getPart().stroke = color(inpColorStroke.elt.value);
      
      toolbox.selectedTool.drawn = false;
    });
    inpColorStroke.parent(newSlide);

    // let noStrokeText = createP("noStroke:");
    // noStrokeText.style("font-size", "20px");
    // noStrokeText.style("position", "absolute");
    // noStrokeText.style("left", "120px");
    // noStrokeText.style("top", "30px");
    // noStrokeText.parent(newSlide);
    let noStrokeBox = createCheckbox("noStroke", part.noStroke);
    noStrokeBox.style("position", "absolute");
    noStrokeBox.style("left", "120px");
    noStrokeBox.style("top", "45px");
    noStrokeBox.elt.title = sliderManager.titleText.currentNoStroke;
    noStrokeBox.changed(() => {
      // console.log(noStrokeBox.checked());

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;

      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[6].children[0].checked = noStrokeBox.checked();
        }
      }

      drawManager.getPart().noStroke = noStrokeBox.checked();
      toolbox.selectedTool.drawn = false;
    });
    noStrokeBox.parent(newSlide);

    let xText = createP("X");
    xText.style("position", "absolute");
    xText.style("right", "17px");
    xText.style("top", "-15px");
    xText.style("cursor", "pointer");
    xText.style("color", "#993030");
    xText.elt.title = sliderManager.titleText.generalX;
    xText.elt.onmouseover = function () {
      $(this).css({ color: "orange" });
    };
    xText.elt.onmouseout = function () {
      $(this).css({ color: "#993030" });
    };
    xText.mousePressed(function () {
      newSlide.remove();
    });
    xText.parent(newSlide);

    // xText.click(
    //   function() {
    //     $( this ).append( $( "<span> ***</span>" ) );
    //   }, function() {
    //     $( this ).find( "span" ).last().remove();
    //   }
    // );
    // xText.style("float", "top")

    let sWText = createP("strokeWeight");
    sWText.style("position", "absolute");
    sWText.style("font-size", "15px");
    sWText.style("left", "0px");
    sWText.style("top", "60px");
    sWText.elt.title =  sliderManager.titleText.currentStrokeWeight;
    sWText.parent(newSlide);

    let button = createButton("&#x2191;");

    button.style("position", "absolute");
    button.style("right", "30px");
    button.style("top", "0px");

    button.style("width", "auto");
    button.elt.title = sliderManager.titleText.generalUp;
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(moveSlideUp);

    button = createButton("&#x2193;");

    button.style("position", "absolute");
    button.style("right", "52px");
    button.style("top", "0px");

    button.style("width", "auto");
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.elt.title = sliderManager.titleText.generalDown;
    button.mousePressed(moveSlideDown);


    let sWslider = createSlider(
      drawManager.settings.minStrokeWeight,
      drawManager.settings.maxStrokeWeight,
      part.strokeWeight
    );
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px");
    sWslider.style("top", "75px");
    sWslider.elt.title = sliderManager.titleText.currentStrokeWeight;
    sWslider.elt.onchange = () => {
      // console.log(sWslider)
      // console.log(sWslider.value());

      if (sWslider.elt.value > drawManager.settings.maxStrokeWeight) {
        sWslider.elt.value = drawManager.settings.maxStrokeWeight;
      } else if (sWslider.elt.value < drawManager.settings.minStrokeWeight) {
        sWslider.elt.value = drawManager.settings.minStrokeWeight;
      }
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          elem[i].children[9].value = parseInt(sWslider.elt.value);
          elem[i].children[10].value = parseInt(sWslider.elt.value);
        }
      }
      // console.log(elem[0].children[9].value);
      // console.log(elem[0].children[10].value);

      if (toolbox.selectedTool.hasOwnProperty("updateSettings")) {
        // console.log("has own property: true");
        // console.log("selectedTool", toolbox.selectedTool)
        toolbox.selectedTool.updateSettings = true;
      }
      drawManager.getPart().strokeWeight = parseInt(sWslider.elt.value);
      
      toolbox.selectedTool.drawn = false;
      // console.log("sWslider.elt.value", sWslider.elt.value);
      // sWInput.elt.value = drawManager.defaultPart.strokeWeight;
      // console.log(drawManager.defaultPart.strokeWeight);
    };
    sWslider.parent(newSlide);

    let sWInput = createInput(part.strokeWeight.toString(), "number");
    sWInput.style("position", "absolute");
    sWInput.style("right", "20px");
    sWInput.style("width", "60px");
    sWInput.style("top", "75px");
    sWInput.elt.title = sliderManager.titleText.currentStrokeWeight;
    sWInput.elt.onchange = () => {
      // console.log(sWslider.value());
      // console.log(sWInput.elt.value);

      if (sWInput.elt.value > drawManager.settings.maxStrokeWeight) {
        sWInput.elt.value = drawManager.settings.maxStrokeWeight;
      } else if (sWInput.elt.value < drawManager.settings.minStrokeWeight) {
        sWInput.elt.value = drawManager.settings.minStrokeWeight;
      }
      // console.log(sWInput.elt.value);
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          elem[i].children[10].value = parseInt(sWInput.elt.value);
          elem[i].children[9].value = parseInt(sWInput.elt.value);
        }
      }

      drawManager.getPart().strokeWeight = parseInt(sWInput.elt.value);
      // console.log("sWInput.elt.value", sWInput.elt.value);
      

      toolbox.selectedTool.drawn = false;
    };
    sWInput.parent(newSlide);

    // let numberInput =
    // console.log("drawManager.settings",drawManager.settings);
    let buttonText;

    if (drawManager.defaultPart.endShape) {
      buttonText = "endShape(CLOSE)";
    } else {
      buttonText = "endShape()";
    }
    button = createButton(buttonText);
    button.style("position", "absolute");
    button.style("right", "20px");
    button.style("width", "175px");
    button.style("top", "100px");
    button.elt.title = sliderManager.titleText.generalEndShape;
    button.mousePressed(() => {
      // console.log(button)
      drawManager.getPart().endShape = !drawManager.getPart().endShape;

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0) {
        if (part.endShape) {
          // console.log("endShape true");
          // console.log("elem[0].children[11].innerText", elem[0].children);
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape(CLOSE)";
          }
        } else {
          // console.log("endShape false");
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape()";
          }
        }

        
        toolbox.selectedTool.drawn = false;
      }
    });
    button.parent(newSlide);

    let sel = createSelect();
    sel.style("position", "absolute");
    sel.style("left", "0px");
    sel.style("width", "100px");
    sel.style("top", "100px");
    sel.option('""');
    sel.option("LINES");
    sel.option("POINTS");
    sel.option("TRIANGLES");
    sel.option("TRIANGLE_STRIP");
    sel.option("TRIANGLE_FAN");
    sel.option("QUADS");
    sel.option("TESS");
    sel.selected(part.vertexMode);
    sel.changed(() => {
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          // console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.getPart().vertexMode = sel.value();
      toolbox.selectedTool.drawn = false;
    });
    sel.elt.options[0].title = sliderManager.titleText.generalSelDefault;
      sel.elt.options[1].title = sliderManager.titleText.generalSelLines;
      sel.elt.options[2].title = sliderManager.titleText.generalSelPoints;
      sel.elt.options[3].title = sliderManager.titleText.generalSelTriangles;
      sel.elt.options[4].title = sliderManager.titleText.generalSelTriangleStrip;
      sel.elt.options[5].title = sliderManager.titleText.generalSelTriangleFan;
      sel.elt.options[6].title = sliderManager.titleText.generalSelQuad;
      sel.elt.options[7].title = sliderManager.titleText.generalSelTess;
      
      sel.elt.title =   sliderManager.titleText.generalSelIntro+ "\n"+
                        sliderManager.titleText.generalSelLines+ "\n"+
                        sliderManager.titleText.generalSelPoints+ "\n"+
                        sliderManager.titleText.generalSelTriangles+ "\n"+
                        sliderManager.titleText.generalSelTriangleStrip+ "\n"+
                        sliderManager.titleText.generalSelTriangleFan+ "\n"+
                        sliderManager.titleText.generalSelQuad+ "\n"+
                        sliderManager.titleText.generalSelTess+ "\n"+
                        sliderManager.titleText.generalSelOutro;

    sel.parent(newSlide);
    
    let vText = createP("Verticies:");
    vText.style("position", "absolute");
    vText.style("left", "0px");
    vText.style("top", "110px");

    vText.parent(newSlide);

    // console.log("part", part)
    let vNumText = createP(part.currentVertex + "/" + part.vertexArray.length);
    vNumText.style("position", "absolute");
    vNumText.style("left", "65px");
    vNumText.style("top", "110px");
    vNumText.parent(newSlide);

    button = createButton("&#x21E4;");

    button.style("position", "absolute");
    button.style("left", "125px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.setVertexArrayToStart();
    });

    button = createButton("<");

    button.style("position", "absolute");
    button.style("left", "151px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.decreaseVertexArray();
    });
    button = createButton("D");
    button.elt.onmouseover = function () {
      $(this).css({ color: "orange" });
    };
    button.elt.onmouseout = function () {
      $(this).css({ color: "#993030" });
    };
    button.style("color", "#993030");
    button.style("position", "absolute");
    button.style("left", "174px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.elt.title = sliderManager.titleText.currentDeleteVertex;
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.deleteVertex();
    });
    button = createButton(">");

    button.style("position", "absolute");
    button.style("left", "198px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.increaseVertexArray();
    });
    button = createButton("&#x21E5;");

    button.style("position", "absolute");
    button.style("left", "220px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.mousePressed(() => {
      // console.log(button, this);

      helpers.setVertexArrayToEnd();
    });
  };

  function moveSlideUp (){
    // console.log("button and this",this);
    let parent = this.elt.parentElement.parentElement;
    let currentElement = this.elt.parentElement
    let length = parent.children.length;
    if (length <= 2)
    {
      return;
    }
    let element = null
    let index = 0
    let found = false;
    for (let i = 0; i < length; i++)
    {
      if (found)
      {
        element = parent.removeChild(parent.children[index]);
        parent.append(element);
      } else if (currentElement === parent.children[i])
      {
        if (i === 0)
        {return}
        index = i
        element = parent.removeChild(parent.children[i-1]);
        parent.append(element);
        found = true;
         
      }
    }
  
  }
  function moveSlideDown (){
    // console.log("button and this",this);
    let parent = this.elt.parentElement.parentElement;
    let currentElement = this.elt.parentElement
    let length = parent.children.length;
    if (length <= 2)
    {
      return;
    }
    let lastSlide = length-1;
    let element = null
    let index = 0
    let found = false;
    for (let i = 0; i < length; i++)
    {
      if (found)
      {
        element = parent.removeChild(parent.children[index]);
        parent.append(element);
      } else if (currentElement === parent.children[i])
      {
        if (i === lastSlide)
        {return}
        index = i+1
        element = parent.removeChild(parent.children[i]);
        parent.append(element);
        found = true;
         
      }
    }
  
  }

}
