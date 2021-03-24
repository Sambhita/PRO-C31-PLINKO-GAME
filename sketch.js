const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

//var plinko, plinkoImg;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
 
function preload(){

}

function setup() {
  createCanvas(480,800);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(240, 785, 480, 30)
 
 //division bodies
 for (var i = 0; i <=width; i = i + 80){
   divisions.push(new Divisions(i, height-divisionHeight/2,10, divisionHeight))
 }

 //plinko bodies
 for (var j = 40; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 15; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
 
}

function draw() {

  background("pink");
  Engine.update(engine);

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
  }

  ground.display();

  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for (var k = 0; k <particles.length; k++){
    particles[k].display();
  }

  drawSprites()
  
}