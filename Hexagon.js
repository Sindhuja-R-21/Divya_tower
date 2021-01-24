class hexagon{

    constructor(x,y,width,height){

        var Options={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,Options);
    this.width=40;
    this.height=40;
    this.image=loadImage("sprites/polygon.png");

    World.add(world,this.body);
    
    }
    display(){
        var place=this.body.position;
       rectMode(CENTER);  
        rect(place.x,place.y,this.width,this.height);
    }
}