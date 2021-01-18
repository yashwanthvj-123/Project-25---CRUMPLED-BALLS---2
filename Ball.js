
class Ball {

    constructor(x,y,r) {

      var option = { isStatic:false , density:1.2 , restitution:0. , friction:0.5 } 

      this.body=Bodies.circle(x,y,r,option);
      this.radius=r;
      this.image=loadImage("paper.png");

      World.add(world,this.body);
    
    }

    display () {

        var pos =this.body.position; 
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
}
