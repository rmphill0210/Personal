

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}

function ellipseTime(){
    var x=0;     
    do{
        ellipse(x, 200, 30, 30);
        x+=50;
    }while( x<=windowWidth);
    
}
function draw(){
    background(0,50,50);
    ellipseTime();

    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

