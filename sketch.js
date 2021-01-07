
var monkey , monkey_running, ground, groundImg;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  groundImg = loadImage("monkeyBackground.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(500,300);

  monkey = createSprite(70,235,10,10)
  monkey.addAnimation("monkey1",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,290,600,5)
  ground.addImage(groundImg);
  ground.scale = 2;
 // ground.debug = true;
  ground.setCollider("rectangle",0,0,ground.width,8);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
 background(225);
  
  ground.velocityX = -2;
  
  if(ground.x <0){
    ground.x = ground.width/2;  
  }
  
  if(keyDown("space")){
    monkey.velocityY = -2;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  score = Math.ceil(frameCount/frameRate())
  
  food();
  obstacles();
  
  drawSprites();
  
  textSize(20);
  text("Survival Time : "+ score,250,30);
  
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(490,Math.round(random(120,200)),10,10); 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -2;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%200===0){
    obstacle = createSprite(490,265,10,10); 
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}