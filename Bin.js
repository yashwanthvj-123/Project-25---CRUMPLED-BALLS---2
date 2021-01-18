
class Bin {

    constructor(x,y,w,h) {

        var option= { isStatic:true} 

        this.body1 = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        this.image=loadImage("dustbingreen.png");
        World.add(world, this.body1);

        this.body2 = Bodies.rectangle(x-60, y, 20, 100, option);
        this.width2 = 20
        this.height2 = 100
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(x+60, y, 20, 100, option);
        this.width3 = 20
        this.height3 = 100
        World.add(world, this.body3);
        
    } 

    display () {

       

        var pos2 =this.body2.position;
        rectMode(CENTER);
        stroke("black");
        fill("yellow");
        rect(pos2.x, pos2.y,this.width2, this.height2);

        var pos3 =this.body3.position;
        rectMode(CENTER);
        stroke("black");
        fill("yellow");
        rect(pos3.x, pos3.y,this.width3, this.height3);

        var pos1 =this.body1.position;
        imageMode(CENTER);
       image(this.image,pos1.x, pos1.y,this.width+70, this.height+95);

      
    }

}
