// drawManager will manage the reseting and updates of advanced drawing methods
// drawManager will convert points into a vertex drawing

function DrawManager() 
{
    this.figures = [];


    this.setup = function (){
    this.figures.push(new Figure("start"));
    if (this.figures[0].drawings[0].parts[0].vertexArray.length >= 1)
    {
        // this.draw(this.figures[0])
    }

  }


  this.draw = function (figure) 
    {
       
        //check if it has a point!! before sending it to draw
        drawings = figure.drawings.length
        for (let i = 0; i < drawings; i ++)
        {   
            //console.log("i",i)
            let drawing = figure.drawings[i]
            let parts = drawing.parts.length;
            for (let j = 0; j < parts; j ++)
            {
                let part = drawing.parts[j];
                // console.log("part",part)
                let vertexArray = part.vertexArray.length;
                // console.log("partLength",partLength)
                for (let k = 0; k <vertexArray;k++)
                {
                    strokeWeight(part.strokeWeight);
                    if (!part.noFill) {
                    fill(
                        ...part.fill
                    );
                    } else {
                    noFill();
                    }

                    if (vertexArray === 1) {
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
            } 
            function createVertex(item) 
            { 
            vertex(item[0], item[1]);
            }   
        }
    }
    
    //   if (drawSoft.currentVertexArray === 0) {
    //     strokeWeight(4);
    //     stroke("red");
    //     point(...drawSoft.drawPointZero[0]);
    //   } else {
    //     strokeWeight(4);
    //     stroke("red");
    //     point(...drawSoft.drawPointZero[0]);
    //     strokeWeight(2);
    //     // translate (...drawSoft.drawPointZero[drawSoft.currentVertexArray]);
    //     point(
    //       drawSoft.drawPointZero[drawSoft.currentVertexArray][0] +
    //         drawSoft.drawPointZero[0][0],
    //       drawSoft.drawPointZero[drawSoft.currentVertexArray][1] +
    //         drawSoft.drawPointZero[0][1]
    //     );
    //     // translate (-drawSoft.drawPointZero[drawSoft.currentVertexArray][0], -drawSoft.drawPointZero[drawSoft.currentVertexArray][1]);
    //   }
    
  

  
    }
    this.reset = function () {
        // clear screen
        clear();
        // redraw
        let figures = this.figures.length
        for (let i = 0; i < figures;i++)
        {
            this.draw(this.figures[i])
        }
        
        
    };

  return this;
}