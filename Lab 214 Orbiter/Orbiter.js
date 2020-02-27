class Orbiter{
  constructor(r, ang, clr, x, y){
    this.r = r;
    this.clr = color(20, 20, 0);
    this.ang = PI/2;
    this.loc = createVector(x, y);
  }
run(){
  this.render();
}

render(){
  fill(random(255), random(255), random(255));
  ellipse(this.loc.x, this.loc.y, 2, 2)
}
}
