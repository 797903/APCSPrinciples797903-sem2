class Ball{
  constructor(x, y, id, clr, dx, dy, tempvel){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    this.clr = clr
    this.w = 50
    this.id = id
    this.tempvel = this.vel;
  }

  run(){
    this.checkEdges();
    this.render();
    this.update();
  }

  update(){
    var distToShip;
    distToShip = this.loc.dist(ships.loc); //distance to the ship
    // increases velocity based on direction traveling in.
      if(distToShip < 175){
        this.vel.x = this.vel.x*1.5;
        this.vel.y = this.vel.y*1.5;
        fill(0, 0, 0)
        textSize(25);
        text('AHHH', this.loc.x-35, this.loc.y+12.5);
        fill(0, 0, 0)
    }
      else{
        this.vel = this.tempvel;
      }
      if(distToShip < 40){ //distance to planet
        this.loc.x = random(0, 500);
        this.loc.y = random(0, 500);
      }
      this.loc.add(this.vel);
      this.vel.limit(3);
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

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
}
