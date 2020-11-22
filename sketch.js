
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var hex, slingshot;
var gameState = "onSling";

function preload() {
   // getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  //  platform = new Ground(150, 305, 300, 170);
    bplatform = new Ground(600,410,420,10)
    box1 = new Box(700,320);
    box2 = new Box(920,320);
    box3 = new Box(700,240);
    box4 = new Box(920,240);
    box5 = new Box(810,160);
    box6 = new Box(810,160);
    box7 = new Box(780,60);
    box8 = new Box(610,0);
    box9 = new Box(815,120);
    box10 = new Box(850,60);
    box11 = new Box(800,10);
    box12 = new Box(710,10);
    box13 = new Box(870,60);
    box14 = new Box(760,160);
    box15 = new Box(870,160);
    box16 = new Box(670,160);
  //  box17 = new Box(680,160);
   
   hex = new hexagon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hex.body,{x:200,y:50});
    //hex.debug = true
    
}

function draw(){
    background("black");
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    bplatform.display();
    //box17.display();
    //platform.display();
    hex.display();
    //log6.display();
    slingshot.display(); 
       
}

function mouseDragged(){
    if  (gameState === "onSling"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&&hex.body.speed<1||(hex.body.position.x<0||hex.body.position.x>800)){
        hex.trajectory = []
     Matter.Body.setPosition(hex.body, {x: 200 , y: 50});
        slingshot.attach(hex.body);
        gameState = "onSling"
    }
}


