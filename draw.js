var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let bricks = [];

var rightPressed;
var leftPressed;

  ball = new Ball();
  pad = new Pad();

//let i = 0;
//  while (i < 11) {
//    bricks[i] = new Brick(i * 60 + 10, 40);
//      i++;
//      }
let z = 40;
let i = 0;
for (let j = 0; j< 8; j++) {
    for (let k = 0; k<11; k++) {
      bricks[i] = new Brick(k * 60 + 10, z);
      i = i +1;
    }
    z = z+20;
  }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.show();
  ball.update();
  pad.show();
  pad.keyConditions();
  pad.sides();
  ball.checkPad();
  for (let j = 0; j< 3; j++) {
    for (let i = 0; i <bricks.length; i++) {
      bricks[i].show();

    if (ball.x > bricks[i].x && ball.x < bricks[i].x + 60) {
      if (ball.y > bricks[i].y && ball.y < bricks[i].y +10) {
          bricks.splice(i, 1);
          ball.speedX = ball.speedX * -1;
          ball.speedY = ball.speedY * -1;
          }
        }
      }
    }

  requestAnimationFrame(draw);
} draw();
