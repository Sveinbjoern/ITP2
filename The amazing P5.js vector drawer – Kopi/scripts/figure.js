function Figure (name, currentDrawing ){
    this.name = name || drawManager.defaultFigure.name;
    this.currentDrawing = currentDrawing || 0;
    this.drawings = [];
    // console.log(this.drawings)
    this.drawings.push(new Drawing("first Drawing",[0,0]))



    return this;

}


function Drawing(name,zeroPoint, currentPart){
    this.name = name || drawManager.defaultDrawing.name;
    this.zeroPoint = zeroPoint || drawManager.defaultDrawing.zeroPoint;
    this.showDetails = drawManager.defaultDrawing.showDetails;
    this.currentPart = currentPart || 0;
    this.isSelected = false;
    this.parts = [];
    this.draw = drawManager.defaultDrawing.draw;
    this.parts.push(new Part("firstPart"));
    // console.log(this.parts);
    // this.parts.push( new Part("secondPart"));
    // console.log("Drawing.parts",this.parts);
    // console.log("new Part", new Part("firstPart"));
    return this;
}

function Point(name, type, position){
    this.name = name || drawManager.defaultPoint.name;
    this.type = type || drawManager.defaultPoint.type;
    this.position = position || drawManager.defaultPoint.position;
    this.isSelected = false;

    return this;
}

function Part(name,type){
    this.vertexArray = [];//[20,21],[215,15],[465,456],[445,231]];
    this.name = name || drawManager.defaultPart.name;
    this.type = type || drawManager.defaultPart.type;
    // this.localZeroPoint = drawManager.defaultPart.zeroPoint;
    this.isSelected = false;

    this.currentVertex = drawManager.defaultPart.currentVertex;
    // console.log(drawManager.defaultPart.showDetails)
    this.showDetails = drawManager.defaultPart.showDetails;
    this.strokeAlpha = 1;
    this.stroke = drawManager.defaultPart.stroke;
    this.noStroke = drawManager.defaultPart.noStroke;
    this.strokeWeight = drawManager.defaultPart.strokeWeight;
    this.draw = drawManager.defaultPart.draw;
    
    // this.fillAlpha = 1;
    this.fill = drawManager.defaultPart.fill;
    this.noFill = drawManager.defaultPart.noFill;
    this.vertexMode = drawManager.defaultPart.vertexMode;
    this.endShape = drawManager.defaultPart.endShape;
    // console.log("Part", drawManager.figures)

    return this;
}