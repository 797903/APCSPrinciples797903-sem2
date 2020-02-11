// Garrett Faure
// Feb. 5, 2020
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBalls(2);
  mousePressed(0, 0);
}

function draw(){
  background(0);
  j = 0;
  for(var i = 0; i<balls.length; i++){
  balls[i].run();
  while(j++<num) {
    target = pos[j];
    target.aX *= .98;
    target.aY *= .98;

    oldX = target.x;
    oldY = target.y;
    target.x += target.aX;
    target.y += target.aY + 1;

    target.d *= .98;
    w = target.d*5;
    i = 0;
  }
}
    while(i++<5) {
      base = 50/i;
      push();
      blendMode(ADD);
      stroke(base + (1-target.d)*100, base+50, base + target.d*250, base);
      strokeWeight(w*=1.5);
      line(target.x, target.y, oldX, oldY);
      pop();
    }
  }

function mousePressed(e, setD=1) {
  pos = [];
  num = 100;
  speed = 10;
  m = mouseX;
  n = mouseY;
  i = 0;
  while(++i<num) {
		a = createVector(random(speed)).rotate(random()*TAU);
    pos[i] = {
      x: m,
      y: n,
      aX: a.x,
      aY: a.y,
      d: random(setD*.5, setD)
    }
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(windowWidth), random(windowHeight));
  }
}
