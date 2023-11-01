import Player from "../player/Player.js";
import Keyboard2 from "../keyboard2/Keyboard2.js";
import Timer2 from "../timer2/Timer2.js";
import StarsAnime from "../starsAnime/StarsAnime.js";
import BossSpeed from "../bossSpeed/BossSpeed.js";

class GameBoss {
  constructor({ app }) {
    this.app = app;
    this.bossBullet = 0;
    this.bossSpeed = null;

    this.bossTimerShoot = 0;

    this.ship = null;
    this.boss = null;
    this.timer = null;
    this.keyboard2 = null;

    this.shotsFired = 0;

    this.bossShootTimer = 0;

    PIXI.Ticker.shared.add(this.gameLoop.bind(this));
  }

  init() {
    // stars animation
    new StarsAnime({ app: this.app });

    // spice ship
    this.ship = new Player({
      app: this.app,
      spritePath:
        "https://elenastepanchuk.github.io/NetGame_NV_test/images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
      x: this.app.screen.width / 2 - 15,
    });

    // boss ship
    this.boss = new Player({
      app: this.app,
      spritePath:
        "https://elenastepanchuk.github.io/NetGame_NV_test/images/spaceShipBoss.png",
      width: 120,
      height: 180,
      y: 80,
      x: 0,
    });

    // timer
    this.timer = new Timer2({
      app: this.app,
      ship: this.ship.sprite,
      target: this.boss.sprite,
    });

    // moving for ship
    this.keyboard2 = new Keyboard2({
      sprite: this.ship.sprite,
      app: this.app,
      target: this.boss.sprite,
    });

    // moving for boss
    this.bossSpeed = new BossSpeed({
      target: this.boss.sprite,
    });
  }

  render() {
    // add spice ship
    this.ship.addPlayer();

    // add boss ship
    this.boss.addPlayer();

    // add timer
    this.timer.addTimer();
  }

  update(delta) {
    // update ship bullets
    this.keyboard2.shoot.updateBullets(delta);

    // update boss bullets
    this.keyboard2.shoot.updateBossBullets(delta);

    // update state when must stop timer
    if (
      (this.keyboard2.shoot.shootedValueBullet === 10 &&
        this.keyboard2.shoot.deadedBoss < 4) ||
      this.keyboard2.shoot.deadedSprite === 1 ||
      (this.keyboard2.shoot.deadedBoss === 4 &&
        this.keyboard2.shoot.shootedValueBullet <= 10)
    ) {
      this.timer.stopTimer();
    }
  }
  gameLoop(delta) {
    this.update(delta);
  }
}

export default GameBoss;
