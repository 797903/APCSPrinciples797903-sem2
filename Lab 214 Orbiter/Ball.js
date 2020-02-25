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
      this.loc.add(this.vel);
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
    }
  }
