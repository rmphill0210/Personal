let score = 0;
let counter = 0;
var coord = {
    x: 0,
    y: 0,
    size: 0,
    r: 0,
    g: 0,
    b: 0,
    allow: 0
}

function format(){
    push();
    clear();
    background(71,71,71);
    noStroke();
    fill(166,161,161);
    textSize(20);
    text('Strikes',width/2-80,25);
    text(counter,width/2+10,25);
    pop();

}
function setup(){
    frameRate(1);
    createCanvas(windowWidth, windowHeight);
    background(71,71,71);
    ellipseMode(CENTER);
}


function draw(){
    let x2 = random(100,windowWidth-100);
    let y2 = random(100,windowHeight-100);
    let size2 = random(50,100);

    coord.x = random(100,windowWidth-100);
    coord.y = random(100,windowHeight-100);
    coord.size = random(50,100)
    coord.r = random(0,255);
    coord.g = random(0,255);
    coord.b = random(0,255);

    format();
    push();
    fill(coord.r, coord.g, coord.b);
    ellipse(coord.x,coord.y,coord.size); 
    pop();

    ellipse(x2,y2,size2);
    if(counter>=3){
        end();
    }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    format();   
}

function mousePressed(){
    var d = dist(coord.x,coord.y,mouseX,mouseY)*1;
    var dGood = dist(coord.x,coord.y,mouseX,mouseY)*.7;
    var lives = dist(coord.x,coord.y,mouseX,mouseY)*.4;
    if(lives<coord.size && (counter<5 && counter !=0)){
        counter--;
    }
    if(dGood<coord.size){
        score+=2;
    }else if(d<coord.size){
        score+=2;
    }else{
        counter++;
    }
    redraw();
    
} 

function end(){
    background(0,155)
    textSize(20);
    fill(255,255,255);
    text(score,width/2,height/2);
}
