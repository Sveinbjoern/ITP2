//spray can object literal
//if the mouse is pressed paint on the canvas
//while this tool is selveted you make a spray fo points
// centered on mouseX mouseY

function SprayCanTool()
{
    this.name =  "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    
    let points = 1000;
    let spread = 100;
    
    //spread describes how far to spread the paint from the mouse pointer
    //points holds how many pixels of paint for each mouse press.

    this.draw = function(){
        
        
        let randomAngle;
        let x;
        let y;
        let randomR;
        
        if(mouseIsPressed && mouseX >= 0 && mouseX <= width 
            && mouseY >= 0 && mouseY <= height ){
            // For loop makes the right amount of points
            for(var i = 0; i < points; i++)
            {
               //a random angle and a random distance from the center
               // For making a uniform spread check: 
               // https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly

                randomR = spread * sqrt (random()) 
                randomAngle = random() * 2 * PI;

                x = round (mouseX - cos(randomAngle) *randomR);
                y = round (mouseY - sin(randomAngle) *randomR);
                
                //draws a point to the screen
                point(  x, y);
            }
        }
    }    
};