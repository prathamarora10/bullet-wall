var bullet;
var wall;
var speed;
var weight;
var thichness;


function setup() {
  createCanvas(1600,800);
  speed = random(20,37)
  weight = random(400,1500)
  thickness = random(22,83)

  bullet = createSprite(400,200,30,30)
  bullet.velocityX = speed;
  bullet.shapeColor = 'white'

  wall = createSprite(1500,400,thichness,800)
  wall.shapeColor = color(230,230,230)

}

function draw() {
  background('black');  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }
    
    
    if(damage < 10){
      wall.shapeColor = color(0,255,0)
    }
    

 drawSprites();
}

function hasCollided(bullet,wall){

bulletRightEdge = bullet.x + bullet.width/2;
wallLeftEdge = wall.x;

if(bulletRightEdge > wallLeftEdge){
  return true
}
  return false



}

}

