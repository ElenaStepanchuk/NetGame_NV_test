// import Canvas from "./components/canvas/Canvas.js";
import Player from "./components/player/Player.js";
import Keyboard from "./components/keyboard/Keyboard.js";
import Asteroid from "./components/asteroid/Asteroid.js";
import Timer from "./components/timer/Timer.js";
import Shoot from "./components/shoot/Shoot.js";
import Bullets from "./components/bullets/Bullets.js";

// const audioFonMusic = new Audio("./audio/fonMusic.mp3");
// const audioSpiceShip = new Audio("./audio/spiceShipShoot.mp3");
// const audioBoss = new Audio("./audio/bossShoot.mp3");

class Game {
  constructor() {
    // this.canvas = this.canvas;
    this.app = new PIXI.Application({
      width: 1280,
      height: 720,
      transparent: true,
      antialias: true,
    });
    this.app.renderer.view.style.position = "absolute";
    document.body.appendChild(this.app.view);

    this.asteroidsArr = this.asteroidsArr;
    // this.audioFon = audioFonMusic.play();
    this.ship = this.ship;

    this.bullets = this.bullets;

    this.keyboard = this.keyboard;
    this.timer = this.timer;
    PIXI.Ticker.shared.add(this.gameLoop);
  }
  startGame() {
    // add scene
    // this.canvas = new Canvas();
    // this.canvas.renderCanvas();

    // add spice ship
    this.ship = new Player({
      app: this.app,
      spritePath: "./images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
    });
    this.ship.addPlayer();

    // add ship bullets
    this.bulletsArr = new Bullets({ app: this.app, sprite: this.ship.sprite });

    // add asteroids
    this.asteroidsArr = new Asteroid({
      app: this.app,
      // bullets: this.bulletsArr.bullets,
    });
    this.asteroidsArr.addAsteroid();

    // add moving for ship
    const keyboard = new Keyboard({
      sprite: this.ship.sprite,
      app: this.app,
      arrAsteroids: this.arrAsteroids,
    });
    document.addEventListener("keydown", keyboard.handleKeyDown.bind(keyboard));

    // add timer
    this.timer = new Timer({
      app: this.app,
      ship: this.ship.sprite,
      ArrAsteroids: this.asteroidsArr.arrayAsteroids,
    });
    this.timer.addTimer();
  }
  gameLoop(delta) {
    // const shootShip = new Shoot({ app: this.app, sprite: this.ship.sprite });
    // shootShip.updateBullets(delta);
  }
  //
  //
  //
  //
  //
  //
  // const canvas = new Canvas();
  // this.canvas.renderCanvas();

  // add music for fon
  // audioFonMusic.play();

  // add asteroids
  // const asteroidsArr = new Asteroid({ app: canvas.app });
  // asteroidsArr.addAsteroid();

  // add spice ship
  // const ship = new Player({
  //   app: canvas.app,
  //   spritePath: "./images/spaceShip.png",
  //   width: 60,
  //   height: 140,
  //   y: 570,
  // });
  // ship.addPlayer();

  // add ship bullets
  // const bullets = new Bullets({ app: canvas.app, sprite: ship.sprite });

  // add moving for ship
  // const keyboard = new Keyboard({
  //   sprite: ship.sprite,
  //   app: canvas.app,
  //   bullets: bullets.bullet,
  // });
  // document.addEventListener("keydown", keyboard.handleKeyDown.bind(keyboard));

  // add feature shooting
  // const shoot = new Shoot({
  //   app: canvas.app,
  //   bullets: bullets.bullets,
  //   sprite: ship.sprite,
  // });
  // shoot.shooting();

  // add timer
  // const timer = new Timer({
  //   app: canvas.app,
  //   ship: ship.sprite,
  //   ArrAsteroids: asteroidsArr.arrayAsteroids,
  // });
  // timer.addTimer();
}
const game = new Game();
game.startGame();
