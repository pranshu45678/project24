const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone1;
var iron;
var sand;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(56,46,55)
    stone1=new Stone(500,550,100,120)
    iron1=new Iron(400,450,95,110)
     sand=new Sand(860,440,80)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone1.display();
    iron1.display();
    sand.display();
}