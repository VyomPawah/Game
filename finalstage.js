var backgroundImg,EcarImg,fireImg,PetrolcarImg,BoltImg,FircarImg,FireballImg,EcarDImg
var fire,Ecar,Petrolcar,shoot,Firecar,Fireball,red,EcarD,Petrolcar2,Kingcar,red3
var shootGroup
var shootGroup2
var FireballGroup
var FireballGroup2,FireballGroup3
var gameState="start"
var explosion1,explosion2,explosion3
var score=0
function preload(){
    EcarImg = loadImage("Ecar.png");
    fireImg= loadImage("fire.png");
   PetrolcarImg = loadImage("PetrolCar.png");
   BoltImg=loadImage("Bolt.png")
   FirecarImg=loadImage("Firecar.png")
   FireballImg=loadImage("Fireball.png")
   EcarDImg=loadImage("EcarD.png")
   Petorlcar2Img=loadImage("Petrolcar.png")
   KingcarImg=loadImage("Kingcar.png")
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

    Kingcar=createSprite(150,300,20,50)
    Kingcar.addImage(KingcarImg)
    Kingcar.scale=1.5

    Petrolcar=createSprite(150,600,20,50)
    Petrolcar.addImage(PetrolcarImg)
    Petrolcar.scale=1

    Petrolcar2=createSprite(150,150,20,50)
    Petrolcar2.addImage(PetrolcarImg)
    Petrolcar2.scale=1

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
    shootGroup2=createGroup();
    FireballGroup = createGroup();
    FireballGroup2=createGroup();
    FireballGroup3=createGroup();

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
    Fireball2()
    Fireball3()
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
    score=score+1
    result()
    console.log("lost")
    red.velocityX=0
    FireballGroup.destroyEach()
    shootGroup.destroyEach()  
}

if(shootGroup.isTouching(Petrolcar2)){
 var explosion2= createSprite(100, 100, 10, 10); 
  explosion2.addImage(FirecarImg);
  explosion2.x = Petrolcar2.x;
  explosion2.y=Petrolcar2.y;
  explosion2.scale=0.5
  Petrolcar2.destroy()
  score=score+1
  result()
  console.log("lost")
  red2.velocityX=0
  FireballGroup2.destroyEach()
  shootGroup.destroyEach()  
}


if(shootGroup.isTouching(Kingcar)){
 var explosion3= createSprite(100, 100, 10, 10); 
  explosion3.addImage(FirecarImg);
  explosion3.x = Kingcar.x;
  explosion3.y=Kingcar.y;
  explosion3.scale=0.5
  Kingcar.destroy()
  score=score+1
  result()
  console.log("lost")
  red3.velocityX=0
  FireballGroup3.destroyEach()
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
  //restart.visible=true
  reset()
  console.log("lost")
  red.destroy()
  
}
if(FireballGroup2.isTouching(Ecar)){
  explosion2=createSprite(1000,500,20,30)
    explosion2.addImage(EcarDImg)
    explosion2.x=Ecar.x
    explosion2.y=Ecar.y
    explosion2.scale=0.4
    //Ecar.destroy()
    gameState="end"
    //restart.visible=true
    reset()
    console.log("lost")
    red2.destroy()
    
  }
  if(FireballGroup3.isTouching(Ecar)){
    explosion3=createSprite(1000,500,20,30)
      explosion3.addImage(EcarDImg)
      explosion3.x=Ecar.x
      explosion3.y=Ecar.y
      explosion3.scale=0.4
      //Ecar.destroy()
      gameState="end"
      //restart.visible=true
      reset()
      console.log("lost")
      red3.destroy()
      
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
    red.scale = 3;
    FireballGroup.add(red)
}}
function Fireball2() {
  if (frameCount % 60 === 0) {
 red2 = createSprite(Petrolcar2.x,Petrolcar2.y, 10, 10);
 red2.addImage(FireballImg);
 red2.velocityX = 800;
 red2.lifetime = 500;
  red2.scale = 3;
  FireballGroup2.add(red2)
}}
function Fireball3() {
  if (frameCount % 60 === 0) {
 red3 = createSprite(Kingcar.x,Kingcar.y, 10, 10);
 red3.addImage(FireballImg);
 red3.velocityX = 800;
 red3.lifetime = 500;
  red3.scale = 3;
  FireballGroup3.add(red3)
}}
/*function reset(){
  gameState="start"
  restart.visible=false
explosion1.visible=false
explosion2.visible=false
explosion3.visible=false
}*/
function result(){
  if(score==3){
    gameState="end"
    win.visible=true
    Won()
  }
}
function Won(){
  document.getElementById("button6").style.display="inline-block"
}
function winning(){
  window.location="page7.html"
}
function reset(){
  document.getElementById("button7").style.display="inline-block"
  gameState="start"
  explosion1.visible=false
explosion2.visible=false
explosion3.visible=false
}
function restarting(){
  window.location="page6.html"
}