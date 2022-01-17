const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var astro1, astro2;
var spaceship;
var wall1;

function preload(){
    astro1=loadImage("a1.png");
    astro2=loadImage("a2.png");
    spaceship=loadImage("sp2.jpg");
    metalplate=loadImage("metal plate.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    wall1=createSprite(20,100,20,displayHeight)
    wall1.addImage(metalplate);
}

function draw(){
    background(spaceship);
    Engine.update(engine);
    drawSprites();
}