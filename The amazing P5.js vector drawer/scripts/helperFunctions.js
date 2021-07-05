function HelperFunctions() {
	

    
    
    
    screenshotIteration = 0;
	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		
        drawManager.figures[0] = new Figure("start");
        drawManager.reset();
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		makeScreenshot();
		console.log("screenshot?")
	});

	//////////////////////////////////////////////////////////////////
    // Screenshot Functions
    ////////////////////////////////////////////////////////////////////
    //ADAPTED FROM:
    //screenshot demo
    //by ChrisOrban
    //https://editor.p5js.org/ChrisOrban/sketches/ryXx1hjWZ 

    function formatNumberLength(num, length) 
    {
        let r = "" + num;
        while (r.length < length) 
        {
            r = "0" + r;
        }
        return r;
    };

    function makeScreenshot ()
    {
        let formatted_number = formatNumberLength(screenshotIteration,4);
        saveCanvas("screenshot"+formatted_number,"png");

        screenshotIteration ++;
    };
}