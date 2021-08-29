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

      console.log(figure);

      let newSlide = createDiv();
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
      inp.identity = i;
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
      xText.elt.onmouseover = function(){
        $(this).css({ color: "orange"});
      };
      xText.elt.onmouseout = function(){
      $(this).css({ color: "#993030" });
      };
      xText.mousePressed(function () {
        newSlide.remove();
      });
      xText.parent(newSlide);

      // console.log("mainTextElem", mainTextElem)

      // for loop every drawing
      for (let j = 0; j < figure.drawings.length; j++) {
        let drawing = myStorage.figures[i].drawings[j];
        let newDrawing = createDiv();
        // newdrawing.addClass("order");
        newDrawing.parent(newSlide);
        newDrawing.elt.setAttribute(
          "style",
          `     display: inline-block;    
                font-size: 13px;
                position: relative;
                width: 287px;
                height: auto;
                background-color: rgb(19, 180, 192);
                margin-left:  10px;
                padding: 0px;
                
                text-align: left;
                
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
        inp.identity = j;
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
        button.mousePressed(() => {
          console.log(button, this);

          helpers.setVertexArrayToStart();
        });
        
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

        // let inpColorFill = createColorPicker(drawManager.defaultPart.fill);
        // // console.log();
        // inpColorFill.style("left", "70px")
        // inpColorFill.style("top", "25px")
        // inpColorFill.style("position", "absolute")
        // inpColorFill.style("height", "20px")
        // inpColorFill.parent(newSlide);
        // inpColorFill.input( () => {
        //   // console.log(inpColorFill.elt.value);
        //   // console.log(inpColorFill.elt.value);
        //   let elem = document.getElementsByClassName("defaultSlide");
        //   let length = elem.length;

        //   if (length > 1)
        //   {
        //     for (let i = 0; i< length; i++)
        //     {
        //       elem[i].children[2].value = inpColorFill.elt.value;
        //     }
        //   }
        //   console.log(elem[0].children[2].value, inpColorFill.elt.value);
        //   drawManager.defaultPart.fill = color(inpColorFill.elt.value);

        // });

        // slides.leftSidebar.push($('#orderBar')[0])

        // let button = createButton("create new part");
        // button.id("newPartButton");
        // button.parent(newSlide)
        // button.mousePressed(makeNewHTMLPart);

        // let figure = drawManager.getFigure();
        let currentDrawing = figure.drawings[figure.currentDrawing];

        // console.log(figure);
        // console.log("figure.drawings", figure.drawings)
        let partsLength = currentDrawing.parts.length;
        // console.log("partsLength", partsLength)
        // for (let i = 0; i < partsLength; i++)
        // {

        //     // let part = createDiv();
        //     // part.parent(pos);

        //     // //checkbox for isSelected: this is done with the standard javaScipt and jQuery
        //     // // because the p5 code creates an unecessary div container
        //     // let checkBox = document.createElement("INPUT");
        //     // checkBox.setAttribute("type", "checkbox");

        //     // part.elt.appendChild(checkBox);
        //     // $(checkBox).addClass( 'selectedBox');
        //     // checkBox.identity = i
        //     // // console.log("checkBox", checkBox)
        //     // // $(checkBox).change(helpers.isSelected(this));
        //     // checkBox.addEventListener('change', helpers.isSelected);
        //     // checkBox.
        //     // // console.log("part", part.elt)

        //     // // checkBox.parent(part);
        //     // // checkBox.addClass("selectedBox");
        //     // // checkBox.changed(helpers.isSelected);

        //     // //button for choosing currenfigure
        //     // button = createButton("part"+(i+1)+": ");
        //     // button.parent(part)
        //     // button.identity = i
        //     // // console.log("button", button)
        //     // button.mousePressed(choosePart);

        //     // // textField for naming the part
        //     // input_text = currentDrawing.parts[i].name
        //     // // console.log(i, input_text,currentDrawing)

        //     // let inp = createInput(input_text);
        //     // inp.parent(part)
        //     // inp.identity = i
        //     // // inp.position(0, 0);
        //     // // inp.size(100);
        //     // inp.input(partInputEvent);

        //     // console.log("orderBar", orderBar);
        //     // console.log("part",part)

        // }
      }
    }

    function drawingNameInputEvent() {
      console.log(this);
    }
    function figureNameInputEvent() {
      console.log(this);
      currentDrawing.parts[this.identity].name = this.elt.value;

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

    function partInputEvent() {
      console.log(this.elt.value);
      console.log(this.identity);

      currentDrawing.parts[this.identity].name = this.elt.value;

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

    function removeHTMLPart(part, index) {
      // TODO
    }

    function choosePart() {
      // console.log(this.identity);
      // console.log(self);

      // console.log(self.currentDrawing);
      currentDrawing.currentPart = this.identity;
      drawManager.reDrawWithPoint();
      console.log(currentDrawing);
      helpers.updateSettingsCurrentS(
        currentDrawing.parts[currentDrawing.currentPart]
      );
    }

    function makeNewHTMLPart() {
      // let part = createDiv("part"+(i+1)+": ");
      // part.parent(orderBar);
      console.log(this);
      let elem = document.getElementById("sidebarLeft");
      let partsLength = currentDrawing.parts.length;
      currentDrawing.parts.push(new Part("part" + (partsLength + 1)));

      let part = createDiv();
      part.parent(elem);

      let checkBox = document.createElement("INPUT");
      checkBox.setAttribute("type", "checkbox");

      part.elt.appendChild(checkBox);
      $(checkBox).addClass("selectedBox");
      checkBox.identity = partsLength;
      // $(checkBox).change(helpers.isSelected(this));
      checkBox.addEventListener("change", helpers.isSelected);
      // console.log("checkBox", checkBox)

      button = createButton("part" + (partsLength + 1) + ": ");
      button.parent(part);
      button.identity = partsLength;
      button.mousePressed(choosePart);

      input_text = currentDrawing.parts[partsLength].name;
      let inp = createInput(input_text);
      inp.parent(part);
      inp.identity = partsLength;
      // inp.position(0, 0);
      // inp.size(100);
      // console.log(inp.elt.value)
      inp.input(partInputEvent);
      currentDrawing.currentPart = partsLength;
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
    xText.elt.onmouseover = function(){
      $(this).css({ color: "orange"});
    };
    xText.elt.onmouseout = function(){
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
    xText.elt.onmouseover = function(){
      $(this).css({ color: "orange"});
    };
    xText.elt.onmouseout = function(){
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
