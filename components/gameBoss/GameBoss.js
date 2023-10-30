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

    window.addEventListener("keydown", this.handleEvent.bind(this));
  }

  init() {
    // add stars animation
    new StarsAnime({ app: this.app });

    // add spice ship
    this.ship = new Player({
      app: this.app,
      spritePath: "../../images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
      x: this.app.screen.width / 2 - 15,
    });

    this.boss = new Player({
      app: this.app,
      spritePath: "../../images/spaceShipBoss.png",
      width: 120,
      height: 180,
      y: 80,
      x: 0,
    });
    // add timer
    this.timer = new Timer2({
      app: this.app,
      ship: this.ship.sprite,
      target: this.boss.sprite,
    });

    // add moving for ship
    this.keyboard2 = new Keyboard2({
      sprite: this.ship.sprite,
      app: this.app,
      target: this.boss.sprite,
      windowCount: this.timer.windowCount,
    });

    // add moving for boss
    this.bossSpeed = new BossSpeed({
      target: this.boss.sprite,
    });
  }

  update(delta) {
    // Обновление состояния игры
    this.keyboard2.shoot.updateBullets(delta);
    this.keyboard2.shoot.updateBossBullets(delta);
  }

  render() {
    // Отрисовка элементов на странице

    this.ship.addPlayer();
    this.boss.addPlayer();
    this.timer.addTimer();
  }

  handleEvent(e) {
    // Обработка событий
    // console.log(e.keyCode);
    if (e.keyCode === 83) {
      this.init();
      this.render();
    }
    if (e.keyCode === 32) {
    }
  }

  gameLoop(delta) {
    this.update(delta);
  }
}

export default GameBoss;
