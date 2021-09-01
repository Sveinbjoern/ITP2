
function SliderManager(){
 
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


    this.col = {
        currentColorPart: "rgb(100, 26, 26)",
        partDefault: "rgb(119, 80, 192)",
        drawing: "rgb(19, 180, 192)",
        figure: "rgb(50, 50, 200)",
    }
    this.HTMLIndecies = {
        firstFigure: 0,
        firstDrawing: 12,
        firstPart: 11,
    }

    this.addSliderOpen = false;

   

    this.defaultSlides = {
        leftSidebar: ["order"],
        rightSidebar: ["current","default"],
        bottomBar: ["draw","current"],

        leftSidebarOpen: true,
        rightSidebarOpen: true,
        bottomBarOpen: true,
    }

    // this.getSlides = (type) =>  {
    //     return slides.type;
    // }
    let createSlider = (type,pos) => {
        
        switch (type) {
            case "order":
                slideTemplates.createOrderSlide(pos);
                break;
            case "current": 
                slideTemplates.createCurrentSlide(pos);
                break;
            case "default": 
                slideTemplates.createDefaultSlide(pos);
                
                break;
            default:
                console.log(type + " is not a valid input at sliderManger.createSlider")
        }
       this.placeAddSliderButtonToEnd(pos);

    }

    this.setup = function(){
       

        window.onclick = function(event) {
            if (!self.addSliderOpen) {
              
                let menu = document.getElementById("addSliderMenu");
                menu.style.display = "none"
            } else {self.addSliderOpen = false;}
          }
        
            this.defaultSlides.leftSidebar.forEach( elem => {
                switch (elem)
                {
                    case "order":
                        slideTemplates.createOrderSlide("sidebarLeft");
                        break;
                    case "current":
                        slideTemplates.createCurrentSlide("sidebarLeft");
                        break;
                    case "default":
                        slideTemplates.createDefaultSlide("sidebarLeft");
                        break;

                    default:
                        console.log("In sliderManager.setup: " + elem + " is not valid element in switch");
                }
            })
            // console.log(helpers)
            this.placeAddSliderButtonToEnd("sidebarLeft");
            
            
        

        
            this.defaultSlides.rightSidebar.forEach( elem => {
                switch (elem)
                {
                    case "order":
                        slideTemplates.createOrderSlide("sidebarRight");
                        break;
                    case "current":
                        slideTemplates.createCurrentSlide("sidebarRight");
                        break;
                    case "default":
                        slideTemplates.createDefaultSlide("sidebarRight");
                        break;

                    default:
                        console.log("In sliderManager.setup: " + elem + " is not valid element in switch");
                }
            })
            this.placeAddSliderButtonToEnd("sidebarRight");
            
        
        
            this.defaultSlides.bottomBar.forEach( elem => {
                switch (elem)
                {
                    case "order":
                        slideTemplates.createOrderSlide("bottomBar");
                        break;
                    case "current":
                        slideTemplates.createCurrentSlide("bottomBar");
                        break;
                    case "default":
                        slideTemplates.createDefaultSlide("bottomBar");
                        break;

                    default:
                        console.log("In sliderManager.setup: " + elem + " is not valid element in switch");
                }
            })
            this.placeAddSliderButtonToEnd("bottomBar");
            
        

            drawManager.setCurrentPartR();


        // this.fillOrderBar();
        // slideTemplates.createCurrentSlide("sidebarRight");
        // slideTemplates.createCurrentSlide("bottomBar");
        // slideTemplates.createCurrentSlide("bottomBar");
        // slideTemplates.createCurrentSlide("bottomBar");
        // slideTemplates.createCurrentSlide("bottomBar");
        // slideTemplates.createCurrentSlide("bottomBar");
        // slideTemplates.createDefaultSlide("sidebarRight");
        
        // slideTemplates.createOrderSlide("sidebarLeft");
        
        // slideTemplates.createDefaultSlide("sidebarRight");
        // slideTemplates.createDefaultSlide("sidebarRight");
        // slideTemplates.createColorSlide("sidebarRight");
        // slideTemplates.createColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        // this.fillColorSlide("sidebarRight");
        
        
        
        // console.log("slides",slides);

    }
    

    


 

   


        

    // }

    this.createOrderSlide = (a)  => {
        // console.log("a",a.identity)

        createSlider("order",a.identity)
    } 
    this.createDefaultSlide = (a)  => {
        // console.log("a",a.identity)

        createSlider("default",a.identity)
    } 
    this.createCurrentSlide = (a)  => {
        // console.log("a",a.identity)

        createSlider("current",a.identity)
    } 
    this.createSettingsSlide = (a)  => {
        // console.log("a",a.identity)

        createSlider("settings",a.identity)
    } 


    this.placeAddSliderButtonToEnd = (bar) => 
    {
        
        let sideBar = document.getElementById(bar);
        // console.log(sideBar)
        // let text = bar+"AddSliderButton"
        // console.log(text)
        let plussBar = $("#"+bar+"AddSliderButton").detach();
        // console.log(plussBar[0])
        
        
           
            sideBar.append(plussBar[0]);
            // elem.prepend(elem.children[0]);
            // elem.prepend(elem.children[0]);

            // console.log(elem.children);
    }

    this.openAddSliderMenu = (a) => {
        // console.log(a)
        // console.log(a.offsetTop)
        // console.log(a.offsetLeft)
        let adjustHeight = 22;
        let adjustSide = 0;
        let menu = $("#addSliderMenu")
        if (a.offsetTop > window.innerHeight/2)
        {
            adjustHeight = -27* menu[0].children.length
        }
        if (a.parentElement.id == "bottomBar")
        {
            adjustSide = -150;
        }
        menu[0].style.display = "inline-block"
        menu[0].style.left = (a.offsetLeft + adjustSide) + "px"
        menu[0].style.top = (a.offsetTop+adjustHeight) + "px"
        
        console.log(a.parentElement.id)
        menu[0].children.forEach( (elem) =>
        {
            elem.identity = a.parentElement.id
        });

        sliderManager.addSliderOpen = true;

    }

    this.updateDefaultSlides = () => {
        let elem = document.getElementsByClassName("defaultSlide");
        console.log(elem);

        

    
    }
    this.updateSlides = () => {
        this.updateDefaultSlides();
    }




}



