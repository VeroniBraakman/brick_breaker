var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let bricks = [];

var rightPressed;
var leftPressed;

  ball = new Ball();
  pad = new Pad();
  for (let i = 0; i < 11; i++) {
    bricks[i] = new Brick(i*60 + 5, 20);
  }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.show();
  ball.update();
  pad.show();
  pad.keyConditions();
  pad.sides();
  ball.checkPad();
  for (let i = bricks.length -1; i >=0; i--) {
    bricks[i].show();
    if (ball.x >= bricks[i].x && ball.x <= bricks[i].x + 50) {
      if (ball.y >= bricks[i].y && ball.y <= bricks[i].y + 10) {
        console.log("boom");
        bricks.splice(bricks[i], 1);
      }
    }
  }

  requestAnimationFrame(draw);
} draw();
