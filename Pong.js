// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
  
  BackSound.play();
  
}

function preload(){

  PingSound = loadSound("ping.mp3")
  BackSound = loadSound("back.mp3")
  WinSound = loadSound("win.wav")
  img = loadImage('space.png'); // Load the image
 


}


function draw() {
   image(img, 0, 0 / 1, img.width / 1, img.height / 1);

  
  // draw left player
   fill (100,300,25);
  rect(0, playerL, playerWidth, playerHeight);
 
  
  // draw right player
  fill (100,330,25);
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  
  // draw ball
  fill (300,300,300);
  ellipse(ballX, ballY, ballSize)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
    PingSound.play();
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
    WinSound.play();
    
  }
  
  fill(255);
  textSize(18);
  text("SCORE: "+scoreL, 100, 65);
  
  
   // bounce off left player
  if (ballX < 0 + playerWidth && ballY >= playerL && ballY >= playerL - playerHeight) {
    ballX = 0 + playerWidth
    ballXSpeed = -ballXSpeed
    PingSound.play();
  }
  // playerR scores!
  if (ballX <= 0 - playerWidth) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
    WinSound.play();
  }
   fill(255);
  textSize(18);
  text("SCORE: "+scoreR, 430, 65);
  
 
}


