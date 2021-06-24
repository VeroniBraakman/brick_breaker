function Ball() {

  this.x = 100;
  this.y = 200;
  this.speedX = 2;
  this.speedY = 2;
  this.radius = 8

  this.show = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
  }

  this.update = function () {
    this.x+= this.speedX;
    this.y+= this.speedY;

    if (this.x>canvas.width || this.x < 0) {
      this.speedX = this.speedX * -1;
    } if (this.y>=canvas.height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  this.checkPad = function () {
      if (this.x > pad.x && this.x < pad.x + 60) {
        if (this.y > pad.y && this.y < pad.y + 10) {
          this.speedX = this.speedX * -1;
          this.speedY = this.speedY * -1;
        }
      }
  }
}
