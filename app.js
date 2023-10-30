import Player from "./components/player/Player.js";
import Keyboard from "./components/keyboard/Keyboard.js";
import Asteroid from "./components/asteroid/Asteroid.js";
import Timer from "./components/timer/Timer.js";
import StarsAnime from "./components/starsAnime/StarsAnime.js";

import StartButton from "./components/startButton/StartButton.js";

import GameBoss from "./components/gameBoss/GameBoss.js";

class Game {
  constructor() {
    this.asteroids = null;
    this.app = new PIXI.Application({
      width: 1280,
      height: 720,
      transparent: true,
      antialias: true,
    });
    this.app.renderer.view.style.position = "absolute";
    document.body.appendChild(this.app.view);

    this.asteroidsArr = null;
    this.ship = null;
    this.timer = null;
    this.keyboard = null;
    this.shotsFired = 0;

    PIXI.Ticker.shared.add(this.gameLoop.bind(this));

    window.addEventListener("keydown", this.handleEvent.bind(this));
  }

  startButton() {
    const startButton = new StartButton({ app: this.app });
    startButton.addButton();

    new StarsAnime({ app: this.app });
  }
  init() {
    // add stars animation
    new StarsAnime({ app: this.app });

    // add spice ship
    this.ship = new Player({
      app: this.app,
      spritePath: "./images/spaceShip.png",
      width: 60,
      height: 140,
      y: 570,
      x: this.app.screen.width / 2 - 15,
    });

    // add asteroids
    this.asteroidsArr = new Asteroid({
      app: this.app,
    });

    // add timer
    this.timer = new Timer({
      app: this.app,
      ship: this.ship.sprite,
      ArrAsteroids: this.asteroidsArr.arrayAsteroids,
    });

    // add moving for ship
    this.keyboard = new Keyboard({
      sprite: this.ship.sprite,
      app: this.app,
      arrAsteroids: this.asteroidsArr.arrayAsteroids,
    });
  }

  update() {
    // Обновление состояния игры
  }

  render() {
    // Отрисовка элементов на странице

    this.ship.addPlayer();
    this.asteroids = this.asteroidsArr.addAsteroid();
    this.timer.addTimer();
  }
  bossGame() {
    const gameWithBoss = new GameBoss({ app: this.app });
    gameWithBoss.init();
    gameWithBoss.render();
  }

  handleEvent(e) {
    // Обработка событий
    // console.log(e.keyCode);
    if (e.keyCode === 83) {
      // this.init();
      // this.update();
      // this.render();
      this.bossGame();
      // this.bossGame().removeButtonListener();
      // console.log(startButton.removeButtonListener());
    }
    if (e.keyCode === 32) {
      // this.shotsFired++;
      // this.keyboard.valueDeadAsteroids();
      // let killsAsteroids = this.keyboard.killedAsteroid;
      // if (this.shotsFired === 10 || killsAsteroids === 6) {
      //   this.timer.stopTimer();
      //   return;
      // }
    }
  }

  gameLoop(delta) {}
}

export default Game;

const game = new Game();
game.startButton();
