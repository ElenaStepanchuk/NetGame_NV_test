import Bullets from "../bullets/Bullets.js";
import Asteroid from "../asteroid/Asteroid.js";

class Shoot {
  constructor({ app, sprite, arrAsteroids }) {
    this.app = app;
    this.sprite = sprite;
    this.arrAsteroids = null;
    this.dead = false;
    this.deadedAsteroid = 0;
    this.shootedValueBullet = 0;
    this.createdBullet = null;
    this.bullets = [];
    this.arrAsteroids = arrAsteroids;
    this.styleText = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 32,
      fill: "#000000",
      stroke: "#ffffff",
      strokeThickness: 4,
    });
    this.shootedBullet = new PIXI.Text(
      `Shooted bullets: ${this.shootedValueBullet} / 10`,
      this.styleText
    );
    this.app.stage.addChild(this.shootedBullet);
    this.shootedBullet.x = 15;
    this.shootedBullet.y = 15;

    this.app.ticker.add((delta) => this.gameLoop(delta));
  }
  shooting() {
    if (
      this.deadedAsteroid === 7 ||
      (this.shootedValueBullet === 10 && this.deadedAsteroid < 7)
    ) {
      return;
    }

    const newBullet = new Bullets({
      app: this.app,
      sprite: this.sprite,
    });

    this.createdBullet = newBullet.createBullet();
    this.bullets.push(this.createdBullet);

    this.shootedValueBullet = this.shootedValueBullet + 1;
    this.app.stage.removeChild(this.shootedBullet);

    this.shootedBullet = new PIXI.Text(
      `Shooted bullet: ${this.shootedValueBullet} / 10`,
      this.styleText
    );
    this.app.stage.addChild(this.shootedBullet);
    this.shootedBullet.x = 15;
    this.shootedBullet.y = 15;
    console.log(this.arrAsteroids, this.sprite, this.app);
  }

  checkCollision() {
    // this.arrAsteroids = new Asteroid({ app: this.app });
    // console.log(this.arrAsteroids, this.sprite);
  }

  updateBullets(delta) {
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].position.y -= this.bullets[i].speed;
      if (this.bullets[i].position.y < 20) {
        this.bullets[i].dead = true;
      }
    }
    for (let i = 0; i < this.bullets.length; i++) {
      if (this.bullets[i].dead) {
        this.app.stage.removeChild(this.bullets[i]);
        this.bullets.splice(i, 1);
      }
    }
    this.checkCollision();
  }

  gameLoop(delta) {
    this.updateBullets(delta);
  }
}
export default Shoot;
