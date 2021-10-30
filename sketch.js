// create box 
var box ;
// create walls
var wall1 ;
var wall2 ;
var wall3 ;
var wall4 ;
var wall5 ;
var wall6 ;
var wall7 ;
var wall8 ;
var wall9;
var wall10;
var wall11 ;
var wall12 ;
// create blue box
var bluebox ; 
var bluebox2;
// create enemy
var dong1;
var dong2;
var dong3;
var dong4;
// create deathscore
var deathscore = 0;

function setup() {
  createCanvas(400,400);
  // setting places of walls & box 
  box = createSprite (40,190,10,10);
  box.shapeColor = "green";
   wall1 = createSprite(190,120,250,3);
   wall2 = createSprite(190,260,250,3);
   wall3 = createSprite(67,145,3,50);
   wall4 = createSprite(67,235,3,50);
   wall5 = createSprite(313,145,3,50);
   wall6 = createSprite(313,235,3,50);
   wall7 = createSprite(41,170,50,3);
   wall8 = createSprite(41,210,50,3);
   wall9 = createSprite(337,210,50,3);
   wall10 = createSprite(337,170,50,3);
   wall11 = createSprite(18,190,3,40);
   wall12 = createSprite(361,190,3,40);
   bluebox = createSprite(65,190,6,39)
   bluebox.shapeColor = "lightblue";
   bluebox2 = createSprite(315,190,6,39);
   bluebox2.shapeColor = "lightblue";
    dong1 = createSprite(100,130,10,10);
   dong1.shapeColor = "red";
   dong2 = createSprite(215,130,10,10);
   dong2.shapeColor = "red";
    dong3 = createSprite(165,250,10,10);
   dong3.shapeColor = "red";
    dong4 = createSprite(270,250,10,10);
   dong4.shapeColor = "red";
   
   dong1.velocityY = 8;
   dong2.velocityY = -8;
   dong3.velocityY = 8;
   dong4.velocityY = -8;
   
}

function draw() 
{
 
  background("white");
textSize(10);
fill("black");
text("Deathscore: " + deathscore,120,100);
  createEdgeSprites();

    dong1.bounceOff(wall1);
    dong1.bounceOff(wall2);
    dong2.bounceOff(wall1);
    dong2.bounceOff(wall2);
    dong3.bounceOff(wall1);
    dong3.bounceOff(wall2);
    dong4.bounceOff(wall1);
    dong4.bounceOff(wall2);

    if(keyIsDown(LEFT_ARROW)){
      box.position.x = box.position.x - 3;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      box.position.x = box.position.x + 3;
    }
    
    if(box.isTouching(dong1)||box.isTouching(dong2)||box.isTouching(dong3)||box.isTouching(dong4)){
      box.x = 40 ; 
      box.y = 190;
      deathscore = deathscore + 1 ;
   }
       
   if(deathscore == 5){
     box.x = 40;
     box.y = 190;
     dong1.x = 100;
     dong1.y = 190;
     dong2.x = 150;
     dong2.y = 190;
     dong3.x = 200;
     dong3.y = 190;
     dong4.x = 250;
     dong4.y = 190;
     dong1.velocityX = 0;
     dong1.velocityY = 0;
     dong2.velocityX = 0;
     dong2.velocityY = 0;
     dong3.velocityX = 0;
     dong3.velocityY = 0;
     dong4.velocityX = 0;
     dong4.velocityY = 0;
     textSize(40);
     textFont("monospace");
     text("YOU LOST",80,340);
     
   }
  
    if(box.isTouching(bluebox2)) {
      box.x = 315;
      box.y = 190;
      dong1.x = 100;
      dong1.y = 190;
      dong2.x = 150;
      dong2.y = 190;
      dong3.x = 200;
      dong3.y = 190;
      dong4.x = 250;
      dong4.y = 190;
      dong1.velocityX = 0;
      dong1.velocityY = 0;
      dong2.velocityX = 0;
      dong2.velocityY = 0;
      dong3.velocityX = 0;
      dong3.velocityY = 0;
      dong4.velocityX = 0;
      dong4.velocityY = 0;
      textSize(40);
     textFont("monospace");
     text("YOU WON",80,340);
    }
   

drawSprites();
}




