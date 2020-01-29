class Boid{
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
    
  }

  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.dx = -1*this.vel.dx;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      // this.vel.dx = -1*this.vel.dx;
  }
}
  render(){
    for(var i=0; i<boids.length[i]-1; i++){
      var distance = dist(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      if(distance<200 && distance !==0){
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }
    }
  }
}
