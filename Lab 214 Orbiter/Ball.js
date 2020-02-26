class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
  }

  run(){
    this.update();
    this.checkEdges();
    this.render();
  }

  update(){
    for(var i = 0; i < balls.length - 1; i++){
      this.loc.add(this.vel);
    }
  }

  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
  }
}

  render(){
    ellipse(this.loc.x, this.loc.y, 40, 40);
    fill(100, 30, 200);
    for(var i = 0; i < balls.length - 1; i++){
      orbiters[i] = new Orbiter(10, PI/2, color(random(255), random(255), random(255)), 0, 0);
    }
  }

  orbRun(){
    for(var i = 0; i < balls.length - 1; i++){
      orbiters[i].loc.x = cos(Orbiter.ang)*Orbiter.r;
      orbiters[i].loc.y = sin(Orbiter.ang)*Orbiter.r;
    }
  }
}
