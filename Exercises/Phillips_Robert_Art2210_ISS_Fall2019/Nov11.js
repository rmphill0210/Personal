//var lineX
var url = "http://api.open-notify.org/iss-now.json";
var url2a = "https://api.opencagedata.com/geocode/v1/json?q="
var url2b = "&key=fa230b27f2644f409e500a5e302d92d8&pretty=1"
var url3;
var lat ;
var long ;
var xHeight = 0;
var yHeight = 0;
var formatted;
var continent;

// api = fa230b27f2644f409e500a5e302d92d8

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(155,55,5);
  setInterval(askISS, 10000);
  textAlign(CENTER);

  
}

function askISS(){
  loadJSON(url, gotData, 'jsonp');
  url3 = url2a + lat + "+" + long + url2b;
  loadJSON(url3, gotAddress);

}

function gotAddress(address){
  formatted = address.results[0].formatted;
  continent = address.results[0].components.continent;
}

function gotData(data){
  lat = data.iss_position.latitude;
  long = data.iss_position.longitude;
}



function draw(){
  background(155,55,5);
  stroke(2);
  textSize(25);
  text('Latitude / Longitude:', width/4,height/2-30);
  text(lat+' / '+long, width/4,height/2);
  text('Current Location:',width/4*3,height/2-30);
  text(formatted+',',width/4*3,height/2);
  text(continent,width/4*3,height/2+30);

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    background(155,55,5 );


}