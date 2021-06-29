//Constructor function to handle the onscreen menu, keyboard and mouse
//controls



function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen
		if (!this.playbackButton.hitCheck())
		{	
			// let fs = fullscreen();
			// fullscreen(!fs);
		}
		
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == keyCodes.SPACE){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode >= keyCodes.N_1 && keycode < keyCodes.N_9){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
			this.menuDisplayed = false;
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			this.menu();
		}	else 
		{
			//playback button 
			this.playbackButton.draw();
		}
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		for (let i = 0; i < vis.visuals.length; i++)
		{
			text((i+1) + ': ' + vis.visuals[i].name, 100, 60 + i*30);

		}
	};
}


