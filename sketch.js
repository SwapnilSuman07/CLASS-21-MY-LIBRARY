var movingRect, fixedRect;
var gameobject1,gameobject2;


function setup() {

  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityY=4;
  fixedRect.velocityY=-4;
  gameobject1=createSprite(200,50,50,50);
  gameobject2=createSprite(200,350,50,50);
  gameobject1.velocityY=4;
  gameobject2.velocityY=-4;
}

function draw() {
  background("yellow"); 
  
 /* movingRect.x = mouseX;
  movingRect.y = mouseY;*/

  bounceOff(gameobject1,gameobject2);
  bounceOff(movingRect,fixedRect);

  console.log(movingRect.x - fixedRect.x);

  

  drawSprites();
}
