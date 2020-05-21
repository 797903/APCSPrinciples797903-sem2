function setup() {
  createCanvas( 500, 500 );
  mousePressed( 0, 0 );
  background( 0, 10 );
}

function draw() {
  j = 0;
  while(++j<num) {
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

    while(i++<5) {
      base = 50/i;
      push();
      blendMode(ADD);
      stroke( base + (1-target.d)*100, base+50, base + target.d*250, base );
      strokeWeight( w*=1.5 );
      line( target.x, target.y, oldX, oldY );
      pop();
    }
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
/**/
