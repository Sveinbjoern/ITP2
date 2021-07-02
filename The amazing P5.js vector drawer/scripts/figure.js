function Figure (name ){
    this.name = name;
    this.drawings = [];
    this.drawings.push(new Drawing("first Drawing",[0,0]))



    return this;

}


function Drawing(name,zeroPoint){
    this.name = name||"drawingDefault"
    this.zeroPoint = zeroPoint;
    this.parts = [];
    this.parts.push(new Part("firstPart") )
    return this;
}

function Part(name){
    this.vertexArray = [];
    this.name = name ||"partDefault";
    this.localZeroPoint = [0,0];

    this.stroke = [20,20,20,255];
    this.noStroke = false;
    this.strokeWeight = 3;
    
    this.fill = [120,120,120,255]
    this.noFill = false;
    this.vertexMode = "";
    this.endShape =false;

    return this;
}