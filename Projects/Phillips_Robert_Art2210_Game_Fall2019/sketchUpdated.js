let score = 0;
let counter = 0;
let time = 31;
var coord = {
    x: 0,
    y: 0,
    size: 0,
    r: 0,
    g: 0,
    b: 0,
    allow: 0
}

let img;
function preload() {
  img = loadImage("https://rmphill0210.github.io/Personal/Projects/Phillips_Robert_Art2210_Game_Fall2019/Baseball1.png");
  img2 = loadImage("https://rmphill0210.github.io/Personal/Projects/Phillips_Robert_Art2210_Game_Fall2019/wiffle.png");
}

function mainScreen(){
    
}

function format(){
    push();
    clear();
    background(71,71,71);
    noStroke();
    fill(166,161,161);
    textSize(20);
    text("Score",width/4-80,25);
    text(score,width/4+10,25);
    text('Strikes',width/2-80,25);
    text(counter,width/2+10,25);
    text("Time",width/4*3-80,25);
    text(time,width/4*3+10,25);
    pop();

}
function setup(){
    frameRate(1);
    createCanvas(windowWidth, windowHeight);
    background(71,71,71);
    ellipseMode(CENTER);
    imageMode(CENTER);
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

    if(score>=20){
        frameRate(1*(score/20))
    }
    if((counter>=3)||(time<=0)){
        end();
        time = 5;
    }else{
        time--;
        format();
        push();
        img.resize(75,0);
        image(img,coord.x,coord.y);
        pop();
        img2.resize(90,0);
        image(img2,x2,y2);
    }
    
}  
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    format();   
}

function mousePressed(){
    var d = dist(coord.x,coord.y,mouseX,mouseY)*1.1;
    var dGood = dist(coord.x,coord.y,mouseX,mouseY)*1.3;
    var lives = dist(coord.x,coord.y,mouseX,mouseY)*10;
    if(lives<=coord.size && (counter<5 && counter !=0)){
        counter--;
    }
    if(dGood<coord.size){
        score+=2;
    }else if(d<coord.size){
        score+=1;
    }else{
        counter++;
    }
    time+=2;
    redraw();
    
} 

function end(){
    background(0,155)
    textSize(20);
    fill(255,255,255);
    text(score,width/2,height/2);
}
