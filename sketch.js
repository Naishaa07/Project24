
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, db1, db2, db3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20);
	paper = new Paper(50,675,30);
	db1 = new dustbin(675,670,200,20);
	db2 = new dustbin(565,630,20,100);
	db3 = new dustbin(785,630,20, 100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  db1.display();
  db3.display();
  db2.display();
  //drawSprites();
 keypressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:13,y:-13});
		
	}


}



