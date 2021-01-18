
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var paper;

var dustbin;

function setup () {

	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,450,800,15);

	paper = new Ball (120,100,70);

	dustbin = new Bin (620,390,100,20);
	

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);

  background("yellow");

  paper.display ();
  ground.display ();
  dustbin.display ();
  

 
}

function keyPressed () {

	if (keyCode == UP_ARROW) {

	   Matter.Body.applyForce ( paper.body , paper.body.position, { x:540,y:-1000 } ); 
	
	}

}
