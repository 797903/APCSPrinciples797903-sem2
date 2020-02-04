class Boid{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
  }
  run(){
    //console.log("Peace");
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

    stroke(random(255), random(255), random(255));
    strokeWeight(0.05);

    for(var i=0; i<boids.length; i++){
      var distance = this.loc.dist(boids[i].loc);
      if(distance < 200 && distance !==0){
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }
    }
  }
}
