class Timer {
  constructor({ app, ship, ArrAsteroids }) {
    this.app = app;
    this.ship = ship;
    this.ArrAsteroids = ArrAsteroids;

    this.styleText = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 48,
      fill: "deepskyblue",
      stroke: "#ffffff",
      strokeThickness: 4,
      dropShadow: true,
      dropShadowDistance: 10,
      dropShadowAngle: Math.PI / 2,
      dropShadowBlur: 4,
      dropShadowColor: "#000000",
    });
    this.endGame = new PIXI.Text(` `, this.styleText);
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.windowMaxValue = 20;
    this.windowMinValue = 0;
    this.windowCount = this.windowMinValue;
    this.widthCanvas = 1280;
    this.windowTimer = 0;
    this.styleText = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 32,
      fill: "#000000",
      stroke: "#ffffff",
      strokeThickness: 4,
    });
    this.timerText;
  }

  addMessage() {
    this.endGame.text = "YOU   LOOSE";
    this.endGame.x = this.widthCanvas / 2 - 60;
    this.endGame.y = this.heightCanvas / 2;
    this.app.stage.removeChild(this.ship);
    for (let i = 0; i < 7; i++) {
      this.app.stage.removeChild(this.ArrAsteroids[i]);
    }

    this.app.stage.addChild(this.endGame);
  }

  onWindowTimerComplete() {
    if (this.windowCount === this.windowMaxValue) {
      clearInterval(this.windowTimer);
      this.addMessage();
      return;
    } else {
      this.windowCount++;
      this.timerText.text = `Timer: ${
        this.windowMaxValue - this.windowCount
      } / ${this.windowMaxValue}`;
      this.app.stage.addChild(this.timerText);
    }
  }

  addTimer() {
    this.timerText = new PIXI.Text(
      `Timer: ${this.windowMaxValue - this.windowCount} / ${
        this.windowMaxValue
      }`,
      this.styleText
    );
    this.timerText.x = this.widthCanvas / 2 - 65;
    this.timerText.y = 15;

    this.app.stage.addChild(this.timerText);

    this.windowTimer = setInterval(() => this.onWindowTimerComplete(), 1000);
  }
}

export default Timer;
