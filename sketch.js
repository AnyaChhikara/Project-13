var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg;
var leaves , leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);

  edges = createEdgeSprites();
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit 
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  var select_sprites = Math.round(random(1,2));
  console.log(select_sprites);

  if(frameCount % 80===0){
    if(select_sprites === 1){
      spawnApples();
    }
    else{
      spawnLeaves();
    }
  }

  rabbit.x = mouseX;
  rabbit.collide(edges);

  
  drawSprites();
}

function spawnApples(){

  apple = createSprite(random(100,300),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 133.3;

  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}

function spawnLeaves(){
  leaves = createSprite(random(100,300),30,10,10);
  leaves.addImage(leavesImg);
  leaves.velocityY = 3;
  leaves.scale = 0.1;
  leaves.lifetime = 133.3;
}

