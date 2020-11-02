var fixedRect, movingRect;
var sketch, sketch2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sketch = createSprite(600,40,50,80);
  sketch2 = createSprite(600,150,60,90);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
/*if(collsion()){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";  
 }*/
 collsion(movingRect,fixedRect)
 collsion(movingRect,sketch);
 collsion(movingRect,sketch2);
  drawSprites();
}
