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
    localZeroPoint: [0,0],
    currentVertex: 0,

    stroke: color(0,0,0),
    noStroke: false,
    strokeWeight: 3,
    fill: color(120,120,120),
    noFill: false,
    vertexMode: "",
    endShape: true,
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
    // MORE SETTINGS
    //Show number - number size -relative to stroke
    //
  }


 

  this.setup = function () {
    storage.figures.push(new Figure("start"));
    storage.currentFigure ++;

    console.log("storage", storage)
    // if (this.figures[0].drawings[0].parts[0].vertexArray.length >= 1)
    // {
    //     // this.draw(this.figures[0])
    // }
  };

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
            createVertex(...part.vertexArray[0]);
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





  this.reset = function () {
    // clear screen
    // console.log("reset Run")
    clear();
    // redraw
    let figures = storage.figures.length;
    for (let i = 0; i < figures; i++) {
      this.draw(storage.figures[i]);
    }
    
  };
  
  return this;
}
