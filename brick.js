function Brick(x, y) {

    this.x = x;
    this.y = y;

    this.show = function() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, 50, 10);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
      
    }
}
