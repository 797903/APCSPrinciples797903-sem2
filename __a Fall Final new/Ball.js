class Ball{
  constructor(x, y, id, clr, dx, dy){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    this.clr = clr
    this.w = 50
    this.id = id

  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    this.vel.limit(4);
    var distToShip;
    // this.vel.add(this.acc)
      distToShip = this.loc.dist(ships.loc); //distance to the ship
      if(distToShip < 50){ //distance to planet
        this.loc.x = random(0, 500);
        this.loc.y = random(0, 500);
      }
      // increases velocity based on direction traveling in.
        if(distToShip < 175){
          this.vel.x = Ship.vel.dx;
          this.vel.y = Ship.vel.dy;
      }

  //     for(var i = 0; i < n; i++){ // no overlapping
  //       for(var j = 0; j < n; j++){
  //       if(i != j && bigFella[i]
  //     }
  //   }
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
