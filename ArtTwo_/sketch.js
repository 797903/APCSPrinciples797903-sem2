// Garrett Faure
// 01/29
var boids = [];
var pointX, pointY;

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(0, 0, 0);// background color
}

function mouseClicked(){
  pointX = mouseX;
  pointY = mouseY;
  loadBoids(50);
  return true;
}

// Draw runs 30 times a second
function draw() {
  //background(0, 0, 0);
  if(mouseClicked === true){
    // Boid.loc.x = mouseX;
    // Boid.loc.y = mouseY;
    runBoids();
  }
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(windowWidth*100, height*100, random(-5, 5), random(-5, 5));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
