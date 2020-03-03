class Ship{
  constructor(x, y, dx, dy, id, clr){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    this.acc = createVector(0, 0)
    this.clr = color(255, 255, 255);
    this.w = 15
    this.id = id
    if(this.id < 0){
      this.w = 50
    }
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x
      }
      if(this.loc.x > width){
        this.vel.x = -this.vel.x
      }
      if(this.loc.y < 0){
        this.vel.y = -this.vel.y
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y
    }
  }

  update(){
    var distTobigFella = [];
    for(var i = 0; i < n; i++){
      distTobigFella[i] = this.loc.dist(bigFella[i].loc);
      if(distTobigFella[i] < 700){
        for(var i = 0; i < n; i++){
        this.acc = p5.Vector.sub(bigFella[i].loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
    this.vel.add(this.acc)
    this.loc.add(this.vel);
    this.vel.limit(4);
    }
  }
}

  render(){
    fill(this.clr);
    this.angle = this.vel.heading() + PI/2
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5, 8, 5, 8, 0, -8);
    pop();
  }
}
