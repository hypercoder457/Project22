var starImg, bgImg;
var star, starBody;
// create variable for fairy sprite and fairyImg
var fairy, fairyImg;

var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	// load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	// create fairy sprite and add animation for fairy
	fairy = createSprite(100, 680, 40, 40);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.1;

	star = createSprite(650, 30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	var starBodyOptions = {
		restitution: 0.5,
		isStatic: true
	}
	starBody = Bodies.circle(650, 30, 5, starBodyOptions);
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
	background(bgImg);

	// write code to play fairyVoice sound
	sound.play();

	star.x = starBody.position.x;
	star.y = starBody.position.y;

	console.log(star.y);

	// write code to stop star in the hand of fairy
	if(star.y > 470 && starBody.position.y > 470) {
		Matter.Body.setStatic(starBody, true);
	}

	drawSprites();
	keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false);
	}

	// write code to move fairy left and right
	if(keyDown("left")) {
		fairy.x -= 3;
	}

	if(keyDown("right")) {
		fairy.x += 3;
	}
}
