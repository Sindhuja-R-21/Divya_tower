class RubberBand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.rubber = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rubber);
    }
    fly(){
        this.rubber.bodyA=null;
    }

    display(){
        if(this.rubber.bodyA){
        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}