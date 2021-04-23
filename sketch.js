const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var particle;
var score =0;

var gameState;

var PLAY = 0;
var END = 1;
var displayScore1;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    gameState = PLAY;
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
     if(particle!=null){
     particle.display();
     if(particle.body.position.y>760 && particle.body.position.x < 300){
       score = score + 500;
       particle = null;
       count = count + 1;
     } else if(particle.body.position.y > 720 && particle.body.position.x > 500){
        score = score + 200;
        particle = null;
        count = count + 1;
      }else if(particle.body.position.y > 720 && particle.body.position.x <500 && particle.body.position.x > 300){
        score = score + 100;
        particle = null;
        count = count + 1;
      }
   }
  
   console.log(count);
   displayScore1 = text("500",25,520);
   displayScore2 = text("500",105,520);
   displayScore3 = text("500",185,520);
   displayScore4 = text("500",265,520);
   displayScore5 = text("100",345,520);
   displayScore6 = text("100",425,520);
   displayScore7 = text("100",505,520);
   displayScore8 = text("200",585,520);
   displayScore9 = text("200",665,520);
   displayScore10 = text("200",745,520);
   if(count>5){
     gameState = END;
     push();
     textSize(100);
     fill("red");
     text("Game Over", 140,400);
     pop();
   }
}

function mousePressed(){
  if(gameState!=="PLAY"){
    particle = new Particle(mouseX,10,10,10);
  }
}