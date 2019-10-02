var img;

function preload(){
    img=loadImage("https://github.com/rmphill0210/Personal/raw/master/help-1192586.jpg");
    
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}