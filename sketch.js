
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy1;
var ground ;
var TREE , tree_1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stoneObj;
var flyer;

function preload()
{
tree_1 = loadImage("image1/tree.png")
boy1 = loadImage("image1/boy.png")	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	



	

	

	mango1 = new fruit(920,330,20,20)
	mango2 = new fruit(920,270,20,20)
	mango3 = new fruit(960,220,20,20)
	mango4 = new fruit(980,300,20,20)
	mango5 = new fruit(1000,170,20,20)
	mango6 = new fruit(1080,215,20,20)
	mango7 = new fruit(1040,300,20,20)
	mango8 = new fruit(1100,270,20,20)
	mango9 = new fruit(1140,320,20,20)
	mango10 = new fruit(1020,240,20,20)
	


	ground = new floor(700,600,1400,10)

	stoneObj = new stn(140,470,20,20,PI/2)

	flyer = new thrower(stoneObj.body,{x:140, y:470})


	TREE = new mangotree(1000,350,10,10)
	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
	background("lightgreen");

 
	


  
image (boy1, 120,390,140,270)




TREE.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

stoneObj.display();

ground.display();

flyer.display();

detectCollision(stoneObj,mango1)
	detectCollision(stoneObj,mango2)
	detectCollision(stoneObj,mango3)
	detectCollision(stoneObj,mango4)
	detectCollision(stoneObj,mango5)
	detectCollision(stoneObj,mango6)
	detectCollision(stoneObj,mango7)
	detectCollision(stoneObj,mango8)
	detectCollision(stoneObj,mango9)
	detectCollision(stoneObj,mango10)
  


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    flyer.gone();
}

function detectCollision(lstone, lmango){
	stoneBodyPosition = lstone.body.position
	mangoBodyPosition = lmango.body.position
	 
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
	
	if(distance<=lmango.r + lstone.r){
	
	Matter.Body.setStatic(lmango.body,false);
	
	}
}

function keyPressed() {

	if(keyCode === 32){
	
	Matter.Body.setPosition(stoneObj.body,{x:140, y:470})
	flyer.attach(stoneObj.body)
	
	
	}


}





