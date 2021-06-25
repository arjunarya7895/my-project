class Wall {
    constructor(posX) {
      
      this.rx = posX; //setting the x posing where platform will be created  
      this.ry = height-random([550,350]);   //setting y position where platform will be created to height( is a variable that stores height of canvas)
      this.spt=createSprite(this.rx, this.ry); //using rx,ry,rw,rh to give values 
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.2;
      }
   
  }
