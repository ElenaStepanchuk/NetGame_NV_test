import Player from "./components/player/Player.js";
import Keyboard from "./components/keyboard/Keyboard.js";
import Asteroid from "./components/asteroid/Asteroid.js";
import Timer from "./components/timer/Timer.js";
// import Bullets from "./components/bullets/Bullets.js";
import StarsAnime from "./components/starsAnime/StarsAnime.js";
// import Text from "./components/text/Text.js";
// import Shoot from "./components/shoot/Shoot.js";
// const audioBoss = new Audio("./audio/bossShoot.mp3");

import StartButton from "./components/startButton/StartButton.js";

import MoveAsteroids from "./components/moveAsteroids/MoveAsteroids.js";

class Game {
  constructor() {
    this.asteroids = null;
    this.moveAsteroids = null;
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

    this.timer = new Timer({
      app: this.app,
      ship: this.ship.sprite,
      ArrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    PIXI.Ticker.shared.add(this.gameLoop);

    // this.init = null;
  }
  init() {
    // add stars animation
    new StarsAnime({ app: this.app });

    // add spice ship
    this.ship.addPlayer();

    // add asteroids
    this.asteroids = this.asteroidsArr.addAsteroid();

    // add moving for ship
    // const keyboard = new Keyboard({
    //   sprite: this.ship.sprite,
    //   app: this.app,
    //   arrAsteroids: this.asteroidsArr.arrayAsteroids,
    // });

    // add timer
    this.timer.addTimer();
  }

  update() {
    // Обновление состояния игры

    // add moving for ship
    const keyboard = new Keyboard({
      sprite: this.ship.sprite,
      app: this.app,
      arrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    // add moving for asteroids
    // this.moveAsteroids = new MoveAsteroids({
    //   arrayAsteroids: this.asteroids,
    //   heightCanvas: 1280,
    //   shipSpriteHeight: 50,
    //   widthCanvas: 720,
    // });
    // this.asteroids.moveAsteroid();
    // asteroids.moveAsteroids();
    //
    //
    //
    //
    // const startButton = new StartButton({ app: this.app });
    // startButton.addButton();
    // // add stars animation
    // new StarsAnime({ app: this.app });
    // this.startGame();
  }

  render() {
    // Отрисовка элементов на странице
  }

  handleEvent(event) {
    // Обработка событий
  }

  // startButton() {
  //   const startButton = new StartButton({ app: this.app });
  //   startButton.addButton();

  //   // add stars animation
  //   new StarsAnime({ app: this.app });
  //   this.startGame();
  // }

  gameLoop(delta) {
    // this.moveAsteroids(delta);
  }
}

export default Game;

const game = new Game();
game.init();
game.update();

// class Level1 {
//   constructor({ button, startGame }) {
//     this.button = button;
//     this.startGame = startGame;
//   }
// }

// const game = new Game();
// function Start() {
//   game.startGame();
// }

// function Play() {
//   game.startButton();
// game.startGame();
// }
// Play();
