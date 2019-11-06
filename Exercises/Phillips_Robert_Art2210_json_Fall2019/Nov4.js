var list;

function preload(){
  list =loadJSON("pokemon.json");
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(155,55,5);
  textAlign(LEFT);
  a = int(random(0,list.pokemon.length));
}

function draw(){
  background(155,55,5);
  stroke(4);
  textSize(25);
  push();
  textAlign(RIGHT);
  text(list.pokemon[a].name+": ",width/2-125,height/2)
  pop();

  text("ID: #"+list.pokemon[a].id,width/2-100,height/2-50)
  text("Species: "+list.pokemon[a].species,width/2-100,height/2-25)
  text("Height: "+list.pokemon[a].height+" ft",width/2-100,height/2)
  text("Weight: "+list.pokemon[a].weight+" lbs",width/2-100,height/2+25)
  text("Generation: "+list.pokemon[a].generation_id,width/2-100,height/2+50)
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    background(155,55,5 );


}