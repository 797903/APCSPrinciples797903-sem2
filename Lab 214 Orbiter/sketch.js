// Garrett Faure
// Feb. 28, 2020
var balls = [];
var orbiters = [];
var num = 2

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBalls(num);
  loadOrbiters(num);
}

function draw(){
  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
    orbiters[i].run();
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), random(-1, 1), random(-1, 1));
  }
}

function loadOrbiters(n){
  for(var i = 0; i < n; i++){
    orbiters[i] = new Orbiter(75, PI, 0, 0);
  }
}
