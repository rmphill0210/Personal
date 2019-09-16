

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}

function ellipseTime(){
    var x=0;     
    while( x<=windowWidth){
        ellipse(x, 200, 30, 30);
        x+=50;
    }
}
function draw(){
    background(0,50,50);
    ellipseTime();

    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

