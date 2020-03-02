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
    var distToShip;
    // this.vel.add(this.acc)
      distToShip = this.loc.dist(ships.loc); //distance to the ship
      if(distToShip < 100){ //distance to planet
        this.loc.x = random(0, 500);
        this.loc.y = random(0, 500);
      }
    if(){
      // increases velocity based on direction traveling in.
    }
    if(distToShip < 175){
      this.loc.add(this.vel);

    }

  //     for(var i = 0; i < n; i++){ // no overlapping
  //       for(var j = 0; j < n; j++){
  //       if(i != j && bigFella[i]
  //     }
  //   }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
}
