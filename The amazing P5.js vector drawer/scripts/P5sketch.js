//global variables that will store the toolbox colour palette
//amnd the helper functions
let toolbox = null;
let colourP = null;
let helpers = null;
let drawManager = null;
let currentFigure = 0;
let currentDrawing = 0;
let currentPart = 0;

const soundeffects = {};


function preload() {
	// preload() runs once
	soundeffects.ding = loadSound("assets/sound/515643__mashedtatoes2__ding2.wav");

  }


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#drawField');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent('drawField');

	//create the drawManager
	drawManager = new DrawManager;
	drawManager.setup();

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new MirrorDrawTool());



	// background(200);
	// drawManager.draw(drawManager.figures[0]);
	
}

function draw() {
	
	
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}


function fitToScreen(){
 console.log("fitToScreen");
 
 
//  canvasContainer = select('#drawField');
//  var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
//  c.parent('drawField');
}

function mousePressed(){
	// soundeffects.ding.play();
	// drawManager.reset();
}