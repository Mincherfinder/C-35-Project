var baloon, balloonImage, bckImage;
function preload() {
bckImage=loadImage("images/Hot Air Ballon-01.png");
balloonImage = loadAnimation("images/Hot Air Ballon-02.png", "images/Hot Air Ballon-03.png", "images/Hot Air Ballon-04.png");
}
function setup() {
  createCanvas(800,500);
 balloon = createSprite(400, 200, 50, 50);
 balloon.addAnimation("Balloon", balloonImage)
 balloon.scale = 0.5
}

function draw() {
  background(bckImage);  
  drawSprites();
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
  }
   else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
   else if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }
}