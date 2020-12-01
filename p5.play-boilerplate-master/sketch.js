var fixedRectangle;
var movingRectangle;
var box1;
var box2;
var bye;

function setup() {
  createCanvas(600,600);
movingRectangle = createSprite(200, 200, 40, 180);
movingRectangle.shapeColor = "red";

fixedRectangle = createSprite(400, 400, 40, 180);
fixedRectangle.shapeColor = "blue";

box1 = createSprite(500, 50, 100, 100);
box1.shapeColor = "pink";
box1.velocityY = 1;

box2 = createSprite(500, 300, 100 ,100);
box2.shapeColor = "purple";
box2.velocityY = -1;

bye = createSprite(250, 250, 30, 70);
bye.shapeColor = "green";
   
 
  
}

function draw() {
  background(255,255,255); 
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
 
  if (isTouching(movingRectangle, bye)) {
    movingRectangle.shapeColor = "yellow";
    bye.shapeColor = "yellow";
 }

  else {
    movingRectangle.shapeColor = "red";
    bye.shapeColor = "green";

  }

  bounceOff(box1, box2);






  drawSprites();
}



