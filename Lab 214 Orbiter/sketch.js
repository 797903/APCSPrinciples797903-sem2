// Garrett Faure
// Feb. 5, 2020
var balls = [];
var orbiters = [];
var num = 2

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBalls(num);
//  loadOrbiters(num);
}

function draw(){
for(var i = 0; i < balls.length - 1; i++){
  balls[i].run;
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), .5, .5);
  }
}
