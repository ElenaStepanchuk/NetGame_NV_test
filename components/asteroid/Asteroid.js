class Asteroid {
  constructor({ app }) {
    this.app = app;

    // this.deadedAsteroid = 0;
    this.asteroid = null;
    this.arrayAsteroids = [];
    this.asteroiSize = 50;
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.shipSpriteHeight = 140;
    this.app.ticker.add((delta) => this.gameLoop(delta));
  }

  addAsteroid() {
    for (let i = 0; i < 7; i++) {
      this.asteroid = PIXI.Sprite.from("../../images/asteroid.png");
      this.asteroid.width = this.asteroiSize;
      this.asteroid.height = this.asteroiSize;
      this.arrayAsteroids.push(this.asteroid);
      this.app.stage.addChild(this.arrayAsteroids[i]);
      this.asteroid.interactive = true;
    }

    this.arrayAsteroids[0].x = 50;
    this.arrayAsteroids[0].y = 130;
    this.arrayAsteroids[1].x = 250;
    this.arrayAsteroids[1].y = 80;
    this.arrayAsteroids[2].x = 500;
    this.arrayAsteroids[2].y = 180;
    this.arrayAsteroids[3].x = 680;
    this.arrayAsteroids[3].y = 280;
    this.arrayAsteroids[4].x = 880;
    this.arrayAsteroids[4].y = 100;
    this.arrayAsteroids[5].x = 940;
    this.arrayAsteroids[5].y = 70;
    this.arrayAsteroids[6].x = 1140;
    this.arrayAsteroids[6].y = 220;
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
  gameLoop(delta) {
    this.moveAsteroid(delta);
  }
}

export default Asteroid;
