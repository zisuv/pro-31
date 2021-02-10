const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var drops=[]
function preload(){
  
}

function setup(){
   
    var canvas = createCanvas(700,650);
    engine = Engine.create();
    world = engine.world;

   

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }

    }
}

function draw(){
    Engine.update(engine);
    background("BLACK");
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].reset()
        
    }

   
    drawSprites();
}   

