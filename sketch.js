// Here we are making var
// Data here cannot be changed
var bullet;
var wall;

var speed;
var speed_2;
var speed_3;
var speed_4;
var weight;


function setup() {

  // Here we have created our Canvas
  createCanvas(1600,400);

  // Set random values
  speed = random(8,10);
  speed_2 = random(9,13);
  speed_3 = random(5,8);
  speed_4 = random(7,11);
  weight = random(400,1500);

  // Here create all the sprites on the Canvas
  // Give a different velocity to each bullet & keep the wall stable
  
  bullet_1 = createSprite(100, 50, 30, 10);
  bullet_1.velocityX = speed;
  wall_1 = createSprite(1300, 50, 20, 50);
  wall_1.velocityX = 0;

  bullet_2 = createSprite(100, 150, 30, 10);
  bullet_2.velocityX = speed_2;
  wall_2 = createSprite(1300, 150, 20, 50);
  wall_2.velocityX = 0;

  bullet_3 = createSprite(100, 250, 30, 10);
  bullet_3.velocityX = speed_3;

  wall_3 = createSprite(1300, 250, 20, 50);
  wall_3.velocityX = 0;

  bullet_4 = createSprite(100, 350, 30, 10);
  bullet_4.velocityX = speed_4;
  wall_4 = createSprite(1300, 350, 20, 50);
  wall_4.velocityX = 0;

  // Give color to your all sprites

  bullet_1.shapeeeColor = "white";
  wall_1.shapeeeColor = "grey";

  bullet_2.shapeeeColor = "white";
  wall_2.shapeeeColor = "grey";

  bullet_3.shapeeeColor = "white";
  wall_3.shapeeeColor = "grey";

  bullet_4.shapeeeColor = "white";
  wall_4.shapeeeColor = "grey";

}

function draw() {

  background("pink");  

  // Stop the bullets after they gets colided with the wall

  if (bullet_1.isTouching(wall_1)) {

  bullet_1.velocityX = 0;
  bullet_1.shapeeeColor = "brown";
  wall_1.shapeeeColor = "grey";

  }

  if (bullet_2.isTouching(wall_2)) {

  bullet_2.velocityX = 0;
  bullet_2.shapeeeColor = "brown";
  wall_2.shapeeeColor = "grey";

  }

  if (bullet_3.isTouching(wall_3)) {

  bullet_3.velocityX = 0;
  bullet_3.shapeeeColor = "brown";
  wall_3.shapeeeColor = "grey";
    
  }

  if (bullet_4.isTouching(wall_4)) {

    bullet_4.velocityX = 0;
    bullet_4.shapeeeColor = "brown";
    wall_4.shapeeeColor = "grey";

  }
   
  if (wall-bullet <(bullet+wall)/2) {

  var Deformation = (0.5 * weight * speed * speed) / 22500;
  if (Deformation>180) {
    bullet_1.shapeColor=color(255,0,0);
    bullet_2.shapeColor=color(255,0,0);
    bullet_3.shapeColor=color(255,0,0);
    bullet_4.shapeColor=color(255,0,0);

  }

  if (Deformation<180 && Deformation>100) {
    bullet_1.shapeColor=color(230,230,0); 
    bullet_2.shapeColor=color(230,230,0);
    bullet_3.shapeColor=color(230,230,0);
    bullet_4.shapeColor=color(230,230,0);
  }

  if (Deformation<100) {
     bullet_1.shapeColor=color(0,255,0);
     bullet_2.shapeColor=color(0,255,0);
     bullet_3.shapeColor=color(0,255,0);
     bullet_4.shapeColor=color(0,255,0);
  }
}

  
  drawSprites();


}
