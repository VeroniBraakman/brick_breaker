var rightPressed;
var leftPressed;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
  }

function keyUpHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = false;
    }
  }

function Pad() {

  this.x = 100;
  this.y = 350;

  this.show = function () {
  ctx.beginPath();
  ctx.rect(this.x, this.y, 60, 10);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
  }

  this.keyConditions = function() {

      if(rightPressed) {
      this.x += 3
      }
      else if(leftPressed) {
      this.x +=3 * -1;
      }
    }

  this.sides = function () {
    if (this.x > myCanvas.width - 60) {
      this.x += 3 * -1;
    }
    else if (this.x < 0) {
      this.x += 3;
    }
  }
}
