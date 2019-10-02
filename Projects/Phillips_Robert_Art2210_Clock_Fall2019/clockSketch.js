function rings(){
  strokeWeight(4);
  strokeCap(PROJECT);
  stroke(105,105,103);
  arc(0,0,150,150,-45,45);
  arc(0,0,300,300,45,135);
  arc(0,0,450,450,135,225);
  arc(0,0,600,600,225,-45);
  line(55,55,105,105);
  line(-107,107,-158,158);
  line(-160,-160,-210,-210);
  line(210,-210,55,-55);
}

function minutes(){
  let amount = map(m, 0, 60, 0, 600);
  push();
  noStroke();
  fill(68,15,122,127);
  ellipse(0,0,amount);
  pop();
}

function spinner(){
  let i = 0;
  let size = 0;
  for(i = 1; i<=12; i++){
    let rings2 = ((windowWidth/2)/12*i)-50;
    if(i==h){
      size=50
    }else if(i==h%12){
      size=50
    }else{
      size=15
    }
    push();
    rotate(map(s, 0, 60, 0, 360));
      textSize(size);
      fill(212,192,12);
      noStroke();
      text(i,rings2/2,0);
    pop();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  angleMode(DEGREES);

}
function draw() {
  background(51);

  s=second();
  m=minute();
  h=hour();

  translate(windowWidth/2,windowHeight/2);
  rotate(-90);
  noFill();
  
  minutes();
  rings();
  spinner();
  

  



}
