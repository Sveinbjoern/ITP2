// drawManager will containt all figures, drawings, parts and vertecies
// drawManger will manage the reseting and updates of advanced drawing methods
// drawManager will convert points into a vertex drawing

function DrawManager() {
  let storage = 
  {
    figures: [],
    currentFigure: -1,
  }
  this.getFigure = () => {
    return storage.figures[storage.currentFigure];
  };

  this.getDrawing = () => {
    let get = storage.figures[storage.currentFigure];
    return get.drawings[get.currentDrawing];
  };

  this.getPart = () => {
    let get = storage.figures[storage.currentFigure].drawings[storage.figures[storage.currentFigure].currentDrawing];
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


    lightMode: false,
    // MORE SETTINGS
    //Show number - number size -relative to stroke
    //
  }


 

  this.setup = function () {
    storage.figures.push(new Figure("start"));
    storage.currentFigure ++;

    // console.log("storage", storage)
    // if (this.figures[0].drawings[0].parts[0].vertexArray.length >= 1)
    // {
    //     // this.draw(this.figures[0])
    // }


    


  };

  this.loadLocalStorage = () => {
    if (typeof(Storage) !== "undefined") {
      console.log("local Storage OK")// Code for localStorage
      // console.log("helpers", helpers)// Code for localStorage
      // console.log("all the globals", helpers,drawManager, sliderManager )// Code for localStorage
      
      
      helpers.loadFiguesFromStorage(storage);
      
      helpers.loadSettingsFromStorage(this.settings);
      
    
    } else {
      alert("No web Storage support, your settings and work cannot be saved!")// No web storage Support.
    }
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

  this.addPart = function(figureName, drawingName, partName){

  }
  this.addDrawing = function (figureName, drawingName){

  }
  this.addFigure = function (figureName)
  {

  }

  this.removePart = function (figureName)
  {

  }

  this.removeDrawing = function (figureName)
  {

  }

  this.removefigure = function (figureName)
  {

  }

  this.moveDrawing = function (figureName)
  {

  }

  this.movePart = function (figureName)
  {

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
    background(200);
    // redraw
    let figures = storage.figures.length;
    for (let i = 0; i < figures; i++) {
      this.draw(storage.figures[i]);
    }
  };

  this.reDrawWithPoint = () =>
  {
    background(200);
    // redraw
    let figures = storage.figures.length;
    for (let i = 0; i < figures; i++) {
      this.draw(storage.figures[i]);
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
              // stroke(part.stroke);
              // fill(invertColor(part.stroke));
              fill(part.stroke);
              noStroke();
              textAlign(CENTER,CENTER)
              textSize(max(part.strokeWeight + drawManager.settings.vertexPointsFactor, 6))
              let counter = 0;
              part.vertexArray.forEach(elem => {
                text(counter++, elem[0], elem[1]+1); 
              });
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
