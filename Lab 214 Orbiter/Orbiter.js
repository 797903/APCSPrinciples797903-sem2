class Orbiter{
  constructor(r, ang, x, y){
    this.r = r;
    this.ang = ang;
    this.loc = createVector(x, y);
  }

run(){
  this.update();
  this.render();
}

update(){
  this.ang += 0.05;
}

render(){
  fill(random(255), random(255), random(255));
    for(var i = 0; i < balls.length; i++){
      ellipse(balls[i].loc.x + cos(this.ang)*this.r, balls[i].loc.y + sin(this.ang)*this.r, 5, 5)
    }
  }
}
