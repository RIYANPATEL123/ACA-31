
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png");
 }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);

  ironman = createSprite(200,400,20,20);
  ironman.addImage(ironmanImg);
  ironman.scale = 0.3;

}

function draw() {
  
 
    
    drawSprites();
   
}

