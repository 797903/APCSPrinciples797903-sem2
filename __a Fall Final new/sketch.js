// Garrett Faure
// 09/12
var ships;
var bigFella = [];
var n = 4; // number of planets

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(200, 100, 50);// background color
//loadBalls(2); // change class to loadBalls to equivalent
  ships = new Ship(random(700), random(700), 3, 3, 0, color((random(0, 255)), random(0, 255), random(0, 255)));
for(var i = 0; i < n; i++){
   bigFella[i] = new Ball(random(0, 700), random(0, 700), -1, color(random(255), random(255), random(255)), random(-1, 1), random(-1, 1));
 } // initialize the objects
}

function draw() {
  background(200, 100, 50);
  ships.run(); // run the ships
  for(var i = 0; i < n; i++){
  bigFella[i].run(); //traverse array
}
}
