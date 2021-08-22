var issImg, spaceImg, spcrftImg1, spcrftImg2, spcrftImg3, spcrftImg4;
var iss, spacecraft, hasDocked;
var spcrft;

function preload()  {

  spaceImg = loadImage("spacebg.jpg");

  issImg = loadImage("iss.png");

  spcrftImg1 = loadImage("spacecraft1.png");
  spcrftImg2 = loadImage("spacecraft2.png");
  spcrftImg3 = loadImage("spacecraft3.png");
  spcrftImg4 = loadImage("spacecraft4.png");
}

function setup() {

  createCanvas(800,400);
  
  hasDocked = false;

  

  iss = createSprite(400, 100);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spcx = Math.round(random(80, 620));

  spacecraft = createSprite(spcrft, 300);
  spacecraft.addImage(spcrftImg1);
  spacecraft.scale = 0.2;
  
  

}
 


function draw() {

  background(spaceImg);  

  

  if(!hasDocked) {
  
    

    if(keyWentDown("right_arrow")) {
    
      spacecraft.addImage(spcrftImg3);
      spacecraft.setVelocity(5, 0);
    }
    
    if(keyWentUp("right_arrow")){
      spacecraft.addImage(spcrftImg1);
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("left_arrow")) {
    
      spacecraft.addImage(spcrftImg4);
      spacecraft.setVelocity(-5, 0);
    }
    
    if(keyWentUp("left_arrow")){
      spacecraft.addImage(spcrftImg1);
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("up_arrow")) {
    
      spacecraft.addImage(spcrftImg2)
      spacecraft.setVelocity(0, -5);
    }
    
    if(keyWentUp("up_arrow")){
      spacecraft.addImage(spcrftImg1);
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("down_arrow")) {
    
      spacecraft.addImage(spcrftImg1);
      spacecraft.setVelocity(0, 5);
    }
    
    if(keyWentUp("down_arrow")){
      spacecraft.addImage(spcrftImg1);
      spacecraft.setVelocity(0, 0);
    }

    if(spacecraft.x-iss.x >= -55 && spacecraft.y-iss.y <= 50)  {
    
      hasDocked = true;
    }

  }

  if(hasDocked) {
    
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;
    spacecraft.addImage (spcrftImg1);

    fill("white");
    textSize(30);
    text("DOCKING SUCCESFUL", 250, 350)
  }

  

  drawSprites();
}