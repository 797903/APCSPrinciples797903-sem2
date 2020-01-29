// Garrett Faure
// 01/29
var boids = [];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(1000, 800);
cnv.position((windowWidth-width)/2, 30);
background(255, 255, 255);// background color

loadBoids(50); //loads boids
}

// Draw runs 30 times a second
function draw() {
  background(255, 255, 255);
  runBoids();
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-1, 1), random(-1, 1))
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
