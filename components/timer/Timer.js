import LooseGame from "../looseGame/LooseGame.js";

class Timer {
  constructor({ app, ship, ArrAsteroids }) {
    this.app = app;
    this.ship = ship;
    this.ArrAsteroids = ArrAsteroids;
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.windowMaxValue = 60;
    this.windowMinValue = 0;
    this.windowCount = this.windowMinValue;
    this.widthCanvas = 1280;
    this.windowTimer = 0;

    this.styleTextTimer = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 32,
      fill: "#000000",
      stroke: "#ffffff",
      strokeThickness: 4,
    });
    this.timerText = null;
  }

  stopTimer() {
    clearInterval(this.windowTimer);
  }

  addMessage() {
    this.app.stage.removeChild(this.ship);
    for (let i = 0; i < 7; i++) {
      this.app.stage.removeChild(this.ArrAsteroids[i]);
      this.app.stage.removeChild(this.ship);
    }
    const gameOwer = new LooseGame({ app: this.app });
    gameOwer.endGame();

    this.stopTimer();
  }

  onWindowTimerComplete() {
    if (this.windowCount === this.windowMaxValue) {
      this.stopTimer();
      this.addMessage();
      return;
    } else {
      this.windowCount++;
      this.timerText.text = `Timer : ${
        this.windowMaxValue - this.windowCount
      } / ${this.windowMaxValue}`;
      this.app.stage.addChild(this.timerText);
    }
  }

  addTimer() {
    this.timerText = new PIXI.Text(
      `Timer : ${this.windowMaxValue - this.windowCount} / ${
        this.windowMaxValue
      }`,
      this.styleTextTimer
    );
    this.timerText.x = this.widthCanvas / 2 - 65;
    this.timerText.y = 15;

    this.app.stage.addChild(this.timerText);

    this.windowTimer = setInterval(() => this.onWindowTimerComplete(), 1000);
  }

  removeTimer() {
    this.app.stage.removeChild(this.timerText);
  }
}

export default Timer;
