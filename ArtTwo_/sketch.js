// Garrett Faure
// 01/29
var boids = [];
var value = 0;
// var pointX, pointY;

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(255);// background color
loadBoids(5);
frameRate(30)
}

// Draw runs 30 times a second
function draw(){
  // mouseClicked();\
  runBoids();
  if(mouseIsPressed){
    value = 1;
    for(var i = 0; i < boids.length; i++){
      boids[i].loc = createVector(mouseX, mouseY)
    }
  }
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(1, 799), random(1, 799), random(-10, 10), random(-10, 10));
  }
}

function runBoids(){
  if(value === 1){
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
    }
  }
}
