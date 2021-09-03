// drawManager will containt all figures, drawings, parts and vertecies
// drawManger will manage the reseting and updates of advanced drawing methods
// drawManager will convert points into a vertex drawing

function DrawManager() {
  let myStorage = {
    figures: [],
    currentFigure: -1,
  };

  this.getMyStorage = () => {
    return myStorage;
  };

  this.getFigure = (index) => {
    if (index === undefined) {
      return myStorage.figures[myStorage.currentFigure];
    }
    // console.log("currentfigure in getFigure", myStorage , myStorage.figures[myStorage.currentFigure])
    return myStorage.figures[index];
  };

  this.getDrawing = (index) => {
    let get = myStorage.figures[myStorage.currentFigure];
    if (index === undefined) {
      return get.drawings[get.currentDrawing];
    }
    return get.drawings[index];
  };

  this.getPart = (index) => {
    let get = this.getDrawing();
    if (index === undefined) {
      // console.log("internal dM.getPart", get ,get.currentPart)
      return get.parts[get.currentPart];
    }

    return get.parts[index];
  };

  this.getVertexArray = () => {
    let get = this.getPart();
    // console.log("get from getVertexArray", get.vertexArray.length)
    return get.vertexArray;
  };

  // this.curretPart;
  this.defaultPart = {
    name: "partDefault",
    currentVertex: 0,
    stroke: color(0, 0, 0),
    noStroke: false,
    strokeWeight: 3,
    fill: color(120, 120, 120),
    noFill: false,
    vertexMode: "",
    endShape: true,

    //menu relate defaults
    showDetails: true,

    selected: false,
    draw: true,
  };
  this.defaultDrawing = {
    name: "drawingDefault",
    showDetails: true,
    zeroPoint: [0, 0],
    currentPart: 0,
    draw: true,
  };
  this.defaultPoints = {
    name: "point",
    type: "rotation",
    position: [width / 2, height / 2],
  };
  this.defaultFigure = {
    name: "newFigure",
    currentDrawing: 0,
  };
  this.drawModes = {
    NONE: "",
    LINES: "LINES",
    POINTS: "POINTS",
    TRIANGELS: "TRIANGLES",
    TRIANGLE_STRIP: "TRIANGLE_STRIP",
    TRIANGLE_FAN: "TRIANGLE_FAN",
    QUADS: "QUADS",
    QUAD_STRIP: "QUAD_STRIP",
    TESS: "TESS",
  };

  this.settings = {
    minStrokeWeight: 1,
    maxStrokeWeight: 50,

    minDragDistance: 5,
    maxDragDistance: 50,

    vertexPointsFactor: -2,
    vertexPoints: true,
    numberPoints: true,

    autoSave: true,
    lightMode: false,

    simpleTextForm: false,
    // MORE SETTINGS
    //Show number - number size -relative to stroke
    //
  };

  this.setup = function () {
    this.loadLocalStorage(myStorage);

    // this.setCurrentPartR(myStorage.currentFigure,this.getFigure().currentDrawing,this.getDrawing().currentPart);

    // console.log("storage", storage)
    // if (this.figures[0].drawings[0].parts[0].vertexArray.length >= 1)
    // {
    //     // this.draw(this.figures[0])
    // }
  };

  this.loadLocalStorage = () => {
    if (typeof Storage !== "undefined") {
      // console.log("local Storage OK")// Code for localStorage
      // console.log("helpers", helpers)// Code for localStorage
      // console.log("all the globals", helpers,drawManager, sliderManager )// Code for localStorage
      loadFiguesFromStorage();

      // helpers.loadSettingsFromStorage(this.settings);
    } else {
      alert("No web Storage support, your settings and work cannot be saved!"); // No web storage Support.
    }
  };

  let loadFiguesFromStorage = () => {
    let stored = window.localStorage.getItem("stored");

    if (stored) {
      // console.log("str",myStorage)
      // console.log("stored",JSON.parse(stored))
      myStorage = JSON.parse(stored);

      //The color elements where corrupted during the save process and need to be fixed
      myStorage.figures.forEach((figs) => {
        figs.drawings.forEach((draws) => {
          draws.parts.forEach((prt) => {
            prt.fill = color(...prt.fill.levels);
            prt.stroke = color(...prt.stroke.levels);
          });
        });
      });
      // console.log("myStorage after save", myStorage)
    } else {
      // console.log("str")
      myStorage.figures.push(new Figure("start"));
      myStorage.currentFigure++;
    }
  };

  this.saveFiguresToStorage = () => {
    // console.log("storage to be saved in helpers.saveFiguresFromStorage()", myStorage)
    // console.log(JSON.stringify(myStorage));
    window.localStorage.setItem("stored", JSON.stringify(myStorage));
  };

  this.setCurrentPartR = (partIndex, drawingIndex, figureIndex) => {
    let indicies = drawManager.getCurrentIndicies();
    let HTMLIndexPartOriginal = indicies[2] +sliderManager.HTMLIndecies.firstPart;
    let HTMLIndexDrawingOriginal =
      indicies[1] + sliderManager.HTMLIndecies.firstDrawing;

    console.log("setCurrentPart()",partIndex,drawingIndex, figureIndex)
    // console.log("HTMLIndexDrawingOriginal",HTMLIndexDrawingOriginal)
    if (figureIndex === undefined) {
      if (drawingIndex === undefined) {
        if (partIndex === undefined) {
          figureIndex = myStorage.currentFigure;
          drawingIndex = this.getFigure().currentDrawing;
          partIndex = this.getDrawing().currentPart;
        } else {
          figureIndex = myStorage.currentFigure;
          drawingIndex = this.getFigure().currentDrawing;
          this.getDrawing().currentPart = partIndex;
        }
      } else {
        figureIndex = myStorage.currentFigure;
        let figure = this.getFigure();
        figure.currentDrawing = drawingIndex;
        figure.drawings[drawingIndex].currentPart = partIndex;
        return; // console.log(figureIndex,drawingIndex,partIndex);
      }
    } else {
      myStorage.currentFigure = figureIndex;
      myStorage.figures[figureIndex].currentDrawing = drawingIndex;
      myStorage.figures[figureIndex].drawings[drawingIndex].currentPart =
        partIndex;
    }
    // console.log("setCurrentPart2()",partIndex,drawingIndex, figureIndex)
    // let elem = document.getElementsByClassName("order")
    let HTMLIndexDrawing =
      sliderManager.HTMLIndecies.firstDrawing + drawingIndex;
    let HTMLIndexPart = sliderManager.HTMLIndecies.firstPart + 2 * partIndex;

    // console.log("html draw part" ,HTMLIndexDrawing, HTMLIndexPart);

    // console.log("stuff form createNewPart", figureIndex,drawingIndex,partIndex)

    // console.log("part after creation", drawManager.getFigure(figureIndex).drawings[drawingIndex].parts[partIndex].name)

    let elem = document.getElementsByClassName("order");
    elem.forEach((orderSlide) => {
      
      let lengthHTMLParts =
        orderSlide.children[HTMLIndexDrawingOriginal].children.length;
      for (let i = sliderManager.HTMLIndecies.firstPart; i < lengthHTMLParts; i += 2) {
        orderSlide.children[HTMLIndexDrawingOriginal].children[
          i
        ].style.backgroundColor = sliderManager.col.partDefault;
      }

      let lengthHTMLDrawings = 
       orderSlide.children.length;
      for (let i = sliderManager.HTMLIndecies.firstDrawing; i < lengthHTMLDrawings;i++)
      {
        
        orderSlide.children[i].children[
          HTMLIndexPartOriginal
        ].style.backgroundColor = sliderManager.col.partDefault;
      }

      orderSlide.children[HTMLIndexDrawing].children[
        HTMLIndexPart
      ].style.backgroundColor = sliderManager.col.currentColorPart;

      // );
    });
  };

  function drawPart(part) {
    //MARK The code in this function was made before the start of this semester
    //by myself. It takes an array and the approprite setttings
    //and draws with p5 to screen
    strokeWeight(part.strokeWeight);
    if (!part.noFill) {
      fill(part.fill);
    } else {
      noFill();
    }
    if (!part.noStroke) {
      stroke(part.stroke);
    } else {
      noStroke();
    }

    if (part.vertexArray.length === 1) {
      beginShape(POINTS);
      createVertex(part.vertexArray[0]);
      endShape();
    } else {
      switch (part.vertexMode) {
        case "":
          beginShape();
          break;
        case "LINES":
          beginShape(LINES);
          break;
        case "POINTS":
          beginShape(POINTS);
          break;
        case "TRIANGLES":
          beginShape(TRIANGLES);
          break;
        case "TRIANGLE_STRIP":
          beginShape(TRIANGLE_STRIP);
          break;
        case "TRIANGLE_FAN":
          beginShape(TRIANGLE_FAN);
          break;
        case "QUADS":
          beginShape(QUADS);
          break;
        case "QUAD_STRIP":
          beginShape(QUAD_STRIP);
          break;
        case "TESS":
          beginShape(TESS);
          break;
        default:
          beginShape();
      }
      part.vertexArray.forEach(createVertex);
      if (part.endShape) {
        endShape(CLOSE);
      } else {
        endShape();
      }
    }

    function createVertex(item) {
      vertex(item[0], item[1]);
    }
  }

  this.manageCurrentPartsAfterDelete = (
    figureIndex,
    drawingIndex,
    partIndex
  ) => {
    // console.log("values from manageCurrentParts",figureIndex,drawingIndex,partIndex)
    let indicies = this.getCurrentIndicies();
    let drawing = myStorage.figures[figureIndex].drawings[drawingIndex];

    // let partsLength = drawing.parts.length;

    if (indicies[0] === figureIndex && indicies[1] === drawingIndex) {
      // console.log("")
      if (drawing.parts.length <= 1) {
        this.setCurrentPartR(0);
        helpers.updateSettingsCurSlide(this.getPart());
        return;
      } 
      else if (indicies[2] === 0)
      {
        this.setCurrentPartR(0);
        helpers.updateSettingsCurSlide(this.getPart());
        return
      } else if (partIndex <= indicies[2]) {
        this.setCurrentPartR(indicies[2] - 1);
        helpers.updateSettingsCurSlide(this.getPart());
      } else{
        this.setCurrentPartR()
      }

      
    } else {
      this.setCurrentPartR()
    }

    
  };


  this.manageCurrentDrawingsAfterDelete = (
    figureIndex,
    drawingIndex,
  ) => {
    console.log("values from manageCurrentdrawings",figureIndex,drawingIndex)
    let indicies = this.getCurrentIndicies();
    console.log("indicies",indicies)
    let figure = myStorage.figures[figureIndex];

    // let partsLength = drawing.parts.length;

    if (indicies[0] === figureIndex) {
      // console.log("")
      if (figure.drawings.length <= 1) {
        this.setCurrentPartR(0,0,figureIndex);
        helpers.updateSettingsCurSlide(this.getPart());
        return;
      } 
      else if (indicies[1] === 0)
      {
        this.setCurrentPartR(0,0,figureIndex);
        helpers.updateSettingsCurSlide(this.getPart());
        return
      } else if (drawingIndex <= indicies[1]) {
        this.setCurrentPartR(indicies[2], indicies[1] -1,indicies[0] );
        helpers.updateSettingsCurSlide(this.getPart());
      } else{
        this.setCurrentPartR()
      }

      
    } else {
      this.setCurrentPartR()
    }

    
  };

  this.isCurrentPart = (figureIndex, drawingIndex, partIndex) => {
    // let testFigureIndex

    let testFigureIndex = myStorage.currentFigure;
    let testDrawingIndex = myStorage.figures[testFigureIndex].currentDrawing;
    let testPartIndex =
      myStorage.figures[testFigureIndex].drawings[testDrawingIndex].currentPart;
    // console.log("Test the isCurrentPart", testFigureIndex, testDrawingIndex, testPartIndex)

    if (
      testFigureIndex === figureIndex &&
      testDrawingIndex === drawingIndex &&
      testPartIndex === partIndex
    ) {
      return true;
    } else {
      return false;
    }
  };

  this.getCurrentIndicies = () => {
    let figure = myStorage.figures[myStorage.currentFigure];
    let drawing = figure.drawings[figure.currentDrawing];
    return [
      myStorage.currentFigure,
      figure.currentDrawing,
      drawing.currentPart,
    ];
  };

  this.addPart = function (figureIndex, drawingIndex, partIndex) {
    // console.log("addpart",figureIndex,drawingIndex, partIndex);
    let drawing = myStorage.figures[figureIndex].drawings[drawingIndex];

    drawing.parts.splice(partIndex, 0, new Part());

    return drawing;
  };
  this.addDrawing = function (figureIndex, drawingIndex) {
    // console.log("addDrawing", figureIndex,drawingIndex)
    let figure = myStorage.figures[figureIndex];
    figure.drawings.splice(drawingIndex, 0, new Drawing());
    return figure;
  };
  this.getLengthOfParts = (figureIndex, drawingIndex) => {
    return myStorage.figures[figureIndex].drawings[drawingIndex].parts.length;
  };

  this.exchangeParts = (
    figureIndex,
    drawingIndex,
    partIndex,
    secondPartIndex
  ) => {
    let drawing = myStorage.figures[figureIndex].drawings[drawingIndex];
    let temp = drawing.parts[partIndex];
    drawing.parts[partIndex] = drawing.parts[secondPartIndex];
    drawing.parts[secondPartIndex] = temp;

    let indicies = this.getCurrentIndicies();
    console.log("indicies at exchangParts", indicies);
    if (
      (indicies[0] === figureIndex &&
        indicies[1] === drawingIndex &&
        indicies[2] === partIndex) ||
      indicies[2] === secondPartIndex
    ) {
      console.log("indicies[2] === partIndex", indicies[2] === partIndex);
      console.log(
        "indicies[2] === secondPartIndex",
        indicies[2] === secondPartIndex
      );
      if (indicies[2] === partIndex) {
        console.log(
          "exchangeParts giving ",
          secondPartIndex,
          " to setCurrentPart, instead of ",
          partIndex
        );
        this.setCurrentPartR(secondPartIndex);
      } else {
        this.setCurrentPartR(partIndex);
        console.log(
          "exchangeParts giving ",
          partIndex,
          "to setCurrentPart, instead of ",
          secondPartIndex
        );
      }
    }

    return drawing.parts.length;
    // console.log(drawing);
  };


  this.exchangeDrawings = (
    figureIndex,
    drawingIndex,
    secondDrawingIndex
  ) => {
    let figure = myStorage.figures[figureIndex];
    let temp = figure.drawings[drawingIndex];
    figure.drawings[drawingIndex] = figure.drawings[secondDrawingIndex];
    figure.drawings[secondDrawingIndex] = temp;

    let indicies = this.getCurrentIndicies();
    console.log("indicies at exchangParts", indicies);
    if (
      (indicies[0] === figureIndex &&
        indicies[1] === drawingIndex ||
        indicies[2] === secondDrawingIndex)
    ) {
      console.log("indicies[1] === drawingIndex", indicies[1] === drawingIndex);
      console.log(
        "indicies[1] === secondDrawingIndex",
        indicies[1] === secondDrawingIndex
      );
      if (indicies[1] === drawingIndex) {
        console.log(
          "exchangeParts giving ",
          secondDrawingIndex,
          " to setCurrentPart, instead of ",
          drawingIndex
        );
        this.setCurrentPartR(indicies[0], secondDrawingIndex, figureIndex);
      } else {
        this.setCurrentPartR(indicies[0], drawingIndex, figureIndex);
        console.log(
          "exchangeParts giving ",
          drawingIndex,
          "to setCurrentPart, instead of ",
          secondDrawingIndex
        );
      }
    }

    return figure.drawings.length;
    // console.log(drawing);
  };
  

  this.removePartFromStorage = function (figureIndex, drawingIndex, partIndex) {
    return myStorage.figures[figureIndex].drawings[drawingIndex].parts.splice(
      partIndex,
      1
    );
  };

  this.removeDrawingFromStorage = function (figureIndex, drawingIndex)
  {
    return myStorage.figures[figureIndex].drawings.splice(drawingIndex,1)
  }

  this.removeDrawing = function (figureIndex, drawingIndex) {
    return myStorage.figures[figureIndex].drawings.splice(drawingIndex, 1);
  };

  this.removefigure = function (figureIndex) {
    return myStorage.figures.splice(figureIndex, 1);
  };

  this.copyPart = function (figureName) {};

  this.copyDrawing = function (figureName) {};

  this.reDraw = function () {
    // clear screen
    // console.log("reset Run")
    clear();
    // redraw
    let figuresLength = myStorage.figures.length;
    for (let i = 0; i < figuresLength; i++) {
      this.draw(myStorage.figures[i]);
    }
  };

  this.reDrawWithPoint = () => {
    // background(200);
    clear();
    // let drawing = myStorage.figures[myStorage.currentFigure].drawings[myStorage.figures[myStorage.currentFigure].currentDrawing]
    // console.log(myStorage.currentFigure);
    // console.log(myStorage.figures[myStorage.currentFigure].currentDrawing);
    // console.log(drawing.currentPart);
    // redraw
    let figuresLength = myStorage.figures.length;
    for (let i = 0; i < figuresLength; i++) {
      this.draw(myStorage.figures[i]);
    }
    this.drawPoints();
  };

  this.draw = function (figure) {
    //check if it has a point!! before sending it to draw
    // console.log("drawManager.draw")
    drawingsLength = figure.drawings.length;

    for (let i = 0; i < drawingsLength; i++) {
      // console.log("i", i);
      let drawing = figure.drawings[i];
      let partsLength = drawing.parts.length;
      for (let j = 0; j < partsLength; j++) {
        let part = drawing.parts[j];
        // console.log("part", part);

        // console.log("vertexArray",vertexArray)
        if (part.draw) {
          drawPart(part);
        }
      }
    }
  };

  this.drawPoints = () => {
    let part = this.getPart();
    // console.log(part)
    if (part.vertexArray.length > 0 && part.draw) {
      push();
      if (drawManager.settings.vertexPoints) {
        stroke(invertColor(part.stroke));
        strokeWeight(
          max(part.strokeWeight + drawManager.settings.vertexPointsFactor, 6)
        );
        part.vertexArray.forEach((elem) => {
          point(elem[0], elem[1]);
        });

        if (drawManager.settings.numberPoints) {
          // stroke(part.stroke);
          // fill(invertColor(part.stroke));
          fill(part.stroke);
          noStroke();
          textAlign(CENTER, CENTER);
          textSize(
            max(part.strokeWeight + drawManager.settings.vertexPointsFactor, 6)
          );
          let counter = 0;
          part.vertexArray.forEach((elem) => {
            text(counter++, elem[0], elem[1] + 1); //The plus one corrects a small diaviation in height
          });
        }
      }

      //     if (part.currentVertex === 0)
      //     {
      //       point(part.vertexArray[part.currentVertex][0],
      //         part.vertexArray[part.currentVertex][1] );
      //     } else{
      //       point(part.vertexArray[part.currentVertex-1][0],
      //       part.vertexArray[part.currentVertex-1][1] );}

      // stroke(invertColor(part.stroke))
      //     strokeWeight(max(part.strokeWeight*2, 5))
      //     part.vertexArray.forEach(elem => {
      //       point(elem[0],
      //             elem[1]);

      //     });

      // stroke(part.stroke);
      // fill(invertColor(part.stroke));
      // textAlign(CENTER,CENTER)
      // textSize(max(part.strokeWeight*2, 5))

      // if (part.currentVertex === 0)
      // {
      //   text(part.currentVertex)
      // } else{
      // point(part.vertexArray[part.currentVertex-1][0],
      //       part.vertexArray[part.currentVertex-1][1] );}
      pop();
    }
  };

  return this;
}
