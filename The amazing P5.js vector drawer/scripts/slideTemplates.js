// Every configuration and option will be in a slide
//by default the slides are in the sidebarLeft or slidebarRight

function SlideTemplates() {

  this.createDefaultSlide = function (pos) {
    // console.log("are you created")


    let newSlide = createDiv();
    newSlide.parent("#" + pos);
    newSlide.addClass("defaultSlide");
    newSlide.elt.setAttribute("style",
      `
                position: relative;
                width: 300px;
                height: 160px;
                
                margin:  0px;
                padding: 0px`
    );





    let mainTextElem = createP("DEFAULT");
    mainTextElem.parent(newSlide);
    mainTextElem.style("position", "absolute");
    mainTextElem.style("left", "0px")
    mainTextElem.style("top", "-25px")
    // console.log("mainTextElem", mainTextElem)

    let fillText = createP("Fill:");
    fillText.style("font-size", "20px")
    fillText.style("position", "absolute")
    fillText.style("left", "0px")
    fillText.style("top", "5px")
    fillText.parent(newSlide);



    let inpColorFill = createColorPicker(drawManager.defaultPart.fill);
    // console.log();
    inpColorFill.style("left", "70px")
    inpColorFill.style("top", "25px")
    inpColorFill.style("position", "absolute")
    inpColorFill.style("height", "20px")
    inpColorFill.parent(newSlide);
    inpColorFill.input( () => {
      // console.log(inpColorFill.elt.value);
      console.log(inpColorFill.elt.value);
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
    noFillBox.style("left", "120px")
    noFillBox.style("top", "22px")
    noFillBox.parent(newSlide);
    noFillBox.changed(() => {
      console.log(noFillBox.checked())
      drawManager.defaultPart.noFill =  noFillBox.checked();
    } );


    let strokeText = createP("Stroke:");
    strokeText.style("font-size", "20px")
    strokeText.style("left", "0px")
    strokeText.style("top", "30px")
    strokeText.style("position", "absolute")
    strokeText.parent(newSlide);

    let inpColorStroke = createColorPicker(drawManager.defaultPart.stroke);
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px")
    inpColorStroke.style("top", "50px")
    inpColorStroke.style("height", "20px")
    inpColorStroke.parent(newSlide);
    inpColorStroke.input( () => {
      console.log(inpColorStroke.elt.value);
      console.log(color(inpColorStroke.elt.value).levels);
      drawManager.defaultPart.stroke = color(inpColorStroke.elt.value);

    });

    // let noStrokeText = createP("noStroke:");
    // noStrokeText.style("font-size", "20px");
    // noStrokeText.style("position", "absolute")
    // noStrokeText.style("left", "120px")
    // noStrokeText.style("top", "30px")
    // noStrokeText.parent(newSlide);
    let noStrokeBox = createCheckbox("noStroke", drawManager.defaultPart.noStroke);
    noStrokeBox.style("position", "absolute");
    noStrokeBox.style("left", "120px")
    noStrokeBox.style("top", "45px")
    noStrokeBox.parent(newSlide);
    noStrokeBox.changed(() => {
      console.log(noStrokeBox.checked())
      drawManager.defaultPart.noStroke =  noStrokeBox.checked();
    } );

    let xText = createP("X");
    xText.style("position", "absolute")
    xText.style("right", "17px")
    xText.style("top", "-25px")
    xText.parent(newSlide);
    // xText.style("float", "top")


    let sWText = createP("strokeWeight");
    sWText.style("position", "absolute");
    sWText.style("font-size", "15px");
    sWText.style("left", "0px")
    sWText.style("top", "60px")
    sWText.parent(newSlide);
    // console.log(drawManager.settings.maxStrokeWeight);
    let sWslider = createSlider(
      drawManager.settings.minStrokeWeight,
      drawManager.settings.maxStrokeWeight,
      drawManager.defaultPart.strokeWeight);
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px")
    sWslider.style("top", "75px")
    console.log(sWslider.elt);
    sWslider.elt.onchange = () => {
      // console.log(sWslider)
      // console.log(sWslider.value());
    
      drawManager.defaultPart.strokeWeight = parseInt(sWslider.elt.value);
      sWInput.elt.value = drawManager.defaultPart.strokeWeight;
      console.log(drawManager.defaultPart.strokeWeight);
    };

    sWslider.parent(newSlide);

    // console.log(drawManager.defaultPart.strokeWeight);
    let sWInput = createInput(drawManager.defaultPart.strokeWeight.toString(), "number");
    sWInput.style("position", "absolute");
    sWInput.style("right", "20px")
    sWInput.style("width", "60px")
    sWInput.style("top", "75px")
    sWInput.parent(newSlide);
    sWInput.elt.onchange = () => {
      // console.log(sWslider.value());
      if (sWInput.elt.value > drawManager.settings.maxStrokeWeight)
      {
        sWInput.elt.value = drawManager.settings.maxStrokeWeight;
      } else if (sWInput.elt.value < drawManager.settings.minStrokeWeight)
      {
        sWInput.elt.value = drawManager.settings.minStrokeWeight;
      }
      drawManager.defaultPart.strokeWeight = sWInput.elt.value;
      sWslider.elt.value = sWInput.elt.value;
      // console.log(sWInput.elt.value);
    };
    sWInput.elt.max = drawManager.settings.maxStrokeWeight;
    sWInput.elt.min = drawManager.settings.minStrokeWeight;

    // console.log(sWInput);


    let button;
    if (drawManager.defaultPart.endShape) {
      button = createButton("endShape(CLOSE)");
    } else {
      button = createButton("endShape()");
    }
    button.style("position", "absolute");
    button.style("right", "20px")
    button.style("width", "175px")
    button.style("top", "100px")
    button.parent(newSlide);
    button.mousePressed( () => {
      console.log(button)
      drawManager.defaultPart.endShape = !drawManager.defaultPart.endShape
      if (drawManager.defaultPart.endShape) {
        button.elt.innerText = "endShape(CLOSE)";
      } else {
        button.elt.innerText = "endShape()";
      }
    });

    let sel = createSelect();
    sel.style("position", "absolute");
    sel.style("left", "0px")
    sel.style("width", "100px")
    sel.style("top", "100px")
    sel.option('""');
    sel.option('LINES');
    sel.option('POINTS');
    sel.option('TRIANGLES');
    sel.option('TRIANGLE_STRIP');
    sel.option('TRIANGLE_FAN');
    sel.option('QUADS');
    sel.option('TESS');
    sel.selected(drawManager.defaultPart.vertexMode);
    // console.log(drawManager.defaultPart.vertexMode);
    sel.parent(newSlide);
  }

  this.createColorSlide = function (pos) {
    // console.log("are you created")
    let newSlide = createDiv();
    newSlide.parent("#" + pos);
    newSlide.addClass("colorSlide");
    newSlide.elt.setAttribute(
      "style",
      `
            position: relative;
            width: 300px;
            height: 160px;
            
            margin:  0px;
            padding: 0px`
    ); //  box-sizing: border-box;     overflow: hidden;
    // console.log(newSlide.elt.style);
    // newSlide.style("display", "flex")
    // newSlide.style("margin", "0px")
    // newSlide.style("padding", "0px")
    // newSlide.style("flex-direction", "row")

    let mainTextElem = createP("COLORS");
    mainTextElem.parent(newSlide);
    mainTextElem.style("position", "absolute");
    mainTextElem.style("left", "0px");
    mainTextElem.style("top", "-25px");
    // console.log("mainTextElem", mainTextElem)

    let fillText = createP("Fill:");
    fillText.style("font-size", "20px");
    fillText.style("position", "absolute");
    fillText.style("left", "0px");
    fillText.style("top", "5px");
    fillText.parent(newSlide);

    let inpColorFill = createColorPicker("Fill:");

    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
    inpColorFill.parent(newSlide);
    // console.log("inpColorFill", inpColorFill)
    let noFillText = createP("noFill:");
    noFillText.style("font-size", "20px");
    noFillText.style("position", "absolute");
    noFillText.style("left", "120px");
    noFillText.style("top", "5px");
    noFillText.parent(newSlide);
    let noFillBox = createCheckbox();
    noFillBox.style("position", "absolute");
    noFillBox.style("left", "195px");
    noFillBox.style("top", "22px");
    noFillBox.parent(newSlide);

    let strokeText = createP("Stroke:");
    strokeText.style("font-size", "20px");
    strokeText.style("left", "0px");
    strokeText.style("top", "30px");
    strokeText.style("position", "absolute");
    strokeText.parent(newSlide);

    let inpColorStroke = createColorPicker("Stroke:");
    inpColorStroke.style("position", "absolute");
    inpColorStroke.style("left", "70px");
    inpColorStroke.style("top", "50px");
    inpColorStroke.style("height", "20px");
    inpColorStroke.parent(newSlide);

    let noStrokeText = createP("noStroke:");
    noStrokeText.style("font-size", "20px");
    noStrokeText.style("position", "absolute");
    noStrokeText.style("left", "120px");
    noStrokeText.style("top", "30px");
    noStrokeText.parent(newSlide);
    let noStrokeBox = createCheckbox();
    noStrokeBox.style("position", "absolute");
    noStrokeBox.style("left", "195px");
    noStrokeBox.style("top", "45px");
    noStrokeBox.parent(newSlide);

    let xText = createP("X");
    xText.style("position", "absolute");
    xText.style("right", "17px");
    xText.style("top", "-25px");
    xText.parent(newSlide);
    // xText.style("float", "top")

    let sWText = createP("strokeWeight");
    sWText.style("position", "absolute");
    sWText.style("font-size", "15px");
    sWText.style("left", "0px");
    sWText.style("top", "60px");
    sWText.parent(newSlide);

    let sWslider = createSlider(1, 100, 2);
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px");
    sWslider.style("top", "75px");
    sWslider.parent(newSlide);

    let sWInput = createInput();
    sWInput.style("position", "absolute");
    sWInput.style("right", "20px");
    sWInput.style("width", "60px");
    sWInput.style("top", "75px");
    sWInput.parent(newSlide);
    // let numberInput =

    let button = createButton("endShape()");
    button.style("position", "absolute");
    button.style("right", "20px");
    button.style("width", "175px");
    button.style("top", "100px");
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
    sel.selected('""');
    sel.parent(newSlide);

  };



  
}
