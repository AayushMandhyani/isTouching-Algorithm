var fixedRect,movingRect;


function setup() {
  createCanvas(windowWidth, windowHeight);
 fixedRect =  createSprite(400, 200, 50, 50);
 movingRect = createSprite(300, 100, 20,20);
}

function draw() {
  background("black");  
 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 
 
  drawSprites();



}