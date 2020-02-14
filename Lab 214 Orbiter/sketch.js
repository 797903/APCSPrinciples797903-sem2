// Garrett Faure
// Feb. 5, 2020
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  loadBalls(2);
}

function draw(){
for(var i = 0; i<balls.length; i++){
  balls[i].run;
}
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(windowWidth), random(windowHeight), .5, .5);
  }
}
