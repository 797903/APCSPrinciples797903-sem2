class Ball{
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  this.run(){
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
    strokeWeight(0.25);
    for(var i=0; i<balls.length; i++){
      var distance = this.loc.dist(mouseX, mouseY);
      if(distance < 150 && distance !==0){
// ADD REPULSION
      }
    }
  }
}
