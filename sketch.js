
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var log ,log1,log2;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 ground =new Ground (400,600,800,20);  
	paper=new Paper(200,700,10);
   log=new Log(600,510,20,120);
   log2=new Log(550,500,120,20);
   log1=new Log(470,500,20,120);
	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  log.display();
  log1.display();
  log2.display();
  keyPressed();
  
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1.5});
    
  }
}

