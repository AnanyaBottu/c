const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;





function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
    world = engine.world;
  //createSprite(200, 200, 100, 50);
  //createSprite(300, 300, 100, 50);
  //createSprite(400, 400, 100, 50);
  //createSprite(500, 500, 100, 50);

    box1 = new Box(200,200,30,350);
    box2 = new Box(700,200,30,350);
    box3 = new Box(400,250,120,300);
    box4 = new Box(300,250,30,300);
    box5 = new Box(600,250,30,300);
tri1 = new Triangle(400,250,520,250,500,150);
  

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  tri1.display();
  //fill("#3cf902");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  drawSprites();

}