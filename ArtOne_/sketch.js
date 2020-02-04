// Garrett Faure
// 01/29
var boids = [];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(0, 0, 0);// background color

loadBoids(50); //loads boids
}

// Draw runs 30 times a second
function draw() {
  //background(0, 0, 0);
  runBoids();
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-10, 10), random(-10, 10))
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
