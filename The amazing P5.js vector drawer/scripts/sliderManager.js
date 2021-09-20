function SliderManager() {
  let colorsInUse = []; // scan all colors in use and store here
  let previousColors = []; // every color chosen but that is currently no choosen, is stored here

  let slideOuterHeight;
  let slideInnerHeight;
  let slideOuterWidth;
  let slideInnerWidth;

  // let leftSidebarLenght = 0;
  let rightSidebarLenght = 0;
  let bottomLenght = 0;
  let topLenght = 0;
  let slideTemplates = new SlideTemplates();
  // console.log(slideTemplates)
  let temporary;
  let self = this;

  let extendedBars = {
    left: true,
    right: true,
    bottom: true,
  }
  this.col = {
    currentColorPart: "rgb(100, 26, 26)",//rgb(100, 26, 26)
    partDefault: "rgb(119, 80, 192)",//rgb(182, 67, 102)
    drawing: "rgb(19, 180, 192)",
    figure: "rgb(50, 50, 200)",
    defaultSlide: "rgb(26,100,26)"
  };
  this.HTMLIndecies = {
    firstFigure: 12,
    firstDrawing: 12,
    firstPart: 11,
    divInPart: 11,
  };

  this.addSliderOpen = false;

  this.defaultSlides = {
    leftSidebar: ["order"],
    rightSidebar: ["current", "default"],
    bottomBar: ["drawMode"],
    leftSidebarString: "sidebarLeft",
    rightSideBarString: "sidebarRight",
    bottomBarString: "bottomBar",

    leftSidebarOpen: true,
    rightSidebarOpen: true,
    bottomBarOpen: true,
  };

  // this.getSlides = (type) =>  {
  //     return slides.type;
  // }
  let createSlider = (type, pos) => {
    switch (type) {
      case "order":
        slideTemplates.createOrderSlide(pos);
        break;
      case "current":
        slideTemplates.createCurrentSlide(pos);
        break;
      case "drawMode":
        slideTemplates.createDrawModeSlide(pos);
        break;
      case "default":
        slideTemplates.createDefaultSlide(pos);

        break;
      default:
        console.log(
          type + " is not a valid input at sliderManger.createSlider"
        );
    }
    this.placeAddSliderButtonToEnd(pos);
  };

  this.setup = function () {
    //Removes the make slider menu when you click on the screen
    window.onclick = function (event) {
      if (!self.addSliderOpen) {
        let menu = document.getElementById("addSliderMenu");
        menu.style.display = "none";
      } else {
        self.addSliderOpen = false;
      }
    };
    this.titleText.setup();
    this.defaultSlides.leftSidebar.forEach((elem) => {
      switch (elem) {
        case "order":
          slideTemplates.createOrderSlide("sidebarLeft");
          break;
        case "current":
          slideTemplates.createCurrentSlide("sidebarLeft");
          break;
        case "drawMode":
          slideTemplates.createDrawModeSlide("sidebarLeft");
          break;
        case "default":
          slideTemplates.createDefaultSlide("sidebarLeft");
          break;

        default:
          console.log(
            "In sliderManager.setup: " +
              elem +
              " is not valid element in switch"
          );
      }
    });
    // console.log(helpers)
    this.placeAddSliderButtonToEnd("sidebarLeft");

    this.defaultSlides.rightSidebar.forEach((elem) => {
      switch (elem) {
        case "order":
          slideTemplates.createOrderSlide("sidebarRight");
          break;
        case "current":
          slideTemplates.createCurrentSlide("sidebarRight");
          break;
        case "drawMode":
          slideTemplates.createDrawModeSlide("sidebarRight");
          break;
        case "default":
          slideTemplates.createDefaultSlide("sidebarRight");
          break;

        default:
          console.log(
            "In sliderManager.setup: " +
              elem +
              " is not valid element in switch"
          );
      }
    });
    this.placeAddSliderButtonToEnd("sidebarRight");

    this.defaultSlides.bottomBar.forEach((elem) => {
      switch (elem) {
        case "order":
          slideTemplates.createOrderSlide("bottomBar");
          break;
        case "current":
          slideTemplates.createCurrentSlide("bottomBar");
          break;
        case "drawMode":
          slideTemplates.createDrawModeSlide("bottomBar");
          break;
        case "default":
          slideTemplates.createDefaultSlide("bottomBar");
          break;

        default:
          console.log(
            "In sliderManager.setup: " +
              elem +
              " is not valid element in switch"
          );
      }
    });
    this.placeAddSliderButtonToEnd("bottomBar");
  };

  this.createOrderSlide = (a) => {
    // console.log("a",a.identity)

    createSlider("order", a.identity);
  };
  this.createDrawModeSlide = (a) => {
    // console.log("a",a.identity)

    createSlider("drawMode", a.identity);
  };
  this.createDefaultSlide = (a) => {
    // console.log("a",a.identity)

    createSlider("default", a.identity);
  };
  this.createCurrentSlide = (a) => {
    // console.log("a",a.identity)

    createSlider("current", a.identity);
  };
  this.createSettingsSlide = (a) => {
    // console.log("a",a.identity)

    createSlider("settings", a.identity);
  };

  this.placeAddSliderButtonToEnd = (bar) => {
    let sideBar = document.getElementById(bar);
    // console.log(sideBar)
    // let text = bar+"AddSliderButton"
    // console.log(text)
    let plussBar = $("#" + bar + "AddSliderButton").detach();
    // console.log(plussBar[0])

    sideBar.append(plussBar[0]);
    // elem.prepend(elem.children[0]);
    // elem.prepend(elem.children[0]);

    // console.log(elem.children);
  };

  this.openAddSliderMenu = (a) => {
    // console.log(a)
    // console.log(a.offsetTop)
    // console.log(a.offsetLeft)
    let adjustHeight = 22;
    let adjustSide = 0;
    let menu = $("#addSliderMenu");
    // console.log(a);
    if (a.offsetTop > window.innerHeight / 2) {
      adjustHeight = -110;
    }
    if (a.parentElement.id == "bottomBar") {
      adjustSide = -150;
    }
    menu[0].style.display = "inline-block";
    menu[0].style.left =
      min(a.offsetLeft + adjustSide, window.innerWidth + adjustSide - 300) +
      "px";
    menu[0].style.top =
      min(a.offsetTop + adjustHeight, window.innerHeight + adjustHeight) + "px";

    // console.log(a.parentElement.id);
    menu[0].children.forEach((elem) => {
      elem.identity = a.parentElement.id;
    });

    sliderManager.addSliderOpen = true;
  };

  this.updateDefaultSlides = () => {
    let elem = document.getElementsByClassName("defaultSlide");
    // console.log(elem);
  };
  this.updateSlides = () => {
    this.updateDefaultSlides();
  };


  this.collapseOrExtendBars = (a)=>{
      // console.log(a)
      // console.log(a.innerHTML)
      let wrapper = document.getElementsByClassName("wrapper")[0]
      
      switch (a.id) {
        case "sidebarLeftButton":
            extendedBars.left = !extendedBars.left;
            if (extendedBars.left)
            {
                a.innerHTML = "&#60";
            } else {
                a.innerHTML = "&#62";
            }

            wrapper.style.gridTemplateColumns = setSideBars(extendedBars.left, extendedBars.right,a);
            fitToScreen();

          break;
        case "sidebarRightButton":
            extendedBars.right = !extendedBars.right;
            if (extendedBars.right)
            {
                a.innerHTML = "&#62";
            } else {
                a.innerHTML = "&#60";
            }
            wrapper.style.gridTemplateColumns = setSideBars(extendedBars.left, extendedBars.right,a);
            fitToScreen();
          break;
        case "bottomBarButton":
          extendedBars.bottom = !extendedBars.bottom;
          if (extendedBars.bottom){
              a.innerHTML = "∨";
              wrapper.style.gridTemplateRows = "auto minmax(200px, 1fr) 11px 160px";
          } else {
              a.innerHTML = "∧";
                wrapper.style.gridTemplateRows = "auto minmax(200px, 1fr) 11px 0px";
          }
          
          fitToScreen();
          break;
          default:
              console.log(a.id," is not a valid input in sliderManager.collapseOrExtendBars()") 
      }

            function setSideBars (truthLeft, truthRight)
        {
            if (truthLeft){
                if (truthRight)
                {
                    
                    return "300px 11px 65px minmax(200px, 1fr) 11px 300px";
                } else{
                    
                    return "300px 11px 65px minmax(200px, 1fr) 11px 0px";
                }
            } else {
                if (truthRight){
                    return "0px 11px 65px minmax(200px, 1fr) 11px 300px";
                } else{
                    return "0px 11px 65px minmax(200px, 1fr) 11px 0px";
                }
            }

        }

  }

  

  this.resetSelectAndTargetDiv = () =>{
    
    let figure = drawManager.getFigure();
    let elemsSel =  document.getElementsByClassName("selectDiv")
    let elemsTar =  document.getElementsByClassName("targetDiv")
    let selLength = elemsSel.length
    if (selLength <= 0)
    {
      return;
    }
    drawingsLength = figure.drawings.length;

    for (let i = 0;i < selLength;i++)
    {
      while (elems[i].firstChild !== elems[i].lastChild)
      {
          elemsSel[i].removeChild(elemsSel[i].lastChild); 
      }
      while (elemsTar[i].firstChild !== elemsTar[i].lastChild)
      {
          elemsTar[i].removeChild(elemsTar[i].lastChild); 
      }


      let radio = createRadio();
      radio.options("NewDrawing");
      radio.parent(elemsTar[i]);
      radio.selected("NewDrawing");
      let linebreak = document.createElement("br");
      elemsTar[i].appendChild(linebreak);
     

      for (let j = 0;j < drawingsLength; j++)
      {
        let drawing = figure.drawings[i];

        let box = createCheckbox(drawing.name, drawing.isSelected)
        box.parent(elemsSel[i])
        box.identity = [j]// box.elt.onchange = setSelcted(i,j)
        box.style("margin-left", "2px")
        box.style('font-size', '13px');
        box.style("color", sliderManager.col.drawing);
        box.style("text-align", "left")
        let parts = figure.drawings[j].parts
        partsLength = parts.length

        radio.options(drawing.name)
        box.style("margin-left", "2px")
        box.style('font-size', '13px');
        box.style("color", sliderManager.col.drawing);
        box.style("text-align", "left")

        for (let k = 0; k < partsLength; k++)
        {
          box = createCheckbox(parts[k].name, parts[k].isSelected)
          box.parent(elems[i])
          box.identity = [j,k]
          // box.elt.onchange = setSelcted(i,j)
          box.style("margin-left", "8px");
          box.style('font-size', '11px');
          box.style("text-align", "left")
          box.style("color", sliderManager.col.partDefault);
        }
      }  
    }  
      
          
  }
 

  this.exchangeSliders = (slideType,topPosition) => {
        
        let elem = document.getElementsByClassName(slideType);
        let length = elem.children.length;
        //detach sliderTop attach bottom from topPostion
        let temp = elem.children[topPosition].detach();
        elem.append(temp)
        //Starting from one bellow topPosition and one less because you have already moved one piece 
        // append items until you have a functional exchange of the two elements
        topPosition ++; 
        let i = topPosition+1; 
        for (; i < length; i++)
        {
            temp = elem.children[topPosition].detach();
            elem.append(temp)
        }


    }

  this.titleText = {
    order: `The order slide gives an overview
of everything you have drawn, and 
lets you change the properties
and order of any part.`,
    default: `The default slide gives
you choices for default properties 
for when you make a new part.`,
    current: `The current slide holds
you choices for properties of the 
part you are currently drawing.`,
    drawMode: `The draw mode slide gives
you choices for your current draw mode.
To change draw mode you press the square
pictures to the left of the drawing area.`,
    settings: `The settings menu controls
properties for the drawer,
like autosave, max and min values and more. 
when you make a new part.`,

    //drawMode related text
    drawModeDragNDraw: `DragNdraw mode:
You can drag to draw. The distance between
each point as you draw is given by the slider.
You can turn dragNdraw off with the check box.`,
    drawModeDragging: `Dragging mode:
You can move points that you have already placed
by clicking and holding and dragging any old point.
The distance from the point where dragging starts
to work is adjusted by the slider. You can turn off
dragging with the check box.`,
    drawMode1: ``,
    drawMode2: ``,
    drawMode3: ``,

    //Order related text
    orderNewDrawing: `Create a new collection
of parts to draw. A new drawing
can be moved as one.`,
    orderNewPart: `Create a new part to draw.
A new part can have a different color, and be seperate.
Use often! Every time you need to change color or place.

Hotkey: Spacebar
(Only, when mouse is over
the drawing field)`,
    orderMoveUpDrawing: `Move this whole drawing
with all its parts one step up.
Whatever is higher on the order
list is drawn bellow and will
be covered by other drawings.`,
    orderMoveDownDrawing: `Move this whole drawing
with all its parts one step down.
Whatever is lower on the order
list is drawn on top of others and
will cover other drawings.`,
    orderDeleteDrawing: `DELETES this whole
drawing with all its parts.
If only one drawing remains.
A new default drawing is
created.`,
    orderUp: `Move this part up!
Whatever is higher in the order
list is drawn bellow and will
be covered by other parts 
lower on the list!`,
    orderDown: `Move this part down!
Whatever is lower in the order
list is drawn on top of other
parts so it will cover other 
parts higher on the list!`,
    orderDrawThis: `With this you can turn of
drawing this part to the screen.`,  
    orderFill: `Set the color to fill this shape.`,  
    orderNoFill: `Turn of filling this shape with color.
Leaving the lines connecting the shape`,  
    orderStroke: `Set the color of the lines
connecting the points of this shape`,  
    orderNoStroke: `Turn of the lines connecting the points.
Leaving the color inside the shape
NB! Less than three points cannot
be seen at all with noStroke on.`,  
    orderStrokeWeight: `Adjust the thickness of the lines 
connecting this shape.
NB! Does nothing when noStroke is on`,  
    orderFigure: `You only have one figure in
this version. The name of the figure
gives name to the screenshots you make.`,  
    orderDrawThisDrawing: `Set all parts of the drawing 
to either draw or not at once!
With this you can hide the whole figure`,  
    orderSetCurrent: `*IMPORTANT*
You can only draw one part
at the time! Use this button to
set this part as your current part!`,  
    order123: ``,  
    //Current related text
    currentDeleteVertex: `Removes one vertex from
your current part.

HotKey: Backspace 
(Only when mouse is over 
the drawing field)`,
    currentFill: `Set the color of the inside
of the figure you are currently
drawing on`,
    currentNoFill: `Removes the fill or color in the center 
of the part you are currently drawing.`,
    currentStroke: `Set the color of the lines
connecting your shape for 
the part you are currently drawing.`,
    currentNoStroke: `Removes the lines connecting 
the shape you are currently drawing on.`,
    currentStrokeWeight: `Adjust the thickness of the lines 
connecting your current part.
NB! Does nothing when noStroke is on`,
    currentVertex: `The current vertex decides where you 
put the next point in te current par you
are drawing on.
To change current Vertex you can use hotkeys:
To start: up arrow
To end: down arrow
Increase: right arrow
Decrease: left arrrow`,
    currentToStart: `Set the current vertex to 0.
Allows you to draw from the first vertex.

Hotkey: up arrow`,
    currentToEnd: `Set the current vertex to the last vertex.
Allows you to draw from the last vertex.

Hotkey: down arrow`,
    currentIncrease: `Increase the current vertex by one.
Allows you to insert a vertex where you want.

Hotkey: right arrow`,
    currentDecrease: `Decrease the current vertex by one.
Allows you to insert a vertex where you want.

Hotkey: left arrow`,
    current123: ``,
    //Settings related text
    settings12312: ``,
    //Default related text
    defaultFill: `Set the color of the inside
of any new part you make`,
    defaultNoFill: `Removes the fill or color
in the center of any 
new part you make.`,
    defaultStroke: `Set the color of the lines
connecting your shape for any 
new part you make`,
    defaultNoStroke: `Removes the lines connecting
you shapes for any new part you make.`,
    defaultStrokeWeight: `Adjust the thickness of the lines 
for any new part you make.
NB! Does nothing when noStroke is on`,
    default14: ``,
    default15: ``,
    default16: ``,
    default21: ``,
    default22: ``,
    //general text, applies to several slides
    generalX: `Remove this slide.
You make new slides with
the + button.`,
    generalPlus: `Add a new slide.
Slides control things like
drawing mode settings
color, order of drawing
and much more`,
    generalExpand: `Expand or contract this field`,
    generalUp: `Move this slide up
or if in the bottom
to the left`,
    generalDown: `Move this slide down
or if in the bottom
to the right`,
    generalSelIntro: `Drawmode drastically changes what you draw! 
Default is "" and you draw normally.`,
    generalSelOutro: `see p5js.org with keyword beginShape for more information.`,
    generalSelDefault: "Default, you draw normally.",
    generalSelLines: "LINES makes every two point a line, there is no fill.",
    generalSelTriangles: "TRIANGLES makes every three points a new triangle.",
    generalSelTriangleFan: "TRIANGLE FAN creates triangels starting from the first point.",
    generalSelTriangleStrip: "TRIANGLE STRIP creates connected triangles.\nRemove endshape unless you are making it circular.",
    generalSelQuad: "QUADS makes a new four point figure for every four points.",
    generalSelTess: "TESS (WebGl only) Handle irregular polygon for filling curve\nby explicit tessellation.",
    generalSelPoints: `POINTS creates points with the size 
of stroke weight`,
    generalEndShape: `"endShape" decides if there is a line connection
the last point to the first.
Only affects shapes with more than two points.
endshape(CLOSE) means this line is drawn.
endshape() means it is not drawn. 
For more info, see p5js.org, keyword "endShape"`,
    general: ``,

    setup: function(){
      let elem = document.getElementById("addSliderMenu");
      elem.children[0].title = this.order; 
      elem.children[1].title = this.drawMode; 
      elem.children[2].title = this.current; 
      elem.children[3].title = this.default; 
      elem.children[4].title = this.settings; 
      
      document.getElementById("sidebarLeftButton" ).title = this.generalExpand;
      document.getElementById("sidebarRightButton").title = this.generalExpand;
      document.getElementById("bottomBarButton"   ).title = this.generalExpand;

      document.getElementById("sidebarRightAddSliderButton" ).title = this.generalPlus;
      document.getElementById("sidebarLeftAddSliderButton"  ).title = this.generalPlus;
      document.getElementById("bottomBarAddSliderButton"    ).title = this.generalPlus;
    }
  }
  
    
}
