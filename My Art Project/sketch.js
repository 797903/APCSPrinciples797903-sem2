// Garrett Faure
// Feb. 5, 2020
var balls = [];
var pos = [];
var num = 100;
var speed = 10;
var setD = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBalls(2);
  mousePressed(0, 0);
}

function mousePressed(e, setD) {
  var m = mouseX;
  var n = mouseY;
  var i = 0;
  while(++i<num) {
		var a = createVector(random(speed)).rotate(random(num)*TAU);
      var x = m;
      var y = n;
      var aX = Ball.x;
      var aY = Ball.y;
      var d = random(setD*.5, setD);
      pos[i] = pos[x, y, aX, aY, d]
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(windowWidth), random(windowHeight), .5, .5);
  }
}

function draw(){
  var m = mouseX;
  var n = mouseY;
  for(var j = 0; j<num; j++){
    var x = m;
    var y = n;
    var aX = Ball.x;
    var aY = Ball.y;
    var d = random(setD*.5, setD);
    var target = pos[x, y, aX, aY, d];

    target.aX *= .98;
    target.aY *= .98;

    var oldX = target.x;
    var oldY = target.y;
    target.x += target.aX;
    target.y += target.aY + 1;
    target.d *= .98;

    var w = target.d*5;

    for(var i = 0; i<5; i++){
      base = 50/i;
      push();
      blendMode(ADD);
      stroke(base + (1-target.d)*100, base+50, base + target.d*250, base);
      strokeWeight(w*=1.5);
      line(target.x, target.y, oldX, oldY);
      pop();
    }
  }
  for(var i = 0; i<balls.length; i++){
  balls[i].run();
  }
}
