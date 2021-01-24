class Box{
        constructor(x,y,width,height){

            var groundOptions={
                isStatic:true
            }
            this.body=Bodies.rectangle(x,y,width,height,groundOptions);
            this.width=50;
            this.height=60;
            World.add(world,this.body);
        }
        
           display(){
            var pos=this.body.position;
            push();
            rectMode(CENTER);
            strokeWeight(4);
            fill("pink");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
           }
    }
