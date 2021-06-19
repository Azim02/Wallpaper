var canvas, backgroundImage;

var wallpaper; wallpaperImg1, wallpaperImg2, wallpaperImg3, wallpaperImg4, wallpaperImg5;
var wallpaperImg6, wallpaperImg7, wallpaperImg8, wallpaperImg9, wallpaperImg10;

var next, nextImg;

function preload(){
  backgroundImage = loadImage("images/bgImg.jpg");

  wallpaperImg1 = loadImage("images/wallpaper1.jpg");
  wallpaperImg2 = loadImage("images/wallpaper2.jpg");
  wallpaperImg3 = loadImage("images/wallpaper3.jpg");
  wallpaperImg4 = loadImage("images/wallpaper4.jpg");
  wallpaperImg5 = loadImage("images/wallpaper5.jpg");
  wallpaperImg6 = loadImage("images/wallpaper6.jpg");
  wallpaperImg7 = loadImage("images/wallpaper7.jpg");
  wallpaperImg8 = loadImage("images/wallpaper8.jpg");
  wallpaperImg9 = loadImage("images/wallpaper9.jpg");
  wallpaperImg10 = loadImage("images/wallpaper10.jpg");

  nextImg = loadImage("images/next.png");
}

function setup(){
  canvas = createCanvas(500, 600);

  wallpaper = createSprite(250, 300);
  wallpaper.addImage(wallpaperImg3);
  wallpaper.scale = 2.4;
  
  next = createSprite(425, 550);
  next.addImage(nextImg);
  next.scale = 0.6;
}

function draw(){

  background(backgroundImage);

  textSize(25);
  textFont("seoge script");
  fill("green");
  stroke("green");
  text("Wallpaper App", 175, 30);

  textSize(15);
  fill("yellow");
  text("Take a Screenshot, if you like and then you can put it in wallpaper", 20, 50);

  stroke("white");
  line(0, 60, 500, 60);
  
  stroke("white");
  line(0, 550, 500, 550);
  
  if(touches.length > 0 || mousePressedOver(next)){

    wallpaper.addImage(wallpaperImg4);

    touches = []
  }

  drawSprites();
}