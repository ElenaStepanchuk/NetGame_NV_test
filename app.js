import StarsAnime from "./components/starsAnime/StarsAnime.js";
import StartButton from "./components/startButton/StartButton.js";
import GameBoss from "./components/gameBoss/GameBoss.js";
import Level1 from "./components/level1/Level1.js";

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

    this.startButton = this.startButton.bind(this);

    PIXI.Ticker.shared.add(this.gameLoop.bind(this));

    this.handleEvent = this.handleEvent.bind(this);
    window.addEventListener("keydown", this.handleEvent);
  }

  startButton() {
    const startButton = new StartButton({ app: this.app, game: this });
    startButton.addButton();
    new StarsAnime({ app: this.app });
  }
  startLevel1() {
    if (!this.gameLevel1) {
      this.gameLevel1 = new Level1({ app: this.app });
      this.gameLevel1.init();
      this.gameLevel1.render();
    }
  }
  startBossGame() {
    if (!this.gameWithBoss) {
      this.gameWithBoss = new GameBoss({ app: this.app });
      this.gameWithBoss.init();
      this.gameWithBoss.render();
    }
  }

  handleEvent(e) {
    if (e.keyCode === 83) {
      this.startLevel1();
    }
    if (e.keyCode === 66) {
      this.gameLevel1.keyboard.windowMessage.removeText();
      this.startBossGame();
    }
  }

  gameLoop(delta) {}
}

export default Game;

const game = new Game();
game.startButton();
