

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}

function ellipseTime(){
    for(var x = 0; x <= width; x+=50){  
        for(var y = 0; y <= height; y+=50){  
            if((x%75==0)||(y%75==0))
             ellipse(x,y, 30, 30);
         }
    } 
}
function draw(){
    background(0,50,50);
    ellipseTime();

    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

