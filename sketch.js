const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var world;
var engine;

var ball;
var pinkballImg, yellowballImg, greenballImg, blueballImg, purpleballImg;
var pinkball, yellowball, greenball, blueball, purpleball;

var pinImg;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10;

var gameState = "SELECTION";

function preload(){
pinkballImg = loadImage("Images/Bowling1.png");
yellowballImg = loadImage("Images/Bowling2.png");
greenballImg = loadImage("Images/Bowling3.png");
blueballImg = loadImage("Images/Bowling4.png");
purpleballImg = loadImage("Images/Bowling5.png");

bgroundImg = loadImage("Images/BowlingAlley.png");

pinImg = loadImage("Images/BowlingPinTopView.png");
}

function setup(){
createCanvas(1300,550);
engine = Engine.create();
world = engine.world;

ball = new Ball(100,245,50);

pin1 = new Pins(1000,245,25);

pin2 = new Pins(1070,205,25);
pin3 = new Pins(1070,280,25);

pin4 = new Pins(1140,170,25);
pin5 = new Pins(1140,250,25);
pin6 = new Pins(1140,330,25);

pin7 = new Pins(1210,135,25);
pin8 = new Pins(1210,215,25);
pin9 = new Pins(1210,290,25);
pin10 = new Pins(1210,380,25);

pinkball = createSprite(80,50,25,25);
pinkball.addImage(pinkballImg);
pinkball.scale = 0.1;

yellowball = createSprite(165,50,25,25);
yellowball.addImage(yellowballImg);
yellowball.scale = 0.1;

greenball = createSprite(250,50,25,25);
greenball.addImage(greenballImg);
greenball.scale = 0.1;

blueball = createSprite(335,50,25,25);
blueball.addImage(blueballImg);
blueball.scale = 0.1;

purpleball = createSprite(420,50,25,25);
purpleball.addImage(purpleballImg);
purpleball.scale = 0.1;

}

function draw(){

if(gameState==="SELECTION"){
background("black");
if(mousePressedOver(pinkball) || mousePressedOver(yellowball) || 
mousePressedOver(greenball) || mousePressedOver(blueball) || mousePressedOver(purpleball)){
    gameState="PLAY";
}
drawSprites();
}

if(gameState==="PLAY"){
background(bgroundImg);
background.scale = 0.1;

ball.display();

pin1.display();

pin2.display();
pin3.display();

pin4.display();
pin5.display();
pin6.display();

pin7.display();
pin8.display();
pin9.display();
pin10.display();

keyPressed();

}

Engine.update(engine);
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        ball.body.position.y = ball.body.position.y - 10;
    }
    
    if(keyCode===DOWN_ARROW){
        ball.body.position.y = ball.body.position.y + 10;
    }
}