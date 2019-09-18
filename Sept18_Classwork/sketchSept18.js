var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;
var r,g,b, opacity;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
  
}

function draw() {
    if(mouseIsPressed){
        r=0;
        g=0;
        b=0;
        opacity=0;
    } else{
        r=random(255);
        g=random(255);
        b=random(255);
        opacity=random(255);
    }

    stroke(r,g,b,opacity);
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    line(x, y, px, py);
    py = y;
    px = x;
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

