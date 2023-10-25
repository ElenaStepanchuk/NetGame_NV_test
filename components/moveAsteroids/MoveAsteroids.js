class MoveAsteroids {
  constructor({ arrayAsteroids, heightCanvas, shipSpriteHeight, widthCanvas }) {
    this.arrayAsteroids = arrayAsteroids;
    this.heightCanvas = heightCanvas;
    this.shipSpriteHeight = shipSpriteHeight;
    this.widthCanvas = widthCanvas;
    // this.app.ticker.add((delta) => this.gameLoop(delta));
  }
  moveAsteroid(delta) {
    for (let i = 0; i < this.arrayAsteroids.length; i = i + 2) {
      this.arrayAsteroids[i].y += 1;
      this.arrayAsteroids[i].x += 1;

      if (
        this.arrayAsteroids[i].y >
        this.heightCanvas - this.shipSpriteHeight - 100
      ) {
        return (this.arrayAsteroids[i].y = 50);
      } else if (this.arrayAsteroids[i].x > this.widthCanvas - 50) {
        return (this.arrayAsteroids[i].x = 50);
      }
    }
    for (let i = 1; i < this.arrayAsteroids.length; i = i + 2) {
      this.arrayAsteroids[i].y += 1;
      this.arrayAsteroids[i].x -= 1;
      if (
        this.arrayAsteroids[i].y >
        this.heightCanvas - this.shipSpriteHeight - 100
      ) {
        return (this.arrayAsteroids[i].y = 60);
      }
      if (this.arrayAsteroids[i].x < 0) {
        return (this.arrayAsteroids[i].x = this.widthCanvas - 50);
      }
    }
  }
  //   gameLoop(delta) {
  //     this.moveAsteroid(delta);
  //   }
}

export default MoveAsteroids;
