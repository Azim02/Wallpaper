var canvas, backgroundImage;

var wallpaper1, wallpaper2, wallpaper3;
var wallpaperImg1, wallpaperImg2, wallpaperImg3, wallpaperImg4, wallpaperImg5;
var wallpaperImg6, wallpaperImg7, wallpaperImg8, wallpaperImg9, wallpaperImg10;

var next, nextImg;
var next1, next2, next3, next4;

var gameState = 0;
var NEXT1 = 0;
var NEXT2 = 1;
var NEXT3 = 2;
var NEXT4 = 3;
var NEXT5 = 4;
var NEXT6 = 5;
var NEXT7 = 6;

function preload(){
  backgroundImage = loadImage("bgImg.jpg");

  wallpaperImg1 = loadImage("wallpaper1.jpg");
  wallpaperImg3 = loadImage("wallpaper3.jpg");
  wallpaperImg4 = loadImage("wallpaper4.jpg");
  wallpaperImg6 = loadImage("wallpaper6.jpg");
  wallpaperImg7 = loadImage("wallpaper7.jpg");
  wallpaperImg8 = loadImage("wallpaper8.jpg");

  nextImg = loadImage("next.png");

}

function setup(){
  canvas = createCanvas(1000, 1500);
  
  wallpaper1 = createSprite(450, 800);
  wallpaper1.addImage(wallpaperImg4);
  wallpaper1.scale = 3.5;
  wallpaper1.visible = false;
  
  wallpaper2 = createSprite(475, 800);
  wallpaper2.addImage(wallpaperImg7);
  wallpaper2.scale = 1.4;
  wallpaper2.visible = false;
  
  wallpaper3 = createSprite(500, 775);
  wallpaper3.addImage(wallpaperImg3);
  wallpaper3.scale = 1.4;
  wallpaper3.visible = false;

  wallpaper4 = createSprite(450, 800);
  wallpaper4.addImage(wallpaperImg6);
  wallpaper4.scale = 2.5;
  wallpaper4.visible = false;
  
  wallpaper5 = createSprite(475, 800);
  wallpaper5.addImage(wallpaperImg1);
  wallpaper5.scale = 2.8;
  wallpaper5.visible = false;
  
  wallpaper6 = createSprite(475, 800);
  wallpaper6.addImage(wallpaperImg8);
  wallpaper6.scale = 2.8;
  wallpaper6.visible = false;

  next = createSprite(900, 1400);
  next.addImage(nextImg);
  next.scale = 0.6;

  next1 = createSprite(200, 1400);
  next1.addImage(nextImg);
  next1.scale = 0.6;
  next1.visible = false;
  
  next2 = createSprite(400, 1400);
  next2.addImage(nextImg);
  next2.scale = 0.6;
  next2.visible = false;
  
  next3 = createSprite(550, 1400);
  next3.addImage(nextImg);
  next3.scale = 0.6;
  next3.visible = false;

  next4 = createSprite(400, 1400);
  next4.addImage(nextImg);
  next4.scale = 0.6;
  next4.visible = false;
  
  next5 = createSprite(550, 1400);
  next5.addImage(nextImg);
  next5.scale = 0.6;
  next5.visible = false;
}

function draw(){

  background(backgroundImage);

  textSize(25);
  textFont("seoge script");
  fill("green");
  stroke("green");
  text("Wallpaper App", 450, 30);

  textSize(15);
  fill("yellow");
  text("Take a Screenshot, if you like and then you can put it in wallpaper", 300, 75);

  stroke("white");
  line(0, 60, 1000, 60);
  
  stroke("white");
  line(0, 1450, 1000, 1450);

  if(gameState === 0){
    wallpaper1.visible =  true;

    if(touches.length > 0 || mousePressedOver(next)){
      touches = [];

      gameState = 1;
    }
  }  
  else if(gameState === 1){
    wallpaper2.visible =  true;
    wallpaper1.visible =  false;
    next1.visible = true;

    next.x = 2000;


    if(touches.length > 0 || mousePressedOver(next1)){
      touches = [];

      gameState = 2;
    }
  }  
  else if(gameState === 2){
    wallpaper3.visible =  true;
    wallpaper2.visible =  false;
    next2.visible = true;

    next1.x = 2000;

    if(touches.length > 0 || mousePressedOver(next2)){
      touches = [];

      gameState = 3;
    }
  }  
  else if(gameState === 3){
    wallpaper4.visible =  true;
    wallpaper3.visible =  false;
    next3.visible = true;

    next2.x = 2000;

    if(touches.length > 0 || mousePressedOver(next3)){
      touches = [];

      gameState = 4;
    }
  }  
  else if(gameState === 4){
    wallpaper5.visible =  true;
    wallpaper4.visible =  false;
    next4.visible = true;

    next3.x = 2000;

    if(touches.length > 0 || mousePressedOver(next4)){
      touches = [];

      gameState = 5;
    }
  }  
  else if(gameState === 5){
    wallpaper6.visible =  true;
    wallpaper5.visible =  false;
    next5.visible = true;

    next4.x = 2000;

    if(touches.length > 0 || mousePressedOver(next5)){
      touches = [];

      gameState = 6;
    }
  } 
  else if(gameState === 6){
    background("pink");

    wallpaper6.visible =  false;
    
    next5.x = 2000;

    textSize(20);
    fill("blue");
    text("Thank you. More wallpapers will be added soon.", 200, 200);
    text("For creating other apps and games like Brain out game, Subscribe 'Coding With Azim' in youtube", 100, 400);

  }
  

  drawSprites();
}