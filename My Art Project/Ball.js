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
      this.vel.y = -1*this.vel.y;
  }
}

  render(){
    fill(random(255), random(255), random(255));
    ellipse(35, 35)
    for(var i=0; i<balls.length; i++){
      let d = int(dist(mouseX, mouseY));
      if(d < 150 && d !==0){
// ADD REPULSION
      }
    }
  }
}
