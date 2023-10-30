import Bullets from "../bullets/Bullets.js";
import Text from "../text/Text.js";
const Graphics = PIXI.Graphics;
import EndGame from "../endGame/EndGame.js";
import ChangeBossHp from "../changeBossHp/ChangeBossHp.js";

class Shoot2 {
  constructor({ app, sprite, target, windowCount }) {
    // this.a = 0;

    this.app = app;
    this.sprite = sprite;
    this.target = target;
    this.windowCount = windowCount;

    this.dead = false;
    this.deadedBoss = 0;
    this.deadedSprite = 0;

    this.shootedValueBullet = 0;
    this.createdBullet = null;
    this.createdBossBullet = null;
    this.bullets = [];
    this.bossBullets = [];
    this.bossHp = null;

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
    this.deadedBossTextHp = new PIXI.Text(`HP BOSS:  `, this.styleText);

    this.audioBoss = new Audio("../../audio/bossShoot.mp3");

    this.deadedBossTextHp.x = 850;
    this.deadedBossTextHp.y = 15;
    this.app.stage.addChild(this.deadedBossTextHp);
    this.deadedBossHp = new Graphics();

    this.deadedBossHp
      .lineStyle(10, 0xff0000, 1)
      .moveTo(1000, 35)
      .lineTo(1200, 35);
    this.app.stage.addChild(this.deadedBossHp);

    this.ValueTextShootedBullet.addText();
  }

  shooting() {
    if (this.shootedValueBullet === 10 && this.deadedBoss !== 4) {
      this.app.stage.removeChild(this.sprite);
      this.app.stage.removeChild(this.target);

      const windowEndGame = new EndGame({
        app: this.app,
        sprite: this.sprite,
        arrAsteroids: this.target,
      });
      windowEndGame.endGame();
      return;
    }
    if (
      this.deadedBoss === 4 ||
      (this.shootedValueBullet === 10 && this.deadedBoss != 4)
    ) {
      return;
    }

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

    this.bossHp.changeHp();
  }

  // create ship bullet
  createShipBullets() {
    const newBullet = new Bullets({
      app: this.app,
      sprite: this.sprite,
    });
    this.createdBullet = newBullet.createBullet();
    this.bullets.push(this.createdBullet);
    this.shootedValueBullet++;
  }

  // create boss bullets
  createBossBullets() {
    const newTargetBullet = new Bullets({
      app: this.app,
      sprite: this.target,
    });
    this.createdBossBullet = newTargetBullet.createBullet();
    this.bossBullets.push(this.createdBossBullet);
    this.audioBoss.play();
  }

  // bullets boss
  updateBossBullets(delta) {
    for (let i = 0; i < this.bossBullets.length; i++) {
      this.bossBullets[i].position.y += this.bossBullets[i].speed;
      if (this.bossBullets[i].position.y > 720) {
        this.bossBullets[i].dead = true;
      }
    }
    for (let i = 0; i < this.bossBullets.length; i++) {
      if (this.bossBullets[i].dead) {
        this.app.stage.removeChild(this.bossBullets[i]);
        this.bossBullets.splice(i, 1);
      }
    }
    this.checkCollisionBulletBossWidthShip();
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
    // this.checkCollision();
    this.checkCollisionBulletWidthBoss();
    this.checkCollisionBulletBossWidthBulletShip();
  }

  // contact bullet ship with boss
  checkCollisionBulletWidthBoss() {
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.bullets[i].x < this.target.x + this.target.width - 45 &&
        this.bullets[i].x + this.target.width - 100 > this.target.x &&
        this.bullets[i].y < this.target.y + this.target.height &&
        this.bullets[i].y + this.target.height > this.target.y
      ) {
        this.app.stage.removeChild(this.bullets[i]);
        this.bullets.splice(i, 1);
        this.deadedBoss++;
      }

      // change boss HP
      this.bossHp = new ChangeBossHp({
        deadedBoss: this.deadedBoss,
        app: this.app,
      });
      this.bossHp.changeHp();
    }
  }

  // contact test bulletBoss with spiceSheep
  checkCollisionBulletBossWidthShip() {
    for (let i = 0; i < this.bossBullets.length; i++) {
      if (
        this.bossBullets[i].x < this.sprite.x + this.sprite.width - 20 &&
        this.bossBullets[i].x + this.sprite.width - 30 > this.sprite.x &&
        this.bossBullets[i].y < this.sprite.y + this.sprite.height &&
        this.bossBullets[i].y + this.sprite.height > this.sprite.y
      ) {
        this.app.stage.removeChild(this.bossBullets[i]);
        this.bossBullets.splice(i, 1);
        this.deadedSprite = this.deadedSprite + 1;
      }
      console.log(this.deadedSprite);
    }
  }

  // contact ballet boss width bullet spiceShip
  checkCollisionBulletBossWidthBulletShip() {
    for (let i = 0; i < this.bullets.length; i++) {
      this.bossBullets.forEach((bulletBoss) => {
        if (
          bulletBoss.x < this.bullets[i].x + 5 &&
          bulletBoss.x + this.bullets[i].x > 5 &&
          bulletBoss.y == this.bullets[i].y - 120
        ) {
          this.app.stage.removeChild(this.bullets[i]);
          this.app.stage.removeChild(bulletBoss);
          // this.a = a + 1;
        }
        // console.log(a);
      });
    }
  }
}
export default Shoot2;
