

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(RADIUS);
}


function draw(){
  background(0);
  push();
  fill(255,155,55);
  let x=[];

  for(var i=1;i<=6;i++){
    x[i-1]= random(10,100);
    if(second()%2==0){
      ellipse(i*200,windowHeight/2,x[i-1]);
    }else{
      rect(i*200,windowHeight/2,x[i-1],x[i-1]);
    }

  }
  pop();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    background(0);


}