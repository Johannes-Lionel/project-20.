var car;
var car2;
var car3;
var car4;
var wall;
var wall2;
var speed;
var weigth;
function setup() {
  createCanvas(1366,657);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50, 200, 50, 50);
  //car2=createSprite(120,200,50,50)

  wall=createSprite(1500,200,40,200)
  //wall2=createSprite(740,400,40,200)
}

function draw() {
background("black");  
car.velocityX=speed;

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocity=0;
  var deformation=0.5*weight*speed*speed/22509

  if (deformation>180){
    car.shapecolor=color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car.shapecolor=color(230,230,0);
  }
  if(deformation<100){
    car.shapecolor=color(0,255,0);
  }
}

//car2.velocityX=speed;

//if(wall2.x-car2.x<(car.width+wall2.width)/2){
  //car2.velocity=0;
  //var deformation=0.5*weight*speed*speed/22509

  //if (deformation>180){
    //car2.shapecolor=color(255,0,0);
 // }
  //if (deformation<180 && deformation>100){
    car2.shapecolor=color(230,230,0);
  //}
  //if(deformation<100){
   // car2.shapecolor=color(0,255,0);
 // }
//}
drawSprites();
}