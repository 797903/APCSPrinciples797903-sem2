// Garrett Faure
// 11/01

//var body = [];
var numCol, snakeWidth;
var score = 0;
var startGame = 0;
var endSnake = 0;

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  snakeWidth = 25; //snake size
  numCol = width/snakeWidth;
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  frameRate(10); //speed at which program runs
  // add grid interval to even out movement
  snake = new Snake(16, 16, 0, 0, snakeWidth, color(random(0, 255), random(0, 255), random(0, 255)));
  comida = new Comida(int(random(0, 32))*25, int(random(0, 32))*25, color(random(0, 255), random(0, 255), random(0, 255)))
}

// Draw runs 30 times a second
function draw(){
if(startGame === 1){
  background(200, 200, 200);
  runGame();
}
  keyPressed();

  if(startGame === 0 && endSnake === 0){
    fill(0, 0, 0);
    textSize(50);
    text('Press Spacebar to Play', 150, 400)
  }

  //score
  fill(0,0,0);
  textSize(20);
  text('Score: ' + score, 700, 50);

  if(endSnake === 1){
    background(0, 0, 0);

    fill(255, 10, 40);
    textSize(60);
    text('YOU DIED', 300, 400);
    //dead ^

    fill(255, 255, 255);
    textSize(25);
    text('Press Spacebar to Replay', 300, 500);
    //replay ^

    fill(255, 255, 255);
    textSize(25);
    text('Final Score: ' + score, 300, 550);
    startGame = 0;
    keyPressed();
  }
}

function runGame(){
  snake.run();
  comida.run();
}

function keyPressed(){
  if(endSnake === 1 && keyCode === 32){
    score = 0;
  }

    if(keyCode === 32){
        startGame = 1;
        endSnake = 0;
      }

    if(startGame == 1){
        if(keyCode === 38){// up
          snake.vel = createVector(0, -1);
        }
        // down
        if(keyCode === 40){
          snake.vel = createVector(0, 1);
        }
        // left
        if(keyCode === 37){
          snake.vel = createVector(-1, 0);
        }
        // right
        if(keyCode === 39){
          snake.vel = createVector(1, 0);
        }
      }

    if(endSnake === 1){
      keyCode = 81;
      snake.vel = createVector(0, 0);
      snake.body.length = 0;
    }
}
