import Player from "../player/Player.js";
import Keyboard from "../keyboard/Keyboard.js";
import Asteroid from "../asteroid/Asteroid.js";
import Timer from "../timer/Timer.js";
import StarsAnime from "../starsAnime/StarsAnime.js";

class Level1 {
  constructor({ app }) {
    this.app = app;
    this.asteroids = null;

    this.ship = null;
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
      spritePath: "/images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
      x: this.app.screen.width / 2 - 15,
    });

    // asteroids
    this.asteroidsArr = new Asteroid({
      app: this.app,
    });

    // timer
    this.timer = new Timer({
      app: this.app,
      ship: this.ship.sprite,
      ArrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    // moving for ship
    this.keyboard = new Keyboard({
      sprite: this.ship.sprite,
      app: this.app,
      arrAsteroids: this.asteroidsArr.arrayAsteroids,
    });
  }

  render() {
    // add spice ship
    this.ship.addPlayer();

    // add asteroids
    this.asteroids = this.asteroidsArr.addAsteroid();

    // add timer
    this.timer.addTimer();
  }

  update(delta) {
    // update ship bullets
    this.keyboard.shoot.updateBullets(delta);

    // update asteroids moving
    this.asteroidsArr.moveAsteroid(delta);

    // update state when must stop timer
    if (
      this.keyboard.shoot.shootedValueBullet === 10 ||
      this.keyboard.shoot.deadedAsteroid === 7
    ) {
      this.timer.stopTimer();
      this.timer.removeTimer();
    }
  }
  gameLoop(delta) {
    this.update(delta);
  }
}

export default Level1;
