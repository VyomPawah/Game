var backgroundImg,EcarImg,fireImg,PetrolcarImg,BoltImg,FircarImg,FireballImg,EcarDImg
var fire,Ecar,Petrolcar,shoot,Firecar,Fireball,red,EcarD
var shootGroup
var FireballGroup
var gameState="start"
var explosion1
function preload(){
    EcarImg = loadImage("Ecar.png");
    fireImg= loadImage("fire.png");
   PetrolcarImg = loadImage("PetrolCar.png");
   BoltImg=loadImage("Bolt.png")
   FirecarImg=loadImage("Firecar.png")
   FireballImg=loadImage("Fireball.png")
   EcarDImg=loadImage("EcarD.png")
bg=loadImage("Town.png")
gameoverImg=loadImage("gameOver.png")
winImg=loadImage("YouWin.png")
restartImg=loadImage("restart.png")
  }
  function setup() {
    createCanvas(1800, 1800);
    Ecar = createSprite(1000,500,20,30);
    Ecar.addImage(EcarImg); 
    Ecar.scale = 1;

    Petrolcar=createSprite(150,500,20,50)
    Petrolcar.addImage(PetrolcarImg)
    Petrolcar.scale=1




    fire1=createSprite(400,560,5,10)
    fire1.addImage(fireImg)
    fire1.scale=0.3
    
    fire2=createSprite(450,560,5,10)
    fire2.addImage(fireImg)
    fire2.scale=0.3

    fire3=createSprite(850,560,5,10)
    fire3.addImage(fireImg)
    fire3.scale=0.3

    fire4=createSprite(1050,560,5,10)
    fire4.addImage(fireImg)
    fire4.scale=0.3

    shootGroup = createGroup();
    FireballGroup = createGroup();

    gameover=createSprite(500,250)
    gameover.addImage(gameoverImg)
    gameover.scale=0.5
gameover.visible=false

win=createSprite(500,250)
win.addImage(winImg)
win.scale=0.5
win.visible=false

restart=createSprite(600,250)
restart.addImage(restartImg)
restart.scale=0.5
restart.visible=false


   
  }
  function draw() {
    background(bg);
    if(gameState=="start"){

    
    Fireball()
if(keyDown("Up")){
Ecar.y=Ecar.y-10
}
if(keyDown("Down")){
    Ecar.y=Ecar.y+10
}
if (keyDown("space")) {
    createShoot();
    
  }
  if(shootGroup.isTouching(Petrolcar)){
   var explosion= createSprite(100, 100, 10, 10); 
    explosion.addImage(FirecarImg);
    explosion.x = Petrolcar.x;
    explosion.y=Petrolcar.y;
    explosion.scale=0.5
    Petrolcar.destroy()
   Won()
    gameState="end"
    console.log("lost")
    red.velocityX=0
    FireballGroup.destroyEach()
    shootGroup.destroyEach()
    
    
}
if(FireballGroup.isTouching(Ecar)){
explosion1=createSprite(1000,500,20,30)
  explosion1.addImage(EcarDImg)
  explosion1.x=Ecar.x
  explosion1.y=Ecar.y
  explosion1.scale=0.4
  //Ecar.destroy()
  gameState="end"
  restart.visible=true
  console.log("lost")
  red.destroy()
  
}
    }
    if(mousePressedOver(restart)){
      reset()
    }
  if(mousePressedOver(win)){
nextPages()
  }
    drawSprites()
  }
  function createShoot() {
    shoot= createSprite(100, 100, 60, 10); 
    shoot.addImage(BoltImg);
    shoot.x = 1000;
    shoot.y=Ecar.y;
    shoot.velocityX = -10;
    shoot.lifetime = 500;
    shoot.scale = 0.3;
    shootGroup.add(shoot);
  } 

  function Fireball() {
    if (frameCount % 60 === 0) {
   red = createSprite(Petrolcar.x,Petrolcar.y, 10, 10);
   red.addImage(FireballImg);
   red.velocityX = 800;
   red.lifetime = 500;
    red.scale = 2;
    FireballGroup.add(red)
}}
function reset(){
  gameState="start"
  restart.visible=false
explosion1.visible=false
}
function nextPages(){
  window.location="page3.html"
}

function Won(){
  document.getElementById("button4").style.display="inline-block"
}
function winning(){
  window.location="page3.html"
}