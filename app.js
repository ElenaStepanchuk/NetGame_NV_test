import Player from "./components/player/Player.js";
import Keyboard from "./components/keyboard/Keyboard.js";
import Asteroid from "./components/asteroid/Asteroid.js";
import Timer from "./components/timer/Timer.js";
// import Bullets from "./components/bullets/Bullets.js";
import StarsAnime from "./components/starsAnime/StarsAnime.js";
import Text from "./components/text/Text.js";
// import Shoot from "./components/shoot/Shoot.js";
// const audioBoss = new Audio("./audio/bossShoot.mp3");

class Game {
  constructor() {
    this.app = new PIXI.Application({
      width: 1280,
      height: 720,
      transparent: true,
      antialias: true,
    });
    this.app.renderer.view.style.position = "absolute";
    document.body.appendChild(this.app.view);

    this.asteroidsArr = new Asteroid({
      app: this.app,
    });

    this.ship = new Player({
      app: this.app,
      spritePath: "./images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
    });
    // add ship bullets
    // this.bulletsArr = new Bullets({ app: this.app, sprite: this.ship.sprite });

    this.timer = this.timer = new Timer({
      app: this.app,
      ship: this.ship.sprite,
      ArrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    // this.shootedValueBullet = 0;
    // this.deadedAsteroid = 0;

    // this.styleText = new PIXI.TextStyle({
    //   fontFamily: "Monserrat",
    //   FontSize: 32,
    //   fill: "#000000",
    //   stroke: "#ffffff",
    //   strokeThickness: 4,
    // });
    // this.textShootedBullet = new PIXI.Text(
    //   `Shooted bullets: ${this.shootedValueBullet} / 10`,
    //   this.styleText
    // );
    // this.ValueTextShootedBullet = new Text({
    //   app: this.app,
    //   text: this.textShootedBullet,
    //   x: 15,
    //   y: 15,
    // });

    // this.textDeadedAsteroid = new PIXI.Text(
    //   `Dead asteroid: ${this.deadedAsteroid} / 7`,
    //   this.styleText
    // );
    // this.ValueTextDeadAsteroid = new Text({
    //   app: this.app,
    //   text: this.textDeadedAsteroid,
    //   x: 1050,
    //   y: 15,
    // });

    PIXI.Ticker.shared.add(this.gameLoop);
  }
  startGame() {
    // ......................
    // this.ValueTextShootedBullet.addText();
    // this.ValueTextDeadAsteroid.addText();
    // ......................

    // add stars animation
    new StarsAnime({ app: this.app });

    // add spice ship
    this.ship.addPlayer();

    // add asteroids
    this.asteroidsArr.addAsteroid();

    // add moving for ship
    const keyboard = new Keyboard({
      sprite: this.ship.sprite,
      app: this.app,
      arrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    // add timer
    this.timer.addTimer();
  }

  gameLoop(delta) {}
}
const game = new Game();
game.startGame();
