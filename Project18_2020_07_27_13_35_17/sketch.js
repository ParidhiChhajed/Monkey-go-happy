//Global Variables
var back_image;
var player_running;
var BananaImage, Bananas, BananasG;
var ObstacleImage, Obstacles, ObstaclesG;
var Score;
var Background;
var Ground;
var Monkey;
var ObstaclesGroup;

function preload() {
  back_image = loadImage("jungle.jpg");

  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  BananaImage = loadImage("Banana.png");
  
  ObstaclesImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600, 300);

  Background = createSprite(300, 300, 10, 10);
  Background.addImage("BackPicture", back_image);
  Background.velocityX = -3;

  Ground = createSprite(300, 270, 600, 10);
  Ground.visible = false;

  Monkey = createSprite(100, 220, 10, 10);
  Monkey.addAnimation("Player", player_running);
  Monkey.scale = 0.2;
  Monkey.collide(Ground);
  
  score = 0;
}


function draw() {
  background(255);

  if (Background.x < 0) {
    Background.x = 300;
}
  
  if(Monkey.isTouching(BananasG)){
    Bananas.destroyEach();
    score = score + 2;
  }
  
  if (Monkey.isTouching(ObstaclesG)){
    Monkey.scale = 0.2;
  }
  
  ObstaclesG = new Group();
  BananasG = new Group();
  
  spawnBananas();
  spawnObstacles();

  drawSprites();
  
  stroke("white");
  textSize("20");
  text("Score "+score,500,50);
  switch (score){
    case 10: Monkey.scale = 0.12;
      break;
    case 20: Monkey.scale = 0.14;
      break;
    case 30: Monkey.scale = 0.16;
      break;
    case 40: Monkey.scale = 0.18;
      break;
    default : break;
       
  }
}

function spawnBananas() {
  if (frameCount % 80 == 0) {
   Bananas = createSprite(400,150,10,10);
   Bananas.addImage("Banana",BananaImage);
   BananasG.add(Bananas);
   BananasG.setLifetimeEach = 150;
   BananaG.setVelocityXEach = -3;
   }
}

function spawnObstacles(){
  if(frameCount % 60 == 0){
    Obstacles = createSprite(310,270,10,10);
    Obstacles.addImage("Obstacle",ObstaclesImage);
    ObstaclesG.add(Obstacles);
    ObstaclesG.setLifetimeEach = 150;
    ObstaclesG.setVelocityXEach = -3;
  }
}