var tom,tomImage;
var jerry,jerryImage;
var back,backgroundImage;
var tomrun;

function preload() {
    //load the images here
    tomImage=loadImage("images/tomOne.png");
    jerryImage=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    backgroundImage=loadImage("images/garden.png");
    tomrun=loadAnimation("images/tomThree.png","images/tomTwo.png")
    jerrystop=loadAnimation("images/jerryFour.png");
    tomstop=loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(500,400,1000,800);
    back.addImage(backgroundImage);
    
    tom=createSprite(850,400,20,20);
    tom.addAnimation("moving",tomImage);
    tom.scale=0.175;

    jerry=createSprite(70,600,20,20);
    jerry.addAnimation("moving",jerryImage);
    jerry.scale=0.1;

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.addAnimation("tommoving",tomstop);
      tom.changeAnimation("tommoving")
      tom.velocityX=0;
      tom.velocityY=0;
      jerry.addAnimation("jerrymoving",jerrystop);
      jerry.changeAnimation("jerrymoving")
      jerry.velocityX=0;
      jerry.velocityY=0;
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
   tom.velocityX=-3;
   tom.addAnimation("running",tomrun);
   tom.changeAnimation("running",tomrun);
 }

 if(keyCode===RIGHT_ARROW){
  tom.velocityX=3;
  tom.addAnimation("running",tomrun);
  tom.changeAnimation("running",tomrun);
}
if(keyCode===DOWN_ARROW){
  tom.velocityY=3;
  tom.addAnimation("running",tomrun);
  tom.changeAnimation("running",tomrun);
}
if(keyCode===UP_ARROW){
  tom.velocityY=-3;
  tom.addAnimation("running",tomrun);
  tom.changeAnimation("running",tomrun);
}
}


