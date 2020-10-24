class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, option); 
      this.leftWallBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, option);
      this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, option)
      this.width = width;
      this.height = height;
      this.wallThickness=20;
      this.image=loadImage("dustbin.png")
      World.add(world, this.bottomBody,this.leftWallBody,this.rightWallBody);
    }
    display(){
      var posBottom=this.bottomBody.position;
      var posLeft=this.leftWallBody.position;
      var posRight=this.rightWallBody.position; 
      push()
      translate(posLeft.x, posLeft.y); rectMode(CENTER) 
      strokeWeight(4);
       angleMode(RADIANS) 
       fill(255) 
       
       //rect(0,0,this.wallThickness, this.dustbinHeight);
      pop() 
      rectMode(CENTER)
      angleMode(RADIANS) 
      rotate(-1*this.angle) 
      
      image(this.image, 0,-this.height/2,this.width, ths.height)
      
    }
  }