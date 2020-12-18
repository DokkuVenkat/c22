//step 1= include lib in index.html
//step 2= namespacing
const Engine=Matter.Engine;//creates the physics engine
const World= Matter.World;//create the physics world to add bodies
const Bodies = Matter.Bodies;//create the bodies

var engine,world,object,ground,ball;

function setup() {
  createCanvas(400,400);
  //step 3= create the engine & the world
  engine = Engine.create();
  world = engine.world;
//to stop the ground from falling down
  var ground_options={
    isStatic:true
  }

  //step 4= create bodies & add to the world
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
  //make the ball bounce
var ballOptions={
  restitution:1,
}
//create the ball and add it to the world
 ball= Bodies.circle(200,100,20,ballOptions)
 World.add(world,ball);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  //step5= display the circle
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
  //drawSprites();
}