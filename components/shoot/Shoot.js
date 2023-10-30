import Bullets from "../bullets/Bullets.js";
import Text from "../text/Text.js";
import EndGame from "../endGame/EndGame.js";

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
    this.textShootedBullet = new PIXI.Text(
      `Shooted bullets : ${this.shootedValueBullet} / 10`,
      this.styleText
    );
    this.ValueTextShootedBullet = new Text({
      app: this.app,
      text: this.textShootedBullet,
      x: 15,
      y: 15,
    });

    this.textDeadedAsteroid = new PIXI.Text(
      `Dead asteroid : ${this.deadedAsteroid} / 7`,
      this.styleText
    );
    this.ValueTextDeadAsteroid = new Text({
      app: this.app,
      text: this.textDeadedAsteroid,
      x: 1050,
      y: 15,
    });

    this.ValueTextShootedBullet.addText();
    this.ValueTextDeadAsteroid.addText();
    this.app.ticker.add((delta) => this.gameLoop(delta));
  }

  shooting() {
    if (this.shootedValueBullet === 10 && this.deadedAsteroid < 7) {
      this.app.stage.removeChild(this.sprite);
      for (let i = 0; i < 7; i++) {
        this.app.stage.removeChild(this.arrAsteroids[i]);
      }

      const windowEndGame = new EndGame({
        app: this.app,
        sprite: this.sprite,
        arrAsteroids: this.arrAsteroids,
      });
      windowEndGame.endGame();
      return;
    }
    if (this.deadedAsteroid === 7) {
      return;
    }

    const newBullet = new Bullets({
      app: this.app,
      sprite: this.sprite,
    });

    this.createdBullet = newBullet.createBullet();
    this.bullets.push(this.createdBullet);

    this.shootedValueBullet++;
    // if (this.shootedValueBullet === 10) {
    // }
    this.textShootedBullet = new PIXI.Text(
      `Shooted bullets : ${this.shootedValueBullet} / 10`,
      this.styleText
    );

    if (!this.ValueTextShootedBullet) {
      this.ValueTextShootedBullet.addText();
    } else {
      this.ValueTextShootedBullet.removeText();
      this.ValueTextShootedBullet = new Text({
        app: this.app,
        text: this.textShootedBullet,
        x: 15,
        y: 15,
      });

      this.ValueTextShootedBullet.addText();
      return;
    }
  }
  checkCollision() {
    this.arrAsteroids.forEach((asteroid) => {
      for (let i = 0; i < this.bullets.length; i++) {
        if (
          this.bullets[i].x < asteroid.x + asteroid.width - 20 &&
          this.bullets[i].x + asteroid.width - 15 > asteroid.x &&
          this.bullets[i].y < asteroid.y + asteroid.height &&
          this.bullets[i].y + asteroid.height > asteroid.y
        ) {
          this.app.stage.removeChild(this.bullets[i]);
          this.bullets.splice(i, 1);
          this.app.stage.removeChild(asteroid);
          asteroid.y = -150;
          this.deadedAsteroid = this.deadedAsteroid + 1;

          this.textDeadedAsteroid = new PIXI.Text(
            `Dead asteroid : ${this.deadedAsteroid} / 7`,
            this.styleText
          );

          if (!this.ValueTextDeadAsteroid) {
            this.ValueTextDeadAsteroid.addText();
          } else {
            this.ValueTextDeadAsteroid.removeText();

            this.ValueTextDeadAsteroid = new Text({
              app: this.app,
              text: this.textDeadedAsteroid,
              x: 1050,
              y: 15,
            });
            this.ValueTextDeadAsteroid.addText();
            return;
          }
        }
      }
    });
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
