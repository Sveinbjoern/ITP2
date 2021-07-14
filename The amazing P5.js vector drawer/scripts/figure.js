function Figure (name ){
    this.name = name;
    this.currentDrawing = 0;
    this.drawings = [];
    // console.log(this.drawings)
    this.drawings.push(new Drawing("first Drawing",[0,0]))



    return this;

}


function Drawing(name,zeroPoint){
    this.name = name||"drawingDefault";
    this.zeroPoint = zeroPoint;
    this.currentPart = 0;
    this.isSelected = false;
    this.parts = [];
    this.parts.push(new Part("firstPart"));
    // console.log(this.parts);
    // this.parts.push( new Part("secondPart"));
    // console.log("Drawing.parts",this.parts);
    // console.log("new Part", new Part("firstPart"));
    return this;
}

function Part(name){
    this.vertexArray = [];//[20,21],[215,15],[465,456],[445,231]];
    this.name = name ||"partDefault";
    this.localZeroPoint = [0,0];
    this.isSelected = false;

    this.stroke = "black";
    this.noStroke = false;
    this.strokeWeight = 3;
    
    this.fill = "gray";
    this.noFill = false;
    this.vertexMode = "";
    this.endShape = true;
    // console.log("Part", drawManager.figures)

    return this;
}