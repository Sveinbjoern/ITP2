//global variables that will store the toolbox colour palette
//amnd the helper functions
let toolbox = null;
let colourP = null;
let helpers = null;
let drawManager = null;
let sliderManager = null;

let currentFigureIndex = 0;
let currentDrawingIndex = 0;
let currentPartIndex = 0;
let currentFigure;
let currentDrawing;
let currentPart;


const soundeffects = {};


function preload() {
	// preload() runs once
	soundeffects.ding = loadSound("assets/sound/515643__mashedtatoes2__ding2.wav");

}


function setup() {

	//basic p5 settings:
	frameRate(30);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#drawField');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent('drawField');
	
	
	//create the drawManager 
	drawManager = new DrawManager();
	drawManager.setup();
	//setup current values

	//create helper functions and the colour palette
	helpers = new HelperFunctions();

	//NO LONGER NEEDED
	// colourP = new ColourPalette();

	// currentFigure = drawManager.figures[currentFigureIndex];
	// currentDrawing = currentFigure.drawings[currentDrawingIndex];
	// currentPart = currentDrawing.parts[currentPartIndex];	
	
	//create the sliderManager
	// console.log("currentPart setup" ,currentPart)
	sliderManager = new SliderManager();
	sliderManager.setup();
	

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	// toolbox.addTool(new SprayCanTool());
	// toolbox.addTool(new MirrorDrawTool());



	// background(200);
	// drawManager.draw(drawManager.figures[0]);

	// console.log($("#sidebarRight").children());
	let temporary = $("#sidebarRight").children()[1];
	$("#sidebarRight").children()[1] = $("#sidebarRight").children()[0];
	// console.log($("#sidebarRight").children());
	$("#sidebarRight").children()[0] = temporary;
	// console.log($("#sidebarRight").children());
	fitToScreen();
}

function draw() {
	// console.log("draw ")
	
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user


	// drawManager.draw();
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		// console.log("draw in draw")
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}

}


function fitToScreen(){
 console.log("fitToScreen");
 
 
 canvasContainer = select('#drawField');
 var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
 c.parent('drawField');
 drawManager.reset();
}

// function mousePressed(){
// 	// soundeffects.ding.play();
// 	// drawManager.reset();
// 	console.log("mousePressed?   ")
// }