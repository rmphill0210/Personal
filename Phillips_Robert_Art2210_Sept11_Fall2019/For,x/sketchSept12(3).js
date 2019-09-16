

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}

function ellipseTime(){
    for(var x = 0; x <= width; x+=50){  
         ellipse(x, 250, 30, 30);
    }    
}
function draw(){
    background(0,50,50);
    ellipseTime();

    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

