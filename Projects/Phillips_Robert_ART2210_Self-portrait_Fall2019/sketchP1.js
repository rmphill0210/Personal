var hair='#3d2b1f';


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(166,161,161);
  
}

function portrait(){
let scaleX=0;
let scaleY=0;
if(windowWidth>=windowHeight){
    scaleY=(windowHeight-50)*.003;
    scaleX=(2/3*windowHeight-50)*.004;
}else{
    scaleX=(windowWidth-50)*.004;
    scaleY=(3/2*windowWidth-50)*.003;
}
// canvas 200x300 pixels
createGraphics(200,300);
scale(scaleX,scaleY);
rect(60,75,100,200);
fill(232, 195, 158);
//---------     NOSE     -------------------------------
//the Nose

push();
strokeWeight(2);
line(95,110,78,160);
pop();
strokeWeight(2.5);
beginShape();
    curveVertex(80,155);
    curveVertex(78,160);
    curveVertex(82,164);
    curveVertex(90,166);
    curveVertex(92,170);
endShape();
//the nostril
push();
strokeWeight(2);
beginShape();
    curveVertex(88,170);
    curveVertex(93,163);
    curveVertex(98,162);
    curveVertex(101,165);
    curveVertex(103,170);
endShape();
pop();

//---------     EYEBROWS     --------------------------
push();
strokeWeight(1.5);
fill(hair);
//picture right eyebrow
beginShape();
    curveVertex(102,107);
    curveVertex(110,105);
    curveVertex(122,108);
    curveVertex(130,113);
    curveVertex(110,110);
    curveVertex(100,110);
    curveVertex(100,110);
endShape(CLOSE);
//left eyebrow
beginShape();
    curveVertex(90,107);
    curveVertex(83,105);
    curveVertex(75,107);
    curveVertex(72,112);
    curveVertex(75,111);
    curveVertex(83,108);
    curveVertex(90,109);
endShape(CLOSE);
pop();
//---------     MOUTH/EYES     -----------------------
// mouth outline
push();
fill(209,105,105);
strokeWeight(1.5);
beginShape();
    curveVertex(90,172);
    curveVertex(91,172);
    curveVertex(106,180);
    curveVertex(114,185);
    curveVertex(106,186);
    curveVertex(96,186);
    curveVertex(88,185);
    curveVertex(86,183);
    curveVertex(88,179);
    curveVertex(92,177);
    curveVertex(88,174);
endShape(CLOSE);
pop();
//mouth center Line
push();
strokeWeight(1.);
strokeCap(ROUND);
line(83,176,115,187);
pop();
//Picture right eye ----
push();
strokeWeight(1.5);
    // the fold
curve(140,140,130,128,105,120,90,121);
    // the top
curve(148,144,125,132,110,125,93,127);
    // the bottom
curve(145,118,125,132,110,135,95,133);
    // the vertical
curve(115,118,110,126,110,135,115,140);
//left eye -----
push();
strokeWeight(1.5);
//the fold
curve(55,134,64,126,87,120,103,130);
//the top
curve(50,168,68,130,85,130,90,168);
//the bottom
curve(55,113,67,131,85,131,90,113);
pop();
// the pupils
push();
noStroke();
fill(hair);
ellipse(111,130,4,10);
ellipse(77,129,9,9);
pop();
//-----    HAIR     ------------------------
push();
fill(hair);
noStroke();
beginShape();
    curveVertex(145,130);
    curveVertex(140,95);
    curveVertex(130,80);
    curveVertex(85,88);
    curveVertex(68,100);
    curveVertex(60,90);
    curveVertex(68,80);
    curveVertex(85,68);
    curveVertex(95,60);
    curveVertex(105,60);
    //curveVertex(105,58);
    curveVertex(118,62);
    curveVertex(122,58);
    curveVertex(135,58);
    curveVertex(143,75);
    curveVertex(160,85);
    curveVertex(160,130);
endShape(CLOSE);
pop();
//-----     EARS     -----------------------------
push();
//Picture right ear
strokeWeight(1);
beginShape();
    curveVertex(143,130);
    curveVertex(148,125);
    curveVertex(151,140);
    curveVertex(149,150);
    curveVertex(145,160);
    curveVertex(140,165);
    curveVertex(142,148);
endShape(CLOSE);
//left ear
beginShape();
    curveVertex(61,130);
    curveVertex(56,125);
    curveVertex(53,140);
    curveVertex(55,150);
    curveVertex(59,160);
    curveVertex(64,165);
    curveVertex(62,148);
endShape(CLOSE);
pop();
//-----    THE HEAD    --------------------------------
// Picture left side
push();
noFill();
strokeWeight(2.5);
beginShape();
    curveVertex(68,80);
    curveVertex(66,90);
    curveVertex(59,110);
    curveVertex(62,153);
    curveVertex(66,175);
    curveVertex(79,195);
//the chin begins
    curveVertex(97,205);
    curveVertex(102,206);
    curveVertex(105,205);
// right side begins
    curveVertex(125,195);
    curveVertex(138,175);
    curveVertex(142,153);
    curveVertex(145,110);
    curveVertex(138,90);
    curveVertex(136,80);
endShape();
pop();

//-----     NECK/SHOULDER   ---------------------------------
//Picture left 
push();
noFill();
strokeWeight(2);
curve(96,200,95,205,96,220,100,240);
//right
curve(160,112,145,162,155,222,170,227);
pop();
//shoulders
push();
fill(173,21,21);
strokeWeight(.5);
beginShape();
    curveVertex(20,280);
    curveVertex(18,250);
    curveVertex(40,240);
    curveVertex(85,220);
    curveVertex(115,220);
    curveVertex(160,240);
    curveVertex(182,250);
    curveVertex(160,290);
endShape(CLOSE);
pop();


}

function draw(){
portrait();

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(166,161,161);
}

