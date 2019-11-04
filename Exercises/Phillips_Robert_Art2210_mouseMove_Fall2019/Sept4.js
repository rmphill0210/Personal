function setup(){
    createCanvas(windowWidth, windowHeight);
    //background(204);
}

function draw() {
    
/* example of mapping with ellipses
    
    background(204);
  let x1 = map(mouseX, 0, width, 25, 75);
  ellipse(x1, 25, 25, 25);
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  let x2 = map(mouseX, 0, width, 0, 100, true);
  ellipse(x2, 75, 25, 25);

  */

 //color change background

  var x1= map(mouseX,0,width,0,255,true);
  var x2= map(mouseY,0,width,0,255,true);
  var x3; 
  
  if(mouseIsPressed){
      x3=map(mouseY,0,width,0,255,true);
  }
  else{
    x3=map(mouseX,0,width,0,255,true);
  }

    background(x1,x2,x3);

  /* draw a star
  followingDraw();

    strokeWeight(05);
    beginShape(); 
    fill(200,0,0);
   
    var x = width/2, y =height/2;
  

    vertex(x,y-95);
    vertex(x+20,y-20);
    vertex(x+100,y-20);
    vertex(x+30, y+15);
    vertex(x+55, y+95);
    vertex(x, y+35);
    vertex(x-55,y+95);
    vertex(x-30,y+15);
    vertex(x-100,y-20);

    vertex(x-20, y-20);
    endShape(CLOSE);
    
}
/*triangle drawn on screen that follows mouse   
function followingDraw(){
    if(mouseIsPressed){
        fill(255);
        triangle(mouseX, mouseY, mouseX+28, mouseY-55, mouseX+56, mouseY);
    }
    else{
        fill(255, 204, 0);
        triangle(mouseX, mouseY, mouseX+28, mouseY-55, mouseX+56, mouseY);
  
    }
 
    */
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    //background(204);
}