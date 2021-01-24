
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box;
var stone;
var r;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
    world = engine.world;

    box=new Box(800,200,50,60);
    stone=new hexagon(200,300,10,10);

    r = new RubberBand(stone.body,{x:200,y:100});

    Engine.run(engine);
}

function draw() {
    background("green");
    box.display();
    stone.display();
    r.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(r.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    r.fly();
}