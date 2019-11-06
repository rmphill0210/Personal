var list;

  //weather =loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Baton Rouge&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75&units=metric");
  
  var weather;
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apiKey = '&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75';
  var unitsID = '&units='
  var input;
  var input2;
  var input3;

function weatherAsk(){
  var url = api + input.value() + apiKey + unitsID +input2.value();

  loadJSON(url, gotData);
}


function gotData(data){
  weather = data;
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(155,55,5);
  textAlign(CENTER);

  var button = select('#submit');
  input = select('#city');
  button.mousePressed(weatherAsk);
  var button2 = select('#submit2');
  input2 = select('#units');
  button2.mousePressed(weatherAsk);
  
}

function keyPressed() {
  if (keyCode === ENTER){
    weatherAsk();
  }
}
function draw(){
  background(155,55,5);
  stroke(4);
  textSize(25);

  if(weather){
    textAlign(CENTER);
    fill(255);
    text(weather.name,width/2,height/2-150);
    text(weather.main.temp,width/2,height/2+25);
    var drawing =
    ellipse(width/2,height/2-75,weather.main.temp,weather.main.temp)

  }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    background(155,55,5 );


}