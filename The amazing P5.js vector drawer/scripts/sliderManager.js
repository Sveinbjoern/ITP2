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
    currentColorPart: "rgb(100, 26, 26)",
    partDefault: "rgb(119, 80, 192)",
    drawing: "rgb(19, 180, 192)",
    figure: "rgb(50, 50, 200)",
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
    console.log(a);
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

    console.log(a.parentElement.id);
    menu[0].children.forEach((elem) => {
      elem.identity = a.parentElement.id;
    });

    sliderManager.addSliderOpen = true;
  };

  this.updateDefaultSlides = () => {
    let elem = document.getElementsByClassName("defaultSlide");
    console.log(elem);
  };
  this.updateSlides = () => {
    this.updateDefaultSlides();
  };


  this.collapseOrExtendBars = (a)=>{
      console.log(a)
      console.log(a.innerHTML)
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
}
