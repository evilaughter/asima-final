var blood,maze,ball,maze1
function preload(){
  bloodImg=loadImage ("blood.png")
  //mazeImg=loadImage ("maze.png")
 // maze1Img=loadImage("maze1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-180);
  blood = createSprite(400, 200, 50, 50);
  blood.addImage(bloodImg);
  blood.scale=0.09;
  
 // maze.addImage(mazeImg);
  maze = createSprite(414.6,60,620,10)
  maze1 = createSprite(100,160,10,210);
  maze2 = createSprite(100,450,10,250);
  maze3 = createSprite(500,570,800,10);
  maze4 = createSprite(900,360,10,420);
  maze5 = createSprite(205,210,10,100);
  maze6 = createSprite(150,210,100,10);
  maze7 = createSprite(182,120,155,10);
  maze8 = createSprite(255,170,10,90);
  maze9 = createSprite(304,210,90,10);
  maze10 = createSprite(180,154,60,10);
  maze11 = createSprite(370,115,10,100);
  maze12 = createSprite(440,90,10,50);
  maze13 = createSprite(580,90,10,49);
  maze14 = createSprite(530,110,90,10)
  maze14.shapeColor="black"
 // maze1.addImage(maze1Img);

  
  
 // maze1.addImage(maze1Img);
 // maze1.scale= 0.5;
 // maze1 = createSprite(25,100)
}

function draw() {
  background(231,76,100);
  if(keyDown (UP_ARROW) ){
    blood.y = blood.y-4;
  }
  if(keyDown (DOWN_ARROW)){
blood.y=blood.y+4;
  }
  if (keyDown(LEFT_ARROW)){
    blood.x=blood.x-4;
  }
if (keyDown(RIGHT_ARROW)){
  blood.x=blood.x+4;
}

  
  drawSprites();
}
