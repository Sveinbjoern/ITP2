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





    let mainTextElem = createP("DEFAULT SETTINGS");
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
      // console.log(inpColorFill.elt.value);
      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
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
    noFillBox.style("left", "120px")
    noFillBox.style("top", "22px")
    noFillBox.parent(newSlide);
    noFillBox.changed(() => {
      // console.log(noFillBox.checked())

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      
      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[3].children[0].checked = noFillBox.checked();
        }
      }


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

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
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
    let noStrokeBox = createCheckbox("noStroke", drawManager.defaultPart.noStroke);
    noStrokeBox.style("position", "absolute");
    noStrokeBox.style("left", "120px")
    noStrokeBox.style("top", "45px")
    noStrokeBox.parent(newSlide);
    noStrokeBox.changed(() => {
      console.log(noStrokeBox.checked())

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      
      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[6].children[0].checked = noStrokeBox.checked();
        }
      }


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
    // console.log(sWslider.elt);
    sWslider.elt.onchange = () => {
      // console.log(sWslider)
      // console.log(sWslider.value());
    
      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 0)
      {
        for (let i = 0; i< length; i++)
        {
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

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length;
      if (length > 0)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[10].value = sWInput.elt.value;
          elem[i].children[9].value = sWInput.elt.value;
        }
      }
      
      drawManager.defaultPart.strokeWeight = sWInput.elt.value;
      // console.log(sWInput.elt.value);
    };
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
      
      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length; 
      if (length > 0)
      {
      if (drawManager.defaultPart.endShape) {
        
          for (let i = 0; i < length; i++)
          {
          elem[i].children[11].innerText = "endShape(CLOSE)";
        }
      } else {
        for (let i = 0; i < length; i++)
        {
        elem[i].children[11].innerText = "endShape()";
        }
       }

    }});

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
    sel.changed( () =>  {

      let elem = document.getElementsByClassName("defaultSlide");
      let length = elem.length; 
      if (length > 1)
      {
        for (let i = 0; i < length; i++)
        {
          console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.defaultPart.vertexMode = sel.value()
      
    });
    // console.log(drawManager.defaultPart.vertexMode);
    sel.parent(newSlide);


   
    // xText.style("float", "top")
  }















  this.createCurrentSlide = function (pos) {
    // console.log("are you created")
    
    let newSlide = createDiv();
    newSlide.parent("#" + pos);
    newSlide.addClass("currentSlide");
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
      let part =  drawManager.getPart();
    let mainTextElem = createP("CURRENT PART: " + part.name);
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

    let inpColorFill = createColorPicker(part.fill);

    inpColorFill.style("left", "70px");
    inpColorFill.style("top", "25px");
    inpColorFill.style("position", "absolute");
    inpColorFill.style("height", "20px");
    inpColorFill.input( () => {
      // console.log(inpColorFill.elt.value);
      // console.log(inpColorFill.elt.value);
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[2].value = inpColorFill.elt.value;
        }
      }
      console.log(elem[0].children[2].value, inpColorFill.elt.value);
      drawManager.getPart().fill = color(inpColorFill.elt.value);
      drawManager.reset();
      toolbox.selectedTool.drawn = false
      
      

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
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[3].children[0].checked = noFillBox.checked();
        }
      }


      drawManager.getPart().noFill =  noFillBox.checked();
      drawManager.reset();
     
    } );
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
    inpColorStroke.input( () => {
      // console.log(inpColorStroke.elt.value);
      // console.log(color(inpColorStroke.elt.value).levels);

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[5].value = inpColorStroke.elt.value;
        }
      }
      console.log(elem[0].children[5], inpColorStroke.elt.value);
      

      drawManager.getPart().stroke = color(inpColorStroke.elt.value);
      drawManager.reset();
      toolbox.selectedTool.drawn = false
      
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
      console.log(noStrokeBox.checked())

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      
      // console.log(elem[0].children[3].children[0].checked, noFillBox.checked());
      if (length > 1)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[6].children[0].checked = noStrokeBox.checked();
        }
      }


      drawManager.getPart().noStroke =  noStrokeBox.checked();
      drawManager.reset();
      
       
    } );
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

    let sWslider = createSlider(
      drawManager.settings.minStrokeWeight,
      drawManager.settings.maxStrokeWeight,
      drawManager.defaultPart.strokeWeight);
    sWslider.style("position", "absolute");
    sWslider.style("left", "80px");
    sWslider.style("top", "75px");
    sWslider.elt.onchange = () => {
      // console.log(sWslider)
      // console.log(sWslider.value());
    
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[9].value = sWslider.elt.value;
          elem[i].children[10].value = sWslider.elt.value;
        }
      }
      // console.log(elem[0].children[9].value);
      // console.log(elem[0].children[10].value);
      
      if (toolbox.selectedTool.hasOwnProperty("updateSettings"))
      {
        // console.log("has own property: true");
        // console.log("selectedTool", toolbox.selectedTool)
        toolbox.selectedTool.updateSettings = true;
      }
      drawManager.getPart().strokeWeight = parseInt(sWslider.elt.value);
      drawManager.reset();
       toolbox.selectedTool.drawn = false
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
      if (sWInput.elt.value > drawManager.settings.maxStrokeWeight)
      {
        sWInput.elt.value = drawManager.settings.maxStrokeWeight;
      } else if (sWInput.elt.value < drawManager.settings.minStrokeWeight)
      {
        sWInput.elt.value = drawManager.settings.minStrokeWeight;
      }

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length;
      if (length > 0)
      {
        for (let i = 0; i< length; i++)
        {
          elem[i].children[10].value = sWInput.elt.value;
          elem[i].children[9].value = sWInput.elt.value;
        }
      }
      
      drawManager.getPart().strokeWeight = sWInput.elt.value;
      // console.log(sWInput.elt.value);
      drawManager.reset();
      
       toolbox.selectedTool.drawn = false
    };
    sWInput.parent(newSlide);
    
    // let numberInput =
    // console.log("drawManager.settings",drawManager.settings);
    let buttonText;

    if (drawManager.defaultPart.endShape)
    {
      buttonText = "endShape(CLOSE)";
    } else {
      buttonText = "endShape()";
    }
    let button = createButton(buttonText);
    button.style("position", "absolute");
    button.style("right", "20px");
    button.style("width", "175px");
    button.style("top", "100px");
    button.mousePressed( () => {
      // console.log(button)
      drawManager.getPart().endShape = !drawManager.getPart().endShape;
      
      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length; 
      if (length > 0)
      {
      if (part.endShape) {
        console.log("endShape true");
        console.log("elem[0].children[11].innerText", elem[0].children);
          for (let i = 0; i < length; i++)
          {
          elem[i].children[11].innerText = "endShape(CLOSE)";
        } 
      } else {
        console.log("endShape false");
        for (let i = 0; i < length; i++)
        {
        elem[i].children[11].innerText = "endShape()";
        }
       }

       drawManager.reset();
       toolbox.selectedTool.drawn = false
    }});
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
    sel.changed( () =>  {

      let elem = document.getElementsByClassName("currentSlide");
      let length = elem.length; 
      if (length > 1)
      {
        for (let i = 0; i < length; i++)
        {
          console.log(elem[i].children[12].value);
          elem[i].children[12].value = sel.value();
        }
      }
      drawManager.getPart().vertexMode = sel.value()
      drawManager.reset();

    });
    sel.parent(newSlide);

    let vText = createP("Vertecies:");
    vText.style("position", "absolute")
    vText.style("left", "0px")
    vText.style("top", "93px")
    vText.parent(newSlide);

    console.log("part", part)
    let vNumText = createP(part.currentVertex + "/" + part.vertexArray.length);
    vNumText.style("position", "absolute")
    vNumText.style("left", "100px")
    vNumText.style("top", "93px")
    vNumText.parent(newSlide);

  };

 
  
}
