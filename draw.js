var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let bricks = [];

var rightPressed;
var leftPressed;

  ball = new Ball();
  pad = new Pad();
  for (let i = 0; i < 11; i++) {
    bricks[i] = new Brick(i * 60 + 10, 40);
  }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.show();
  ball.update();
  pad.show();
  pad.keyConditions();
  pad.sides();
  ball.checkPad();
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

  requestAnimationFrame(draw);
} draw();
