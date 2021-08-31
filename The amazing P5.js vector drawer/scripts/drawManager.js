// drawManager will containt all figures, drawings, parts and vertecies
// drawManger will manage the reseting and updates of advanced drawing methods
// drawManager will convert points into a vertex drawing

function DrawManager() {
  let myStorage = 
  {
    figures: [],
    currentFigure: -1,
  }

  this.getMyStorage = () =>{
    return myStorage
  }

  this.getFigure = (index) => {
    if (index)
    {
      return myStorage.figures[index];
    }
    // console.log("currentfigure in getFigure", myStorage , myStorage.figures[myStorage.currentFigure])
    return myStorage.figures[myStorage.currentFigure];
  };

  this.getDrawing = (index) => {
    let get = myStorage.figures[myStorage.currentFigure];
    if (index)
    {
      return get.drawings[index];
    }
    return get.drawings[get.currentDrawing];
  };

  this.getPart = (index) => {
    let get = myStorage.figures[myStorage.currentFigure].drawings[myStorage.figures[myStorage.currentFigure].currentDrawing];
    if (index)
    {
      return get.parts[index];
    }
    return get.parts[get.currentPart];
  };

  this.getVertexArray = () => {
    let get = this.getPart();
    // console.log("get from getVertexArray", get.vertexArray.length)
    return get.vertexArray;
  };
  


  // this.curretPart;
  this.defaultPart = 
  {
    name: "partDefault",
    currentVertex: 0,
    stroke: color(0,0,0),
    noStroke: false,
    strokeWeight: 3,
    fill: color(120,120,120),
    noFill: false,
    vertexMode: "",
    endShape: true,

    //menu relate defaults
    showDetails: true,

    selected: false,
    draw: true,
  };
  this.defaultDrawing = 
  {
    name: "drawingDefault",
    zeroPoint: [0,0],
    currentPart: 0,
    
  };
  this.defaultPoints =
  {
    name: "point",
    type: "rotation",
    position: [width/2,height/2], 
    
  }
  this.defaultFigure = 
  {
    name: "newFigure",
    currentDrawing: 0,
  };
  this.drawModes = 
  {
    NONE: "",
    LINES: "LINES",
    POINTS: "POINTS",
    TRIANGELS: "TRIANGLES",
    TRIANGLE_STRIP: "TRIANGLE_STRIP",
    TRIANGLE_FAN: "TRIANGLE_FAN",
    QUADS: "QUADS",
    QUAD_STRIP: "QUAD_STRIP",
    TESS: "TESS",
  }


  this.settings =
  {
    minStrokeWeight: 1,
    maxStrokeWeight: 50,
    
    minDragDistance: 5,
    maxDragDistance: 50,

    vertexPointsFactor: 5,
    vertexPoints: true,
    numberPoints: true,

    autoSave: true,
    lightMode: false,

    simpleTextForm: false,
    // MORE SETTINGS
    //Show number - number size -relative to stroke
    //
  }


 

  this.setup = function () {
    
    
    this.loadLocalStorage(myStorage);
    
    

    // console.log("storage", storage)
    // if (this.figures[0].drawings[0].parts[0].vertexArray.length >= 1)
    // {
    //     // this.draw(this.figures[0])
    // }


    


  };

  

  this.loadLocalStorage = () => {
    if (typeof(Storage) !== "undefined") {
      // console.log("local Storage OK")// Code for localStorage
      // console.log("helpers", helpers)// Code for localStorage
      // console.log("all the globals", helpers,drawManager, sliderManager )// Code for localStorage
      loadFiguesFromStorage();
      
      
      
      // helpers.loadSettingsFromStorage(this.settings);
      
      
    } else {
      
      alert("No web Storage support, your settings and work cannot be saved!")// No web storage Support.

    }
  }

  let loadFiguesFromStorage = () =>
    {
        let stored = window.localStorage.getItem("stored")
      
      if (stored)
        {

          // console.log("str",myStorage)
          // console.log("stored",JSON.parse(stored))
          myStorage = JSON.parse(stored);
          
          //The color elements where corrupted during the save process and need to be fixed
          myStorage.figures.forEach( (figs) =>
            {
              figs.drawings.forEach( (draws) =>{
                draws.parts.forEach( (prt) => {
                  prt.fill = color(...prt.fill.levels);
                  prt.stroke = color(...prt.stroke.levels);
                })
              })
            }
          )
          // console.log("myStorage after save", myStorage)
  
        }  else
        {
            // console.log("str")
            myStorage.figures.push(new Figure("start"));
            myStorage.currentFigure ++;
          
        }
    }

    this.saveFiguresToStorage = () =>
    {
        
        // console.log("storage to be saved in helpers.saveFiguresFromStorage()", myStorage)
        // console.log(JSON.stringify(myStorage));
        window.localStorage.setItem("stored", JSON.stringify(myStorage))
    }

  this.draw = function (figure) {
    //check if it has a point!! before sending it to draw
    // console.log("drawManager.draw")
    drawings = figure.drawings.length;
    
    for (let i = 0; i < drawings; i++) {
      // console.log("i", i);
      let drawing = figure.drawings[i];
      let parts = drawing.parts.length;
      for (let j = 0; j < parts; j++) {
        let part = drawing.parts[j];
        // console.log("part", part);
        
        // console.log("vertexArray",vertexArray)
        
          drawPart(part)
         
        
      }
    }

    
  };


  this.setCurrentPart = (partIndex, drawingIndex, figureIndex) =>{
    if (figureIndex)
    {
      myStorage.currentFigure = figureIndex;
      myStorage.figures[figureIndex].currentDrawing =  drawingIndex;
      myStorage.figures[figureIndex].drawings[drawingIndex].currentPart = partIndex;
      return;
    } else if (drawingIndex)
    {
      let figure = this.getFigure()
      figure.currentDrawing = drawingIndex;
      figure.drawings[drawingIndex] = partIndex;
      return;
    }
    
    if (partIndex < 0)
    {partIndex = 0}
    this.getDrawing().currentPart = partIndex
  }

  function drawPart(part){
    
    
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
                console.log("Error in DrawSoftVertecies");
                
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

  function isCurrentPart(figureIndex, drawingIndex, partIndex){
    // let testFigureIndex 
    
    let testFigureIndex = myStorage.currentFigure;
    let testDrawingIndex = myStorage.figures[testFigureIndex].currentDrawing;
    let testPartIndex = myStorage.figures[testFigureIndex].drawings[testDrawingIndex].currentPart;
    console.log("Test the isCurrentPart", testFigureIndex, testDrawingIndex, testPartIndex)

    if (
      testFigureIndex === figureIndex &&
      testDrawingIndex === drawingIndex &&
      testPartIndex === partIndex
    ) {return true;} else {return false;}
  }

  this.addPart = function(figureIndex, drawingIndex, partIndex){
    console.log("addpart",figureIndex,drawingIndex, partIndex);
    let drawing = myStorage.figures[figureIndex].drawings[drawingIndex];
    partIndex++;
    drawing.parts.splice(partIndex, 0, new Part);
    drawing.currentPart = partIndex;
    return drawing;
  }
  this.addDrawing = function (figureIndex, drawingIndex){
    // console.log("addDrawing", figureIndex,drawingIndex)
    let figure = myStorage.figures[figureIndex]
    figure.drawings.splice(drawingIndex, 0, new Drawing);
    figure.currentDrawing = drawingIndex;
    return figure;
  }
  this.getLengthOfDrawing = (figureIndex,drawingIndex) =>
  {
    return myStorage.figures[figureIndex].drawings[drawingIndex].parts.length;
  }

  this.exchangeParts = (figureIndex, drawingIndex, partIndex, secondPartIndex) => {
    let drawing = myStorage.figures[figureIndex].drawings[drawingIndex];
    let temp = drawing.parts[partIndex];
    drawing.parts[partIndex] = drawing.parts[secondPartIndex]
    drawing.parts[secondPartIndex] = temp;
    return drawing.parts.length;
    // console.log(drawing);
  }
  this.addFigure = function (figureName)
  {

  }

  this.removePart = function (figureIndex, drawingIndex, partIndex)
  {
    return myStorage.figures[figureIndex].drawings[drawingIndex].parts.splice(partIndex, 1);
  }

  this.removeDrawing = function (figureIndex, drawingIndex)
  {
    return myStorage.figures[figureIndex].drawings.splice(drawingIndex, 1);
  }

  this.removefigure = function (figureIndex)
  {
    return myStorage.figures.splice(figureIndex, 1);
  }

  

  this.copyPart = function (figureName)
  {

  }

  this.copyDrawing = function (figureName)
  {

  }





  this.reDraw = function () {
    // clear screen
    // console.log("reset Run")
    clear();
    // redraw
    let figures = myStorage.figures.length;
    for (let i = 0; i < figures; i++) {
      this.draw(myStorage.figures[i]);
    }
  };

  this.reDrawWithPoint = () =>
  {
    // background(200);
    clear();
    // redraw
    let figures = myStorage.figures.length;
    for (let i = 0; i < figures; i++) {
      this.draw(myStorage.figures[i]);
    }
    this.drawPoints();
  }

  this.drawPoints = () => {
    let part = this.getPart();
    if (part.vertexArray.length > 0)
    {
      push();
            if (drawManager.settings.vertexPoints)
            {
              stroke(invertColor(part.stroke))
              strokeWeight(max(part.strokeWeight + drawManager.settings.vertexPointsFactor, 6))
              part.vertexArray.forEach(elem => {
                point(elem[0],
                      elem[1]); 
              });
            }

            if (drawManager.settings.numberPoints)
            {
              push();
              // stroke(part.stroke);
              // fill(invertColor(part.stroke));
              fill(part.stroke);
              noStroke();
              textAlign(CENTER,CENTER)
              textSize(max(part.strokeWeight + drawManager.settings.vertexPointsFactor, 6))
              let counter = 0;
              part.vertexArray.forEach(elem => {
                text(counter++, elem[0], elem[1]+1); //The plus one corrects a small diaviation in height
                
              });
              pop();
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
  }
  
  return this;
}
