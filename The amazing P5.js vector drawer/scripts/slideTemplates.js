// Every configuration and option will be in a slide
//by default the slides are in the sidebarLeft or slidebarRight

function SlideTemplates() {
  this.createOrderSlide = function (pos) {
    // figuresLength = drawManager.figrues.length
    // for (let i = 0; i < figuresLength; i++)

    let myStorage = drawManager.getMyStorage();

    for (let i = 0; i < myStorage.figures.length; i++) {
      //For loop for all figure if display all figures

      let figure = myStorage.figures[i];

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

      let inp = createInput(figure.name);
      inp.style("margin", "0px 2px");
      inp.style("width", "106px");
      inp.style("display", "inline");
      inp.parent(newSlide);

      // // inp.position(0, 0);
      // // inp.size(100);
      inp.input(figureNameInputEvent);

      button = createButton("N");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.setVertexArrayToStart();
      });

      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.setVertexArrayToStart();
      });

      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.decreaseVertexArray();
      });

      button = createButton("D");

      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newSlide);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.deleteVertex();
      });

      let xText = createP("X");
      // xText.style("position", "absolute")
      // xText.style("right", "17px")
      // xText.style("top", "-12px")
      xText.style("margin", "0px");
      xText.style("display", "inline");
      xText.style("cursor", "pointer");
      xText.style("color", "#993030");
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
      // button.style("display", "inline");
      // button.style("top", "123px")
      buttonDis.parent(newSlide);
      // buttonDis.elt.onclick = (e) => {

      let selBox = createCheckbox("SELECT All", false);
      // noFillBox.style("position", "absolute");
      selBox.style("margin-left", "0px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
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
        drawManager.reDrawWithPoint();
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
      button.mousePressed(() => {
        console.log(button, this);

        helpers.setVertexArrayToStart();
      });

      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newDrawing);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.decreaseVertexArray();
      });

      button = createButton("D");

      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newDrawing);
      button.mousePressed(() => {
        console.log(button, this);

        helpers.deleteVertex();
      });

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

      buttonDis = createButton("Not Functional");
      // button.style("position", "absolute");
      // button.style("right", "30px");
      // if (!part.showDetails)
      // {
      //   buttonDis.style("color", "red");
      // }
      buttonDis.style("display", "inline");
      buttonDis.style("width", "auto");
      buttonDis.style("margin-left", "35px");
      // button.style("display", "inline");
      // button.style("top", "123px")
      buttonDis.parent(newDrawing);
      // buttonDis.elt.onclick = (e) => {

      let selBox = createCheckbox("SELECT All", false);
      // noFillBox.style("position", "absolute");
      selBox.style("margin-left", "0px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
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
        drawManager.reDrawWithPoint();
      });
      selBox.parent(newDrawing);

      for (let k = 0; k < drawing.parts.length; k++) {
        let part = drawing.parts[k];
        // newdrawing.addClass("order");

        createHTMLPart(part, newDrawing, k);
        //createNewPart()
      }
    }

    function createHTMLPart(part, newDrawing, k) {
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
      ); // display: flex;// // ;// justify-content: flex-start; // display: inline;flex-wrap: wrap;
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
      inp.input(drawingNameInputEvent);

      let button = createButton("C");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);
      button.mousePressed();

      button = createButton("N");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);
      button.mousePressed(createNewPart);

      button = createButton("&#x2191;");

      // button.style("position", "absolute");
      // button.style("left", "125px")
      button.style("width", "auto");
      // button.style("top", "123px")
      button.style("display", "inline");
      button.parent(newPart);
      button.mousePressed(moveUpPart);

      button = createButton("&#x2193;");

      // button.style("position", "absolute");
      // button.style("left", "151px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newPart);
      button.mousePressed(moveDownPart);

      button = createButton("D");

      // button.style("position", "absolute");
      // button.style("left", "174px")
      button.style("width", "auto");
      button.style("display", "inline");
      // button.style("top", "123px")
      button.parent(newPart);
      button.mousePressed(deletePart);

      let vText = createP("Vertecies:");
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

      let selBox = createCheckbox("SELECT", part.isSelected);
      // noFillBox.style("position", "absolute");
      selBox.style("margin-left", "30px"); // noFillBox.style("left", "120px");
      selBox.style("display", "inline");
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
        drawManager.reDrawWithPoint();
      });
      selBox.parent(newPart);

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
      buttonDis.elt.onclick = (e) => {
        if (part.showDetails) {
          buttonDis.style("color", "red");
          newPartInfo.elt.style.display = "none";
          part.showDetails = false;
        } else {
          buttonDis.style("color", "black");
          newPartInfo.elt.style.display = "inline-block";
          part.showDetails = true;
        }
      };

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
        newPartInfo.style.display = "none";
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

      let inpColorFill = createColorPicker(part.fill);
      inpColorFill.style("display", "inline");
      // inpColorFill.style("left", "70px");
      // inpColorFill.style("top", "25px");
      // inpColorFill.style("position", "absolute");
      // inpColorFill.style("height", "20px");
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
        drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
      });
      inpColorFill.parent(newPartInfo);

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
        drawManager.reDrawWithPoint();
      });
      noFillBox.parent(newPartInfo);

      let drawBox = createCheckbox("Draw this part", part.draw);
      // noFillBox.style("position", "absolute");
      // drawBox.style("float", "right" );// noFillBox.style("left", "120px");
      drawBox.style("margin-left", "30px");
      drawBox.style("display", "inline");
      drawBox.changed(() => {
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
        drawManager.reDrawWithPoint();
      });
      drawBox.parent(newPartInfo);

      linebreak = document.createElement("br");
      newPartInfo.elt.appendChild(linebreak);

      let strokeText = createP("Stroke:");
      // strokeText.style("font-size", "20px");
      // strokeText.style("left", "0px");
      // strokeText.style("top", "30px");
      // strokeText.style("position", "absolute");
      strokeText.style("display", "inline");
      strokeText.parent(newPartInfo);

      let inpColorStroke = createColorPicker(part.stroke);
      inpColorStroke.style("display", "inline");
      // inpColorStroke.style("position", "absolute");
      // inpColorStroke.style("left", "70px");
      // inpColorStroke.style("top", "50px");
      // inpColorStroke.style("height", "20px");
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
        console.log(elem[0].children[5], inpColorStroke.elt.value);

        drawManager.getPart().stroke = color(inpColorStroke.elt.value);
        drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
      });
      inpColorStroke.parent(newPartInfo);

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
      noStrokeBox.changed(() => {
        console.log(noStrokeBox.checked());

        let elem = document.getElementsByClassName("currentSlide");
        let length = elem.length;

        // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
        if (length > 1) {
          for (let i = 0; i < length; i++) {
            elem[i].children[6].children[0].checked = noStrokeBox.checked();
          }
        }

        drawManager.getPart().noStroke = noStrokeBox.checked();
        drawManager.reDrawWithPoint();
      });
      noStrokeBox.parent(newPartInfo);

      linebreak = document.createElement("br");
      newPartInfo.elt.appendChild(linebreak);
     

      let sWText = createP("strokeWeight");
      // sWText.style("position", "absolute");
      // sWText.style("font-size", "15px");
      // sWText.style("left", "0px");
      // sWText.style("top", "60px");
      sWText.style("display", "inline");
      sWText.parent(newPartInfo);

      //   helpers.decreaseVertexArray();
      // });
      let sWslider = createSlider(
        drawManager.settings.minStrokeWeight,
        drawManager.settings.maxStrokeWeight,
        drawManager.defaultPart.strokeWeight
      );
      // sWslider.style("position", "absolute");
      // sWslider.style("left", "80px");
      // sWslider.style("line-hight", "23px");
      sWslider.style("display", "inline");
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
        drawManager.reDrawWithPoint();
        toolbox.selectedTool.drawn = false;
        console.log("sWslider.elt.value", sWslider.elt.value);
        // sWInput.elt.value = drawManager.defaultPart.strokeWeight;
        // console.log(drawManager.defaultPart.strokeWeight);
      };
      sWslider.parent(newPartInfo);

      let sWInput = createInput(part.strokeWeight.toString(), "number");
      // sWInput.style("position", "absolute");
      // sWInput.style("right", "20px");
      sWInput.style("width", "53px");
      sWInput.style("display", "inline");
      // sWInput.style("top", "75px");
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
        console.log("sWInput.elt.value", sWInput.elt.value);
        drawManager.reDrawWithPoint();

        toolbox.selectedTool.drawn = false;
      };
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
      sel.changed(() => {
        let elem = document.getElementsByClassName("currentSlide");
        let length = elem.length;
        if (length > 1) {
          for (let i = 0; i < length; i++) {
            console.log(elem[i].children[12].value);
            elem[i].children[12].value = sel.value();
          }
        }
        drawManager.getPart().vertexMode = sel.value();
        drawManager.reDrawWithPoint();
      });
      sel.parent(newPartInfo);

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
      button.mousePressed(() => {
        // console.log(button)
        drawManager.getPart().endShape = !drawManager.getPart().endShape;

        let elem = document.getElementsByClassName("currentSlide");
        let length = elem.length;
        if (length > 0) {
          if (part.endShape) {
            console.log("endShape true");
            console.log("elem[0].children[11].innerText", elem[0].children);
            for (let i = 0; i < length; i++) {
              elem[i].children[11].innerText = "endShape(CLOSE)";
            }
          } else {
            console.log("endShape false");
            for (let i = 0; i < length; i++) {
              elem[i].children[11].innerText = "endShape()";
            }
          }

          drawManager.reDrawWithPoint();
          toolbox.selectedTool.drawn = false;
        }
      });
      button.parent(newPartInfo);

      // linebreak = document.createElement("br");
      // newPartInfo.elt.appendChild(linebreak);
    }

    function moveUpPart(){
      let figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;
      // exchange underlying part

      if (partIndex <= 0)
      {
        return;
      }
      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);

      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart =
        sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);
      let length = drawManager.exchangeParts(figureIndex,drawingIndex,partIndex, partIndex-1)

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
       
        helpers.moveHTMLUp(orderSlide.children[HTMLIndexDrawing], partIndex, HTMLIndexPart,2 ,length)
        
      });
      // parentHTML, index, HTMLIndex, diff, length
      
      //move HTML
      drawManager.reDrawWithPoint();
      toolbox.selectedTool.drawn = false;
      


    }
    function moveDownPart(){
      let figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;
      // exchange underlying part
      let length = drawManager.getLengthOfDrawing(figureIndex,drawingIndex);

      if (partIndex+1 >= length)
      {
        return;
      }
      // parentHTML = this.elt.parentElement.parentElement
      // console.log(parentHTML);
      drawManager.exchangeParts(figureIndex,drawingIndex,partIndex, partIndex+1);
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart =
        sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      // console.log("HTML INDICIES part drawing",HTMLIndexDrawing,HTMLIndexPart);
      

      let elem = document.getElementsByClassName("order");
      // console.log("correct parent elem?",elem[0].children[HTMLIndexDrawing]);
      elem.forEach((orderSlide) => {
       
        helpers.moveHTMLDown(orderSlide.children[HTMLIndexDrawing], partIndex, HTMLIndexPart,2 ,length)
        
      });
      // parentHTML, index, HTMLIndex, diff, length
      
      drawManager.reDrawWithPoint();
      toolbox.selectedTool.drawn = false;
     
      


    }

    function deletePart(){
      let figureIndex = this.elt.parentElement.parentElement.parentElement.identity;
      let drawingIndex = this.elt.parentElement.parentElement.identity;
      let partIndex = this.elt.parentElement.identity;
      // exchange underlying part

      let length = drawManager.getLengthOfDrawing(figureIndex,drawingIndex);
      console.log("deletePart() +length", figureIndex, drawingIndex, partIndex, length)

      
      let drawingLength = drawManager.getLengthOfDrawing(figureIndex,drawingIndex)

      let HTMLIndexDrawing =
      sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart =
      sliderManager.HTMLIndecies.firstPart + 2 * partIndex;
      
      drawManager.removePart(figureIndex,drawingIndex,partIndex);
      // console.log(drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[partIndex])
      let elem = document.getElementsByClassName("order");
            elem.forEach((orderSlide) => {
             
             
              helpers.deleteHTMLElement(
                orderSlide.children[HTMLIndexDrawing],
                partIndex,
                HTMLIndexPart,
                2,
                drawingLength-2
              );
            
            });
     
      if (drawManager.isCurrentPart(figureIndex,drawingIndex,partIndex))
      {
        drawManager.setCurrentPart(partIndex-1);
      }

      if (length <= 1)
            {
              createNewPart(figureIndex,drawingIndex,partIndex)
            }
      // drawManager.reDrawWithPoint();
      toolbox.selectedTool.drawn = false;
      
    }


    function createNewDrawing() {
      let figureIndex = this.elt.parentElement.parentElement.identity;
      // console.log("this",this)
      let drawingIndex = this.elt.parentElement.identity+1;

      let HTMLIndexDrawing =
      sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
   

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
        // console.log(
        //   "arguments to sortHTML",
        //   orderSlide.children[HTMLIndexDrawing],
        //   partIndex + 1,
        //   HTMLIndexPart,
        //   2,
        //   drawing.parts.length
        // );
        });
    }

    function createNewPart(figureIndex, drawingIndex, partIndex) {
      
      // figureI++; drawingI++,partI++
      // console.log("hope this works :D :D :D")
      if (figureIndex === undefined)
      {figureIndex = this.elt.parentElement.parentElement.parentElement.identity;}
      if (drawingIndex === undefined)
      {drawingIndex = this.elt.parentElement.parentElement.identity;}
      if (partIndex === undefined)
      {partIndex = this.elt.parentElement.identity;}
      
      // console.log("figureIndex", figureIndex,drawingIndex,partIndex)
      // console.log(figureIndex, drawingIndex, partIndex)
      // figureIndex++;drawingIndex++;partIndex++;
      let HTMLIndexDrawing =
        sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
      let HTMLIndexPart =
        sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

      let drawing = drawManager.addPart(figureIndex, drawingIndex, partIndex);

      let elem = document.getElementsByClassName("order");
      elem.forEach((orderSlide) => {
        // console.log("going once",
        // orderSlide.children[HTMLIndexDrawing].children[HTMLIndexPart]);
        // console.log(orderSlide.children[HTMLIndexDrawing].identity);
        // console.log(orderSlide.children[HTMLIndexDrawing])
        createHTMLPart(
          drawing.parts[partIndex],
          orderSlide.children[HTMLIndexDrawing],
          partIndex
        );
        helpers.insertHTMLElement(
          orderSlide.children[HTMLIndexDrawing],
          partIndex,
          HTMLIndexPart,
          2,
          drawing.parts.length
        );
        // console.log(
        //   "arguments to sortHTML",
        //   orderSlide.children[HTMLIndexDrawing],
        //   partIndex + 1,
        //   HTMLIndexPart,
        //   2,
        //   drawing.parts.length
        // );
      });

      // console.log(this.elt.parentElement);
      // element to add to: this.elt.parentElement.parentElement
    }

    

    function partInputEvent() {
      console.log(this.elt.value);
      console.log(this.elt.parentElement.identity);

      currentDrawing.parts[this.elt.parentElement.identity].name =
        this.elt.value;

      let elem = document.getElementsByClassName("order");
      console.log("order elem", elem);
      elem.forEach((element) => {
        console.log("order elemement", element);
      });
      elem = document.getElementsByClassName("currentSlide");
      console.log("currentSlider elem", elem);
      elem.forEach((element) => {
        console.log("current element", element.children[0].innerHTML);
        element.children[0].innerHTML = "CURRENT: " + this.elt.value;
      });
    }

    function drawingNameInputEvent() {
      console.log(this);
    }
    function figureNameInputEvent() {
      console.log(this);
      currentDrawing.parts[this.parentElement.identity].name = this.elt.value;

      let elem = document.getElementsByClassName("order");
      console.log("order elem", elem);
      elem.forEach((element) => {
        console.log("order elemement", element);
      });
      elem = document.getElementsByClassName("currentSlide");
      console.log("currentSlider elem", elem);
      elem.forEach((element) => {
        console.log("current element", element.children[0].innerHTML);
        element.children[0].innerHTML = "CURRENT: " + this.elt.value;
      });
    }

    function choosePart() {
      // console.log(this.identity);
      // console.log(self);

      // console.log(self.currentDrawing);
      currentDrawing.currentPart = this.elt.parentElement.identity;
      drawManager.reDrawWithPoint();
      console.log(currentDrawing);
      helpers.updateSettingsCurrentS(
        currentDrawing.parts[currentDrawing.currentPart]
      );
    
    };

  }

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
                
                margin:  0px;
                padding: 0px`
    );

    let mainTextElem = createP("SETTINGS FOR NEW PARTS");
    mainTextElem.parent(newSlide);
    mainTextElem.style("position", "absolute");
    mainTextElem.style("left", "0px");
    mainTextElem.style("top", "-12px");

    // console.log("mainTextElem", mainTextElem)

    let fillText = createP("Fill:");
    fillText.style("font-size", "20px");
    fillText.style("position", "absolute");
    fillText.style("left", "0px");
    fillText.style("top", "5px");
    fillText.parent(newSlide);

    let inpColorFill = createColorPicker(drawManager.defaultPart.fill);
    // console.log();
    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
    inpColorFill.parent(newSlide);
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
      console.log(elem[0].children[2].value, inpColorFill.elt.value);
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

    let inpColorStroke = createColorPicker(drawManager.defaultPart.stroke);
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px");
    inpColorStroke.style("top", "50px");
    inpColorStroke.style("height", "20px");
    inpColorStroke.parent(newSlide);
    inpColorStroke.input(() => {
      console.log(inpColorStroke.elt.value);
      console.log(color(inpColorStroke.elt.value).levels);

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;

      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[5].value = inpColorStroke.elt.value;
        }
      }
      console.log(elem[0].children[5], inpColorStroke.elt.value);

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
    noStrokeBox.changed(() => {
      console.log(noStrokeBox.checked());

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

    let button = createButton("&#x2191;");

    button.style("position", "absolute");
    button.style("right", "30px");
    button.style("top", "0px");

    button.style("width", "auto");
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(() => {
      console.log(button, this);

      helpers.setVertexArrayToStart();
    });

    button = createButton("&#x2193;");

    button.style("position", "absolute");
    button.style("right", "52px");
    button.style("top", "0px");

    button.style("width", "auto");
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(() => {
      console.log(button, this);

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
      console.log(button);
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
          console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.defaultPart.vertexMode = sel.value();
    });
    // console.log(drawManager.defaultPart.vertexMode);
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

    let inpColorFill = createColorPicker(part.fill);

    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
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
      console.log(elem[0].children[2].value, inpColorFill.elt.value);
      drawManager.getPart().fill = color(inpColorFill.elt.value);
      drawManager.reDrawWithPoint();
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
      drawManager.reDrawWithPoint();
    });
    noFillBox.parent(newSlide);

    let strokeText = createP("Stroke:");
    strokeText.style("font-size", "20px");
    strokeText.style("left", "0px");
    strokeText.style("top", "30px");
    strokeText.style("position", "absolute");
    strokeText.parent(newSlide);

    let inpColorStroke = createColorPicker(part.stroke);
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px");
    inpColorStroke.style("top", "50px");
    inpColorStroke.style("height", "20px");
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
      console.log(elem[0].children[5], inpColorStroke.elt.value);

      drawManager.getPart().stroke = color(inpColorStroke.elt.value);
      drawManager.reDrawWithPoint();
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
    noStrokeBox.changed(() => {
      console.log(noStrokeBox.checked());

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;

      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1) {
        for (let i = 0; i < length; i++) {
          elem[i].children[6].children[0].checked = noStrokeBox.checked();
        }
      }

      drawManager.getPart().noStroke = noStrokeBox.checked();
      drawManager.reDrawWithPoint();
    });
    noStrokeBox.parent(newSlide);

    let xText = createP("X");
    xText.style("position", "absolute");
    xText.style("right", "17px");
    xText.style("top", "-15px");
    xText.style("cursor", "pointer");
    xText.style("color", "#993030");
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
    sWText.parent(newSlide);

    let button = createButton("&#x2191;");

    button.style("position", "absolute");
    button.style("right", "30px");
    button.style("top", "0px");

    button.style("width", "auto");
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(() => {
      console.log(button, this);

      helpers.setVertexArrayToStart();
    });

    button = createButton("&#x2193;");

    button.style("position", "absolute");
    button.style("right", "52px");
    button.style("top", "0px");

    button.style("width", "auto");
    // button.style("display", "inline");
    // button.style("top", "123px")
    button.parent(newSlide);
    button.mousePressed(() => {
      console.log(button, this);

      helpers.decreaseVertexArray();
    });
    let sWslider = createSlider(
      drawManager.settings.minStrokeWeight,
      drawManager.settings.maxStrokeWeight,
      drawManager.defaultPart.strokeWeight
    );
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px");
    sWslider.style("top", "75px");
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
      drawManager.reDrawWithPoint();
      toolbox.selectedTool.drawn = false;
      console.log("sWslider.elt.value", sWslider.elt.value);
      // sWInput.elt.value = drawManager.defaultPart.strokeWeight;
      // console.log(drawManager.defaultPart.strokeWeight);
    };
    sWslider.parent(newSlide);

    let sWInput = createInput(part.strokeWeight.toString(), "number");
    sWInput.style("position", "absolute");
    sWInput.style("right", "20px");
    sWInput.style("width", "60px");
    sWInput.style("top", "75px");
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
      console.log("sWInput.elt.value", sWInput.elt.value);
      drawManager.reDrawWithPoint();

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
    button.mousePressed(() => {
      // console.log(button)
      drawManager.getPart().endShape = !drawManager.getPart().endShape;

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0) {
        if (part.endShape) {
          console.log("endShape true");
          console.log("elem[0].children[11].innerText", elem[0].children);
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape(CLOSE)";
          }
        } else {
          console.log("endShape false");
          for (let i = 0; i < length; i++) {
            elem[i].children[11].innerText = "endShape()";
          }
        }

        drawManager.reDrawWithPoint();
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
          console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.getPart().vertexMode = sel.value();
      drawManager.reDrawWithPoint();
    });
    sel.parent(newSlide);

    let vText = createP("Vertecies:");
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
      console.log(button, this);

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
      console.log(button, this);

      helpers.decreaseVertexArray();
    });
    button = createButton("D");

    button.style("position", "absolute");
    button.style("left", "174px");
    button.style("width", "auto");
    button.style("top", "123px");
    button.style("line-height", "16px");
    button.parent(newSlide);
    button.mousePressed(() => {
      console.log(button, this);

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
      console.log(button, this);

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
      console.log(button, this);

      helpers.setVertexArrayToEnd();
    });
  };

}
