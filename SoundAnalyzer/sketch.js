/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/
//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;


let music =
{
    parsRadio_loop: {},
    segway_loop: {},
    yee_king_track: {},
}


const keyCodes =
{
    N_1: 49,
    N_2: 50,
    N_3: 51,
    N_4: 52,
    N_5: 53,
    N_6: 54,
    N_7: 55,
    N_8: 56,
    N_9: 57,
    N_0: 48,
    B: 66,
    N: 78,
    M: 77,
    SPACE: 32,
}

function preload()
{
    soundFormats('mp3','wav');

    //load your sounds here
    music.segway_loop = loadSound('assets/segway_loop.mp3');
    music.parsRadio_loop = loadSound('assets/parsRadio_loop.mp3');
    music.yee_king_track = loadSound('assets/yee-king_track.mp3');
    sound = loadSound('assets/stomper_reggae_bit.mp3');

    sound.setVolume(0.2);
    music.parsRadio_loop.setVolume(0.2);
    music.segway_loop.setVolume(0.2);
    music.yee_king_track.setVolume(0.2);
}


function setup()
{
	createCanvas(windowWidth, windowHeight-4);
	 background(0);
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function keyPressed()
{
    
    controls.keyPressed(keyCode);
    function oldControls()
    {
        // console.log(jumpSound.isPlaying());
        
        music.parsRadio_loop.stop();
        music.yee_king_track.stop(); 
        music.segway_loop.stop();

        
        // jumpSound.play(0,1, 0.1,0.1);
        if (keyCode == keyCodes.B )  
        {
            music.segway_loop.loop(0,1, 0.1,0.1);
        }
        if (keyCode == keyCodes.N )  
        {
            console.log("active")
            music.yee_king_track.loop(0,1, 0.1,0.1);
        }
        if (keyCode == keyCodes.M )  
        {
            music.parsRadio_loop.loop(0,1, 0.1,0.1);
        }
    }
}



function mouseClicked(){
	controls.mousePressed();
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}

