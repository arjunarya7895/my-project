var mario;
var platformGroup;
var marioAnimation, obstacleAnimation, wallAnimation, groundAnimation;
var wall;
var obstacle;

function preload()
{
  marioAnimation=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacleAnimation=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("images/ground.png");
}


function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player mario
  mario = new Player();
  //creating a group
  platformGroup= createGroup();

  //adding platforms to stand for mario
  for (var i=0;i<26;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      gap=random([0,0,0,0,80]);//givin randome value to gap
      countDistanceX = countDistanceX + platform.rw + gap; //counting x location of next platform to be build
      
     //adding wall to the game
     if(i%3===0)
     {
     wall=new Wall(countDistanceX);
     platformGroup.add(wall.spt);
     }


     if(i%4===0)
     {

    //adding obstacle to the game
     obstacle=new Obstacle(countDistanceX);
     }

      obstacle=new Obstacle(countDistanceX);
   }
 
}

function draw() {
  background('skyblue');

  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  
  //apply gravity to mario and set colliding with platforms
  mario.applyGravity();
  mario.spt.collide(platformGroup);

  //Calling various function to controll mario
  if (keyDown("left"))  
  { 
    mario.moveLeft();
  }
  if (keyDown("right")) 
  { 
    
    mario.moveRight();
  }
  if (keyDown("up") && mario.spt.velocityY===0) 
  { 
    mario.jump();
  }
   drawSprites();
}
